import updateObject from '../../../utilities/updateObject';
import types from '../types';

const dropCard = (state, action) => {
  const index = action.index || state.cards.length;
  const newCards = [
    ...state.cards.slice(0, index),
    action.cardId,
    ...state.cards.slice(index),
  ];
  return updateObject(state, { cards: newCards });
};

const saveCard = (state, action) => {
  const cards = {
    cards: [...state.cards, action.cardId],
    cardInProgressValue: '',
  };
  return updateObject(state, cards);
};

const saveList = (state, action) => ({
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

    case types.DROP_CARD: return dropCard(state, action);

    case types.SAVE_CARD: return saveCard(state, action);

    case types.SAVE_LIST: return saveList(state, action);

    case types.SHOW_CARD_IN_PROGRESS:
      return updateObject(state, { displayCardInProgress: true });

    default: return state;
  }
};

export default list;
