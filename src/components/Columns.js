import React, { Component } from 'react';
import ColumnContainer from './column/ColumnContainer'
import './styles/Columns.css'

class Columns extends Component {
  render() {
    return (
      <div className="columns">
        {this.props.columns.map(column =>
          <ColumnContainer {...column} />)}
      </div>
    );
  }
}

export default Columns;
