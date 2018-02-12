import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import * as cardActions from '../../modules/cards/actions';
import * as listActions from '../../modules/lists/actions';
import types from '../../constants/draggableTypes';
import List from './List';

const listTarget = {
  drop(props, monitor) {
    const { cardId, listId, listIndex } = monitor.getItem();

    const lastList = listId;
    const lastIndex = listIndex;
    const nextList = props.listId;

    props.dropCard(lastList, lastIndex, nextList);
  },
  hover(props, monitor, component) {
    // when drag begins, we hide the card and only display cardDragPreview
    const item = monitor.getItem();
    // @TODO replace DOM manipulation with redux state to hide card
    // window.document.getElementById(item.cardId).style.display = 'none';
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType(),
});

const dropTargetList = DropTarget(types.CARD, listTarget, collect)(List);

export default connect(
  null,
  { ...cardActions, ...listActions },
)(dropTargetList);
