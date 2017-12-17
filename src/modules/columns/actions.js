import types from './types'

export const changeNewCardValue = (columnId, newCardValue) => ({
  type: types.CHANGE_NEW_CARD_VALUE,
  columnId,
  newCardValue
})
