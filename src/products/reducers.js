import { Types as ReduxSauceTypes, createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchProduct: null,
  fetchProductSuccess: ['payload'],
  fetchProductFail: ['error']
})

export const productTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: false,
  data: {}
}

/* ------------- Reducers ------------- */

const defaultAction = (state) => ({
  ...state
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [ReduxSauceTypes.DEFAULT]: defaultAction
})
