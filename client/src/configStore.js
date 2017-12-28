// src/configStore.js

import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import ardupilotWeb from './reducers'
import saga from './sagas/saga'
import { watchLogin, loginFlow, signUpFlow } from './sagas/auth'
import { createDroneFlow, watchFetchAllDrones } from './sagas/drone'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

const sagaMiddleware = createSagaMiddleware()

const routeMiddleware = routerMiddleware(browserHistory)

export default function configureStore(preloadedState) {
    const store = createStore(
	ardupilotWeb,
	preloadedState,
	applyMiddleware(
	    routeMiddleware,
	    thunkMiddleware,
	    sagaMiddleware
	)	
    )
    //sagaMiddleware.run(saga)
    sagaMiddleware.run(loginFlow)
    sagaMiddleware.run(signUpFlow)
    sagaMiddleware.run(createDroneFlow)
    sagaMiddleware.run(watchFetchAllDrones)

    return store
}

