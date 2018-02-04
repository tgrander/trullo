import propTypes from 'prop-types';
import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ListContainer from './list/ListContainer';
import NewListComposerContainer from './list/NewListComposerContainer';
import './styles/Lists.css';

const PropsTypes = {
  lists: propTypes.array.isRequired,
};

function Lists({ lists }) {
  return (
    <div className="lists">
      {lists.map(list =>
        <ListContainer {...list} />)}
      <NewListComposerContainer />
    </div>
  );
}

Lists.propTypes = PropsTypes;

export default DragDropContext(HTML5Backend)(Lists);
