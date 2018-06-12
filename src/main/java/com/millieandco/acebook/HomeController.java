package com.millieandco.acebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HomeController {

	@Autowired
	PostRepository repository;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public String addPost(@RequestParam("post") String post) {
		this.repository.save(new Post(post));
		return "redirect:/";
	}


}
