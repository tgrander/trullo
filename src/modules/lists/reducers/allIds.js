import types from '../types';

const allIdsInitialState = ['123'];

const allIds = (state = allIdsInitialState, action) => {
  switch (action.type) {
    case types.SAVE_LIST: return [...state, action.listId];

    default: return state;
  }
};

export default allIds;
