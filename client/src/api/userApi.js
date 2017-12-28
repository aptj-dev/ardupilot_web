// src/api/userApi.json


let localStorage

if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
   localStorage = global.window.localStorage
}


function handleStatus(response){
    if (response.status >= 200 && response.status < 400) {
	return Promise.resolve(response)
    } else {
	return Promise.reject(new Error(response.statusText))
    }
}

function jsonResponse(response){
    for(var key of response.headers.keys()) {
	console.log(key + ": " + response.headers.get(key))
    }
    localStorage.token = response.token
    return response.json()
}

export const userApi = {
    sign_up(user) {
	const headers = {
	    'Accept'      : 'application/json',
	    'Content-Type': 'application/json'
	}

	const request = {
	    method: 'POST',
	    headers: headers,
	    body: JSON.stringify(user)
	}

	return fetch('https://localhost:3000/auth', request)
	    .then(handleStatus)
	    .then(jsonResponse)
	    .catch((error) => {
	     	throw error
	    })
    }
}
