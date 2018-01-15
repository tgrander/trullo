import propTypes from 'prop-types';
import React from 'react';
import Card from './Card';
import NewCard from './NewCard';
import './styles/List.css';

class List extends React.PureComponent {
  static propTypes = {
    addNewCard: propTypes.func.isRequired,
    cards: propTypes.shape({
      cardId: propTypes.string,
      text: propTypes.string,
    }).isRequired,
    changeNewCardValue: propTypes.func.isRequired,
    color: propTypes.string.isRequired,
    columnId: propTypes.string.isRequired,
    connectDropTarget: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    showNewCard: propTypes.bool.isRequired,
    newCardValue: propTypes.string.isRequired,
    saveNewCard: propTypes.func.isRequired,
  }

  onAddNewCard = () => {
    this.props.addNewCard(this.props.columnId);
  }

  onConfirmClick = () => {
    if (this.props.newCardValue.length > 0) {
      const { newCardValue, columnId, saveNewCard } = this.props;
      saveNewCard(columnId, newCardValue);
    }
  }

  render() {
    const { cards, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div className="list-wrapper">
        <div className="list-content">
          <div className="list-header">
            <h2 className="list-name">{this.props.name}</h2>
          </div>
          <div className="list-cards">
            {Object.keys(cards).map((cardId) => {
              const card = cards[cardId];
              return (
                <Card
                  key={cardId}
                  columnId={this.props.columnId}
                  {...card}
                  changeCardText={this.props.changeCardText}
                />
              );
            })}
            {this.props.showNewCard && (
              <NewCard
                changeNewCardValue={this.props.changeNewCardValue}
                columnId={this.props.columnId}
                saveNewCard={this.props.saveNewCard}
                value={this.props.newCardValue}
              />
            )}
          </div>
          {this.props.showNewCard
            ? (
              <div className="new-card-controls-section">
                <div className="confirm" onClick={this.onConfirmClick}>
                  Add
                </div>
              </div>
            )
          : (
            <div className="new-card-composer" onClick={this.onAddNewCard}>
              Add a card...
            </div>
          )}
        </div>
      </div>,
    );
  }
}

export default List;
