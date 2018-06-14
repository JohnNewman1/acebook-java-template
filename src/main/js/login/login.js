import React from 'react';
import Header from '../home/header'

 class Login extends React.Component {
  render() {
    return (
      <div className='login'>
        <Header login={false} showLogin={false} showLogout={false} />
        <div className='login_inner'>
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
            <form name="f" action="login" method="post">
              <label>Username:</label>
              <input className="form-control" type="text" name="username" />
              <br />
              <label>Password:</label>
              <input className="form-control" type="password" name="password" />
              <br />
              <input type="submit" value="Login" />
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
