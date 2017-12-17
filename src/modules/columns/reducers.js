import types from './types'
import Card from '../cards/model'
import cardsReducer from '../cards/reducers'

const initialState = {
  '123': {
    columnId: '123',
    name: 'Trey',
    color: '#8E6E95',
    cards: {
      '456': {
        cardId: '456',
        columnId: '123',
        editMode: false,
        value: 'Go shopping',
      },
    },
    showNewCard: false,
    newCardValue: ''
  }
}

const columnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD:
      return {
        ...state,
        [action.columnId]: {
          ...state[action.columnId],
          showNewCard: true
        },
      }

    case types.CHANGE_NEW_CARD_VALUE:
      return {
        ...state,
        [action.columnId]: {
          ...state[action.columnId],
          newCardValue: action.value
        },
      }

    case types.SAVE_NEW_CARD:
      return {
        ...state,
        [action.columnId]: {
          ...state[action.columnId],
          newCardValue: '',
          cards: cardsReducer(state.cards, action)
        },
      }

    default:
      return state;
  }
}

export default columnsReducer
