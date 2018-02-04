import updateObject from '../../../utilities/updateObject';
import Card from '../model';
import types from '../types';

const saveCardById = (state, action) => {
  const { cardId, listId, value } = action;
  const newCard = new Card(cardId, listId, value);

  return updateObject(state, { [cardId]: newCard });
};

const deleteCardById = (state, action) => {
  const newState = { ...state };
  delete newState[action.cardId];
  return newState;
};

const changeCardValue = (state, action) => (
  updateObject(state, { value: action.value })
);

const card = (state = {}, action) => {
  switch (action.type) {
    case types.CHANGE_CARD_VALUE: return changeCardValue(state, action);
    case types.DELETE_CARD: return deleteCardById(state, action);
    case types.SAVE_CARD: return saveCardById(state, action);

    default: return state;
  }
};

export default card;
