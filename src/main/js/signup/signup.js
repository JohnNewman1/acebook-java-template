import React from 'react';
import client from '../client';
import { Route, Redirect } from 'react-router';

class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = { redirectToNewPage: false }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	createUser(user) {
		client({
			method: 'POST',
			path: '/api/persons',
			entity: user,
			headers: {'Content-Type': 'application/json'}
		});
	}

	handleChange(event) {
		const name = event.target.name
		const value = event.target.value

		this.setState(
			{ [name]: value }
		);
	}

	handleSubmit(event) {
		event.preventDefault();
		var newUser = {};
		newUser['firstName'] = this.state.firstName;
		newUser['lastName'] = this.state.lastName;
		newUser['username'] = this.state.username;
		newUser['email'] = this.state.email;
		newUser['password'] = this.state.password;

		this.createUser(newUser);
		this.setState(
			{ redirectToNewPage: true }
		);
	}

	render() {
		return (
			<div className="span3">
				<h2 className="title">Sign Up</h2>
				<form onSubmit={this.handleSubmit}>
					<label>First Name</label>
					<input type="text" name="firstName" onChange={this.handleChange} className = "first-name span3"/>
					<label>Last Name</label>
					<input type="text" name="lastName" onChange={this.handleChange} className = "last-name span3"/>
					<label>Username</label>
                    <input type="text" name="username" onChange={this.handleChange} className = "username span3"/>
					<label>Email Address</label>
					<input type="email" name="email" onChange={this.handleChange} className = "email span3"/>
					<label>Password</label>
					<input type="password" name="password" onChange={this.handleChange} className = "password span3"/>
					<input type="submit" value="Sign up" className = "submit btn btn-primary pull-right"/>
				</form>
				{ this.state.redirectToNewPage && <Redirect to="/login" /> }
			</div>
		)
	}
}

export default Signup;
