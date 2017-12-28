import * as types from 'main/types'
import skills from 'commons/utils/skills'

const initialState = {
  ishover: false,
  selected: skills[0]
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case types.HOVER:
      return {
        ishover: true,
        selected: skills[ Math.floor(Math.random() * 4) ]
      }
    case types.BLUR:
      return {
        ...state,
        ishover: false,
      }
    default:
      return state
  }
}
