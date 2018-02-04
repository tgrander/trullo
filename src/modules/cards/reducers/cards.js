import { combineReducers } from 'redux';
import types from '../types';
import card from './card';

/* BY ID */

const deleteCard = (state, action) => {
  const newState = { ...state };
  delete newState[action.cardId];
  return newState;
};

const byIdInitialState = {
  456: {
    cardId: '456',
    listId: '123',
    editMode: false,
    value: 'Go shopping',
  },
};

const byId = (state = byIdInitialState, action) => {
  switch (action.type) {
    case types.CHANGE_CARD_VALUE:
    case types.SAVE_CARD:
      return {
        ...state,
        [action.cardId]: card(state, action),
      };

    case types.DELETE_CARD:
      return deleteCard(state, action);

    default: return state;
  }
};

/* ALL IDS */

const deleteCardFromAllIds = (state, action) => ([
  ...state.slice(0, action.index),
  ...state.slice(action.index + 1),
]);

const allIdsInitialState = ['456'];

const allIds = (state = allIdsInitialState, action) => {
  switch (action.type) {
    case types.SAVE_CARD: return [...state, action.cardId];
    case types.DELETE_CARD: return deleteCardFromAllIds(state, action);

    default: return state;
  }
};

const cards = combineReducers({
  byId,
  allIds,
});

export default cards;
