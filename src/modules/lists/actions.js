import uuid from '../../utilities/uuid';
import types from './types';

export const changeCardInProgressValue = (listId, value) => ({
  type: types.CHANGE_CARD_IN_PROGRESS_VALUE,
  listId,
  value,
});

export const changeListInProgressValue = value => ({
  type: types.CHANGE_LIST_IN_PROGRESS_VALUE,
  value,
});

export const dropCard = (lastList, lastIndex, nextList, nextIndex) => ({
  type: types.DROP_CARD,
  lastList,
  lastIndex,
  nextList,
  nextIndex,
});

export const hideNewListComposer = () => ({
  type: types.HIDE_LIST_IN_PROGRESS,
});

export const saveNewCard = (listId, value) => ({
  type: types.SAVE_CARD,
  cardId: uuid(),
  listId,
  value,
});

export const saveList = listName => ({
  type: types.SAVE_LIST,
  listId: uuid(),
  listName,
});

export const showCardInProgress = listId => ({
  type: types.SHOW_CARD_IN_PROGRESS,
  listId,
});

export const showListInProgress = () => ({
  type: types.SHOW_LIST_IN_PROGRESS,
});
