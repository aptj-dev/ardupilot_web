// src/containers/SignUpContainer.js

import { connect } from 'react-redux'
import { signUpRequest } from '../actions/userActions'
import SignUp from '../components/SignUp'

const mapStateToProps = (state) => {
    return {
	user: {
	    'name': '',
	    'email': '',
	    'password': '',
	    'password_confirmation': ''
	}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	requestSignUp: (user) => {
	    dispatch(signUpRequest(user))
	}
    }
}

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)

export default SignUpContainer

