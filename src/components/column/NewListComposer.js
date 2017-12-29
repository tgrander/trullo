import propTypes from 'prop-types'
import React, { Component } from 'react';

import './styles/NewListComposer.css'

class NewListComposer extends Component {
  static propTypes = {
    addNewList: propTypes.func.isRequired,
    changeNewListValue: propTypes.func.isRequired,
    newListValue: propTypes.string.isRequired,
    showNewListComposer: propTypes.bool.isRequired,
  }

  onChangeNewListValue = e => {
    this.props.changeNewListValue(e.target.value)
  }

  onClickNewListButton = () => {
    this.props.addNewList()
  }

  render() {
    return (
      this.props.showNewListComposer
        ? (
          <div className="new-list-composer list-wrapper">
            <input
              className="list-name-input"
              placeholder="Add a list..."
              value={this.props.newListValue}
              onChange={this.onChangeNewListValue}
            />
            <div className="confirm">Save</div>
          </div>
        )
        : (
          <div
            className="new-list-composer"
            onClick={this.onClickNewListButton}>
            Add a list...
          </div>
        )
    );
  }
}

export default NewListComposer;
