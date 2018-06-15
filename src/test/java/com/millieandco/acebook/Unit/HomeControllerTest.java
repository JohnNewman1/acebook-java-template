package com.millieandco.acebook.Unit;

import com.millieandco.acebook.HomeController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
@WebMvcTest(HomeController.class)
public class HomeControllerTest {

    @MockBean
    private HomeController homeController;

    @Test
    public void getsIndex(){
        when(homeController.index()).thenCallRealMethod();
        assertEquals("index", homeController.index());
    }

    @Test
    public void getsSignup(){
        when(homeController.signup()).thenCallRealMethod();
        assertEquals("index", homeController.signup());
    }

    @Test
    public void getsLogin(){
        when(homeController.login()).thenCallRealMethod();
        assertEquals("index", homeController.login());
    }
}
