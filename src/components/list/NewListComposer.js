import propTypes from 'prop-types';
import React, { Component } from 'react';

import './styles/NewListComposer.css';

class NewListComposer extends Component {
  static propTypes = {
    showListInProgress: propTypes.func.isRequired,
    changeListInProgressValue: propTypes.func.isRequired,
    hideNewListComposer: propTypes.func.isRequired,
    listInProgressValue: propTypes.string.isRequired,
    saveList: propTypes.func.isRequired,
    showListInProgress: propTypes.bool.isRequired,
  }

  onChangeNewListValue = (e) => {
    this.props.changeListInProgressValue(e.target.value);
  }

  onClickNewListButton = () => {
    this.props.showListInProgress();
  }

  onClickSave = () => {
    if (this.props.listInProgressValue.length > 0) {
      this.props.saveList(this.props.listInProgressValue);
    }
  }

  onKeyPress = ({ key }) => {
    if (key === 'Enter' && this.props.listInProgressValue.length > 0) {
      this.props.saveList(this.props.listInProgressValue);
    }
  }

  render() {
    return (
      this.props.showListInProgress
        ? (
          <div className="new-list-composer list-wrapper">
            <input
              className="list-name-input"
              placeholder="Add a list..."
              value={this.props.listInProgressValue}
              onChange={this.onChangeNewListValue}
              onKeyPress={this.onKeyPress}
            />
            <div className="controls">
              <div
                className="confirm"
                onClick={this.onClickSave}
              >
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
            onClick={this.onClickNewListButton}
          >
            Add a list...
          </div>
        )
    );
  }
}

export default NewListComposer;
