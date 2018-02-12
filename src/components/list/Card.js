import propTypes from 'prop-types';
import React from 'react';
import { DragSource } from 'react-dnd';
import './styles/Card.css';
import types from '../../constants/draggableTypes';

const cardSource = {
  isDragging(props, monitor) {
    return monitor.getItem().cardId === props.cardId;
  },
  beginDrag(props, monitor) {
    const { cardId, listId, listIndex } = props;
    return { cardId, listId, listIndex };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Card extends React.PureComponent {
  static propTypes = {
    cardId: propTypes.string.isRequired,
    connectDragSource: propTypes.func.isRequired,
    isDragging: propTypes.bool.isRequired,
    value: propTypes.string.isRequired,
  }

  render() {
    const { cardId, connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div id={cardId} className={`card ${isDragging && '.dragging'}`}>
        {this.props.value}
      </div>,
    );
  }
}

export default DragSource(types.CARD, cardSource, collect)(Card);
