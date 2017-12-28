// src/containers/Login.js

import { connect } from 'react-redux'
import { loginRequest }  from '../actions/userActions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
    return {
	credentials: {
	    email: '',
	    password: ''
	}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	requestLogin: (credentials) => {
	    dispatch(loginRequest(credentials))
	},
    }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer
