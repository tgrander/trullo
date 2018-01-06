import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ListContainer from './list/ListContainer';
import NewListComposerContainer from './list/NewListComposerContainer';
import './styles/Lists.css';

function Lists({ lists }) {
  return (
    <div className="lists">
      {lists.map(list =>
        <ListContainer {...list} />)}
      <NewListComposerContainer />
    </div>
  );
}

export default DragDropContext(HTML5Backend)(Lists);
