import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import * as cardActions from '../../modules/cards/actions';
import * as columnActions from '../../modules/columns/actions';
import types from '../../constants/draggableTypes';
import List from './List';

const listTarget = {
  drop(props, monitor, component) {
    console.log('DROPPED');
  },
  hover(props, monitor, component) {
    // when drag begins, we hide the card and only display cardDragPreview
    const item = monitor.getItem();
    window.document.getElementById(item.cardId).style.display = 'none';
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
  { ...cardActions, ...columnActions },
)(dropTargetList);
