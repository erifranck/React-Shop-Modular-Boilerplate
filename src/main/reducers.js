import { Types as ReduxSauceTypes, createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchGithub: null,
  fetchGithubSuccess: ['payload'],
  fetchGithubFail: ['error']
})

export const mainTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: false,
  githubData: {}
}

/* ------------- Reducers ------------- */

const defaultAction = (state) => ({
  ...state
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [ReduxSauceTypes.DEFAULT]: defaultAction
})
