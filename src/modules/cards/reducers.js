import types from './types'
import Card from '../cards/model'

const cardsReducer = (state, action) => {
  switch (action.type) {
    case types.SAVE_NEW_CARD:
      return {
        ...state,
        [action.cardId]: new Card(action.cardId, action.columnId, action.value)
      }

    case types.CHANGE_CARD_VALUE:
      return {
        ...state,
        [action.cardId]: {
          value: action.value
        }
      }

    default:
      return state;
  }
}

export default cardsReducer
