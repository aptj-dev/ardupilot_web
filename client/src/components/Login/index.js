// src/components/Login/index.js

import React, { Component } from 'react'
import TextInput from '../common/TextInput'

export default class Login extends Component {
    constructor(props) {
	super(props);
	this.onChange = this.onChange.bind(this);
    }
    
    onChange(event) {
	const field = event.target.name;
	const credentials = this.props.credentials;
	credentials[field] = event.target.value;
	return this.setState({credentials: credentials});
    }

    render() {
	return (
		< div>
		<form>
		< TextInput
            name="email"
            label="email"
            value={this.props.credentials.email}
            onChange={this.onChange}/>
		
		< TextInput
            name="password"
            label="password"
            type="password"
            value={this.props.credentials.password}
            onChange={this.onChange}/>

		<button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.requestLogin(this.state.credentials)}>
		Log In
		</button>
	    </form>
		</div>
	);
    }
}
