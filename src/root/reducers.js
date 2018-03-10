import { combineReducers } from 'redux'

// custom import
import { reducer as main } from 'main/reducers'

const rootReducer = combineReducers({
  main
})

export default rootReducer
