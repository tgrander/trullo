import cardsReducer from '../cards/reducers'
import List from './model'
import types from './types'

const initialState = {
  data: {
    '123': {
      columnId: '123',
      name: 'Trey',
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
  },
  newListValue: '',
  showNewListComposer: false
}

const columnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_CARD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.columnId]: {
            ...state.data[action.columnId],
            showNewCard: true
          },
        }
      }

    case types.ADD_NEW_LIST:
      return {
        ...state,
        showNewListComposer: true
      }

    case types.CHANGE_NEW_CARD_VALUE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.columnId]: {
            ...state.data[action.columnId],
            newCardValue: action.newCardValue
          },
        }
      }

    case types.CHANGE_NEW_LIST_VALUE:
      return {
        ...state,
        newListValue: action.newListValue
      }

    case types.HIDE_NEW_LIST_COMPOSER:
      return {
        ...state,
        showNewListComposer: false
      }

    case types.SAVE_NEW_CARD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.columnId]: {
            ...state.data[action.columnId],
            newCardValue: '',
            cards: cardsReducer(state.data[action.columnId].cards, action)
          },
        }
      }

    case types.SAVE_NEW_LIST:
      return {
        ...state,
        newListValue: '',
        data: {
          ...state.data,
          [action.listId]: new List(action.listId, action.listName)
        }
      }

    default:
      return state;
  }
}

export default columnsReducer
