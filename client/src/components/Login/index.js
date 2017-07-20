// src/components/Login/index.js
import React, { Component } from 'react'
import { EmailSignUpForm } from 'redux-auth/default-theme'

export default class Login extends Component {
    render() {
	return (
		<EmailSignUpForm />
	);
    }
}
