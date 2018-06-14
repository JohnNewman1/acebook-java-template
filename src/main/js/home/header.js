import React from 'react';
import Login from '../login/login';
import client from '../client'
import { Redirect } from 'react-router'

const defaultProps = {
  showLogout: true,
  showSignUp: true
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false, redirect: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    client({
      method: 'POST',
      path: '/logout'
    }).then(res => {
      this.setState({ redirect: true });
    });
  }

  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          { this.props.showSignUp && <li className="navbar-right sign" role="presentation"><a className="sign-up" href="/signup">Sign Up</a></li>}
          { this.props.showLogout && <li className="navbar-right sign" role="presentation"><a className="log-out" href="#" onClick={this.handleClick}>Log Out</a></li> }
          { this.props.login && <li className="navbar-right" role="presentation"><a href="#" onClick={this.toggleLogin}>Login</a></li>}
          { this.state.redirect && <Redirect to="/login"/> }
        </ul>
      </div>
    );
  }
}

Header.defaultProps = defaultProps;

export default Header;
