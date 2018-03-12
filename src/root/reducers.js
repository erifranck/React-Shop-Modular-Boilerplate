import { combineReducers } from 'redux'

// custom import
import { reducer as main } from 'main/reducers'
import { reducer as product } from 'products/reducers'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  main,
  product,
  form: formReducer
})

export default rootReducer
