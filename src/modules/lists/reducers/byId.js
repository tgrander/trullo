import insertItemAtIndex from '../../../utilities/insertItemAtIndex';
import removeItemFromArrayByIndex from '../../../utilities/removeItemFromArrayByIndex';
import types from '../types';
import list from './list';

const addCardToList = (list, card) => ({
  ...list,
  cards: insertItemAtIndex(list.cards, card),
});

const removeCardFromList = (list, cardIndex) => ({
  ...list,
  cards: removeItemFromArrayByIndex(list.cards, cardIndex),
});

const dropCard = (state, action) => {
  const {
    lastList, lastIndex, nextList,
  } = action;

  if (lastList === nextList) {
    return state;
  }

  const card = state[lastList].cards[lastIndex];

  return {
    ...state,
    [nextList]: addCardToList(state[nextList], card),
    [lastList]: removeCardFromList(state[lastList], lastIndex),
  };
};

const byIdInitialState = {
  123: {
    listId: '123',
    name: 'Trey',
    cards: ['456'],
    displayCardInProgress: false,
    cardInProgressValue: '',
  },
};

const byId = (state = byIdInitialState, action) => {
  switch (action.type) {
    case types.CHANGE_CARD_IN_PROGRESS_VALUE:
    case types.SAVE_CARD:
    case types.SAVE_LIST:
    case types.SHOW_CARD_IN_PROGRESS:
      return {
        ...state,
        [action.listId]: list(state[action.listId], action),
      };

    case types.DROP_CARD: return dropCard(state, action);

    default: return state;
  }
};

export default byId;
