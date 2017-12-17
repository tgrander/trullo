import uuid from '../../utilities/uuid'

export const addCard = (columnId) => ({
  type: 'ADD_CARD',
  cardId: uuid(),
  columnId
})

export const changeCardText = (columnId, cardId, value) => ({
  type: 'CHANGE_CARD_VALUE',
  cardId,
  columnId,
  value
})
