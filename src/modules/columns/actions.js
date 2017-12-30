import uuid from '../../utilities/uuid'
import types from './types'

export const addNewCard = (columnId) => ({
  type: types.ADD_NEW_CARD,
  columnId
})

export const addNewList = () => ({
  type: types.ADD_NEW_LIST
})

export const hideNewListComposer = () => ({
  type: types.HIDE_NEW_LIST_COMPOSER
})

export const changeNewCardValue = (columnId, newCardValue) => ({
  type: types.CHANGE_NEW_CARD_VALUE,
  columnId,
  newCardValue
})

export const changeNewListValue = newListValue => ({
  type: types.CHANGE_NEW_LIST_VALUE,
  newListValue
})

export const saveNewCard = (columnId, value) => ({
  type: types.SAVE_NEW_CARD,
  cardId: uuid(),
  columnId,
  value
})
