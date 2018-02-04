import propTypes from 'prop-types';
import React from 'react';
import Card from './Card';
import NewCard from './NewCard';
import './styles/List.css';

class List extends React.PureComponent {
  static propTypes = {
    showCardInProgress: propTypes.func.isRequired,
    cards: propTypes.shape({
      cardId: propTypes.string,
      text: propTypes.string,
    }).isRequired,
    changeCardInProgressValue: propTypes.func.isRequired,
    color: propTypes.string.isRequired,
    listId: propTypes.string.isRequired,
    connectDropTarget: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    displayCardInProgress: propTypes.bool.isRequired,
    cardInProgressValue: propTypes.string.isRequired,
    saveNewCard: propTypes.func.isRequired,
  }

  onAddNewCard = () => {
    this.props.showCardInProgress(this.props.listId);
  }

  onConfirmClick = () => {
    if (this.props.cardInProgressValue.length > 0) {
      const { cardInProgressValue, listId, saveNewCard } = this.props;
      saveNewCard(listId, cardInProgressValue);
    }
  }

  render() {
    const { cards, connectDropTarget, isOver } = this.props;

    console.log('LIST PROPS: ', this.props);

    return connectDropTarget(
      <div className="list-wrapper">
        <div className="list-content">
          <div className="list-header">
            <h2 className="list-name">{this.props.name}</h2>
          </div>
          <div className="list-cards">
            {cards.map(card => (
              <Card
                key={card.cardId}
                listId={this.props.listId}
                {...card}
                changeCardText={this.props.changeCardText}
              />
              ))}
            {this.props.displayCardInProgress && (
              <NewCard
                changeCardInProgressValue={this.props.changeCardInProgressValue}
                listId={this.props.listId}
                saveNewCard={this.props.saveNewCard}
                value={this.props.cardInProgressValue}
              />
            )}
          </div>
          {this.props.displayCardInProgress
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
