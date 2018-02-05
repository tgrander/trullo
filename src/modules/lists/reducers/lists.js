import { combineReducers } from 'redux';
import insertItemAtIndex from '../../../utilities/insertItemAtIndex';
import removeItemFromArray from '../../../utilities/removeItemFromArray';
import updateObject from '../../../utilities/updateObject';
import types from '../types';
import list from './list';

const newListInitialState = {
  listInProgressValue: '',
  displayListInProgress: false,
};

const newList = (state = newListInitialState, action) => {
  switch (action.type) {
    case types.CHANGE_LIST_IN_PROGRESS_VALUE:
      return updateObject(state, { listInProgressValue: action.value });

    case types.HIDE_LIST_IN_PROGRESS:
      return updateObject(state, { displayListInProgress: false });

    case types.SHOW_LIST_IN_PROGRESS:
      return updateObject(state, { displayListInProgress: true });

    case types.SAVE_LIST:
      return updateObject(state, { listInProgressValue: '' });

    default: return state;
  }
};

const dropCard = (state, action) => {
  const { cardId, lastList, nextList } = action;
  const dropTargetList = lastList === nextList ? lastList : nextList;
  const index = action.index || state[dropTargetList].cards.length;

  const newState = {
    ...state,
    [dropTargetList]: {
      ...state[dropTargetList],
      cards: insertItemAtIndex(state[dropTargetList].cards, cardId, index),
    },
    [lastList]: {
      ...state[lastList],
      cards: removeItemFromArray(state[lastList].cards, cardId),
    },
  };

  return newState;
};

/* BY ID */

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

/* ALL IDs */

const allIdsInitialState = ['123'];

const allIds = (state = allIdsInitialState, action) => {
  switch (action.type) {
    case types.SAVE_LIST: return [...state, action.listId];

    default: return state;
  }
};

const lists = combineReducers({
  allIds,
  byId,
  newList,
});

export default lists;
