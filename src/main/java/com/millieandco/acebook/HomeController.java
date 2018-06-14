package com.millieandco.acebook;

import com.millieandco.acebook.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {

	@Autowired
    PostRepository postrepository;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@RequestMapping(value = "/signup")
	public String signup() { return "index"; }

	@RequestMapping(value = "/login")
	public String login() {
		return "index";
	}


}
