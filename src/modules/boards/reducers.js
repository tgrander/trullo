import types from './types'

const initialState = {
  data: []
}

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_BOARD:
      return {
        ...state
      }

    default:
      return state
  }
}

export default boardsReducer
