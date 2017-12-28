// src/reducers/initialState.js

export default {  
    session: !!sessionStorage.jwt,
    drones: []
}
