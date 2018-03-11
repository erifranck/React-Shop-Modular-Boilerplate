import { Types as ReduxSauceTypes, createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchProduct: null,
  onFetch: null,
  fetchProductSuccess: ['payload'],
  fetchProductFail: ['error']
})

export const productTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: false,
  data: []
}

/* ------------- Reducers ------------- */

const defaultAction = (state) => ({
  ...state
})

const onFetch = (state) => ({
  ...state,
  fetching: true
})

const fetchSuccess = (state, action) => ({
  ...state,
  fetching: false,
  data: action.payload
})

const fetchFail = (state, action) => ({
  ...state,
  fetching: false,
  data: action.error
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [ReduxSauceTypes.DEFAULT]: defaultAction,
  [Types.ON_FETCH]: onFetch,
  [Types.FETCH_PRODUCT_SUCCESS]: fetchSuccess,
  [Types.FETCH_PRODUCT_FAIL]: fetchFail
})
