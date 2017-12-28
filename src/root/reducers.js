import { combineReducers } from 'redux'

// custom import
import { main } from 'main/reducers'

const rootReducer = combineReducers({
  main
})

export default rootReducer
