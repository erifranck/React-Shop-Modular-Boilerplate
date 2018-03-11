import { combineReducers } from 'redux'

// custom import
import { reducer as main } from 'main/reducers'
import { reducer as product } from 'products/reducers'

const rootReducer = combineReducers({
  main,
  product
})

export default rootReducer
