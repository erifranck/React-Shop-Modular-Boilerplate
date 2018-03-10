import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

// custom import
import rootSaga from 'root/saga'
import rootReducer from 'root/reducers'

const sagaMiddleware = createSagaMiddleware()


const middleware = [sagaMiddleware]

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middleware)))

  sagaMiddleware.run(rootSaga)

  return store
}

if (process.env.NODE_ENV !== 'production') {
  window.store = configureStore
}

export default configureStore
