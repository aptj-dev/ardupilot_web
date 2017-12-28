// src/api/sessionApi.js

export const sessionApi = {
    login(credentials) {
	const request = {
	    method: 'POST',
	    headers: {
		"Accept"      : "application/json",
		"Content-Type": "application/json"
	    },
	    body: JSON.stringify(credentials)
	}
	alert(JSON.stringify(request))
	return fetch('https://localhost:3000/auth/sign_in', request)
	    .then(statusHelper)
	    .then(jsonResponse)
	    .catch(error => {
		throw error
	    })
    },
}

function jsonResponse(response){
    for(var key of response.headers.keys()){
	console.log(key + ": " + response.headers.get(key))
    }
    return response.json()
}

function statusHelper (response) {
    if (response.status >= 200 && response.status < 300) {
	return Promise.resolve(response)
    } else {
	return Promise.reject(new Error(response.statusText))
    }
}

