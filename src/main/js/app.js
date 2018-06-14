import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home/home';
import Signup from './signup/signup';
import Login from './main/js/login/login.js';
import Logout from './logout/logout';

import { BrowserRouter as Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <Switch>
	  <div>
		  <Route exact path={"/"} component = {Home} />
		  <Route path={"/signup"} component = {Signup} />
		  <Route path={"/login"} component = {Login} />
		  <Route path={"/logout"} component = {Logout} />
	  </div>
  </Switch>,
	document.getElementById('app')
)
