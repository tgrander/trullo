import uuid from '../../utilities/uuid'
import types from './types'

export const addNewCard = (columnId) => ({
  type: types.ADD_NEW_CARD,
  columnId
})

export const changeNewCardValue = (columnId, newCardValue) => ({
  type: types.CHANGE_NEW_CARD_VALUE,
  columnId,
  newCardValue
})

export const saveNewCard = (columnId, value) => ({
  type: types.SAVE_NEW_CARD,
  cardId: uuid(),
  columnId,
  value
})
