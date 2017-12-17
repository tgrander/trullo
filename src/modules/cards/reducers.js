import types from './types'
import Card from '../cards/model'

const cardsReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_CARD:
      return {
        ...state,
        [action.cardId]: new Card(action.cardId)
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
