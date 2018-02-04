import updateObject from '../../../utilities/updateObject';
import types from '../types';

const saveCard = (state, action) => {
  const { cardId, listId, value } = action;
  return {
    cardId,
    listId,
    value,
    editMode: false,
  };
};

const changeCardValue = (state, action) => (
  updateObject(state, { value: action.value })
);

const card = (state = {}, action) => {
  switch (action.type) {
    case types.CHANGE_CARD_VALUE: return changeCardValue(state, action);
    case types.SAVE_CARD: return saveCard(state, action);

    default: return state;
  }
};

export default card;
