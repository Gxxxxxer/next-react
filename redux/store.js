import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer, { exampleInitialState } from './reducer'

export function configureStore(initialState = exampleInitialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

    return store
}

