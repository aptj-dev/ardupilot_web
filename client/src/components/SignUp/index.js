// src/components/SignUp/index.js

import React, { Component } from 'react'
import TextInput from '../common/TextInput'

export default class SignUp extends Component {
    constructor(props) {
	super(props);
	this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
	const field = event.target.name;
	const user = this.props.user;
	user[field] = event.target.value;
	return this.setState({'user': user});
    }

    render() {
	return (
		<div>
		<form>
		<TextInput
            name="name"
            label="name"
            value={this.props.user.name}
            onChange={this.onChange}/>
		
		<TextInput
            name="email"
            label="email"
            value={this.props.user.email}
            onChange={this.onChange}/>
		
		<TextInput
            name="password"
            label="password"
            type="password"
            value={this.props.user.password}
            onChange={this.onChange}/>

		<TextInput
            name="password_confirmation"
            label="password_confirmation"
            type="password"
            value={this.props.user.password_confirmation}
            onChange={this.onChange}/>

		<button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.requestSignUp(this.props.user)}>
		Sign Up
		</button>
		</form>
		</div>
	);
    }
}
