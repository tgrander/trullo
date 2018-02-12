import updateObject from '../../../utilities/updateObject';
import types from '../types';

const saveNewCard = (state, action) => {
  const cards = {
    cards: [...state.cards, action.cardId],
    cardInProgressValue: '',
  };
  return updateObject(state, cards);
};

const saveNewList = (state, action) => ({
  listId: action.listId,
  name: action.listName,
  cards: [],
  displayCardInProgress: false,
  cardInProgressValue: '',
});

const list = (state = {}, action) => {
  switch (action.type) {
    case types.CHANGE_CARD_IN_PROGRESS_VALUE:
      return updateObject(state, { cardInProgressValue: action.value });

    case types.SAVE_CARD: return saveNewCard(state, action);

    case types.SAVE_LIST: return saveNewList(state, action);

    case types.SHOW_CARD_IN_PROGRESS:
      return updateObject(state, { displayCardInProgress: true });

    default: return state;
  }
};

export default list;
