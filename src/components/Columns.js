import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ColumnContainer from './column/ColumnContainer';
import NewListComposerContainer from './column/NewListComposerContainer';
import './styles/Columns.css';

function Columns({ columns }) {
  return (
    <div className="columns">
      {columns.map(column =>
        <ColumnContainer {...column} />)}
      <NewListComposerContainer />
    </div>
  );
}

export default DragDropContext(HTML5Backend)(Columns);
