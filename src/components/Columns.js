import React, { Component } from 'react';
import ColumnContainer from './column/ColumnContainer'
import NewListComposerContainer from './column/NewListComposerContainer'
import './styles/Columns.css'

class Columns extends Component {
  render() {
    return (
      <div className="columns">
        {this.props.columns.map(column =>
          <ColumnContainer {...column} />)}
        <NewListComposerContainer />
      </div>
    );
  }
}

export default Columns;
