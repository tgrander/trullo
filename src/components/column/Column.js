import propTypes from 'prop-types'
import React from 'react'
import Card from './Card'
import NewCard from './NewCard'
import './styles/Column.css'

class Column extends React.PureComponent {
  static propTypes = {
    addNewCard: propTypes.func.isRequired,
    cards: propTypes.shape({
      cardId: propTypes.string,
      text: propTypes.string,
    }).isRequired,
    changeNewCardValue: propTypes.func.isRequired,
    color: propTypes.string.isRequired,
    columnId: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    showNewCard: propTypes.bool.isRequired,
    newCardValue: propTypes.string.isRequired,
    saveNewCard: propTypes.func.isRequired,
  }

  onAddNewCard = () => {
    this.props.addNewCard(this.props.columnId)
  }

  render() {
    const { cards, color } = this.props
    return (
      <div className="list-wrapper">
        <div className="list-content">
          <div className="list-header">
            {this.props.name}
          </div>
          <div className="list-cards">
            {Object.keys(cards).map(cardId => {
              const card = cards[cardId]
              return (
                <Card
                  key={cardId}
                  columnId={this.props.columnId}
                  {...card}
                  changeCardText={this.props.changeCardText} />
              )
            })}
          </div>
          {this.props.showNewCard && (
            <NewCard
              changeNewCardValue={this.props.changeNewCardValue}
              columnId={this.props.columnId}
              saveNewCard={this.props.saveNewCard}
              value={this.props.newCardValue} />
          )}
          <div className="new-card-composer" onClick={this.onAddNewCard}>
            Add a card...
          </div>
        </div>
      </div>
    )
  }
}

export default Column
