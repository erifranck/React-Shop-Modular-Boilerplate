import * as types from 'main/types'

const initialState = {
  ishover: false,
  selected: 0
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case types.HOVER:
      return {
        ishover: true,
        selected: Math.floor(Math.random() * 5) + 1
      }
    case types.BLUR:
      return {
        ishover: false,
        selected: 0
      }
    default:
      return state
  }
}
