import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
// import nextReduxSaga from 'next-redux-saga'
// import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'

import rootReducer, { exampleInitialState } from './reducer'
// import rootSaga from './saga'

// const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState = exampleInitialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

    // store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

// export function withReduxSaga(...connectArgs) {
//     return BaseComponent => withRedux(configureStore, ...connectArgs)(BaseComponent)
// }