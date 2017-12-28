// src/api/droneApi.js

function statusHelper(response){
    if (response.status >= 200 && response.status < 300) {
	return Promise.resolve(response)
    } else {
	return Promise.reject(new Error(response.statusText))
    }
}

function jsonResponse(response){
    return response.json()
}

export const droneApi = {
    requestHeaders() {
	alert("Token: " + sessionStorage.jwt)
	return {'ATHORIZATION':  `Bearer ${sessionStorage.jwt}`}
    },

    getAllDrones() {
	const headers = {
	    "Accept": "application/json",
	    "Content-Type": "application/json"
	}
	
	const options = {
	    method: 'GET',
	    headers: headers,
	}

	return fetch('https://localhost:3000/v1/drones', options)
	    .then(statusHelper)
	    .then(jsonResponse)
	    .catch(error => {
		throw error
	    })
    },
    
    createDrone(params) {
	const headers = {
	    "Accept": "application/json",
	    "Content-Type": "application/json"
	}
	const options = {
	    method: 'POST',
	    headers: headers,
	    body: JSON.stringify({drone: params})
	}	

	return fetch('https://localhost:3000/v1/drones', options)
	    .then(statusHelper)
	    .then(jsonResponse)
	    .catch(error => {
		throw error
	    })
    }
}

