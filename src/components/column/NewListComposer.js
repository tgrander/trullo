import propTypes from 'prop-types'
import React, { Component } from 'react';

import './styles/NewListComposer.css'

class NewListComposer extends Component {
  static propTypes = {
    addNewList: propTypes.func.isRequired,
    changeNewListValue: propTypes.func.isRequired,
    hideNewListComposer: propTypes.func.isRequired,
    newListValue: propTypes.string.isRequired,
    saveNewList: propTypes.func.isRequired,
    showNewListComposer: propTypes.bool.isRequired,
  }

  onChangeNewListValue = e => {
    this.props.changeNewListValue(e.target.value)
  }

  onClickNewListButton = () => {
    this.props.addNewList()
  }

  onClickSave = () => {
    if (this.props.newListValue.length > 0) {
      this.props.saveNewList(this.props.newListValue)
    }
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
            <div className="controls">
              <div
                className="confirm"
                onClick={this.onClickSave}>
                Save
              </div>
              <div
                className="cancel"
                onClick={this.props.hideNewListComposer}
                >
                Cancel
              </div>
            </div>
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
