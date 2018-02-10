import types from '../types';

const newListInitialState = {
  listInProgressValue: '',
  displayListInProgress: false,
};

const newList = (state = newListInitialState, action) => {
  switch (action.type) {
    case types.CHANGE_LIST_IN_PROGRESS_VALUE:
      return { ...state, listInProgressValue: action.value };

    case types.HIDE_LIST_IN_PROGRESS:
      return { ...state, displayListInProgress: false };

    case types.SHOW_LIST_IN_PROGRESS:
      return { ...state, displayListInProgress: true };

    case types.SAVE_LIST:
      return { ...state, listInProgressValue: '' };

    default: return state;
  }
};

export default newList;
