import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// custom import
import rootReducer from 'root/reducers'

const middleware = [thunk]

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middleware)))

  return store
}

if (process.env.NODE_ENV !== 'production') {
  window.store = configureStore
}

export default configureStore
