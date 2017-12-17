import propTypes from 'prop-types'
import React from 'react'
import Card from './Card'
import NewCard from './NewCard'
import './styles/Column.css'

class Column extends React.PureComponent {
  static propTypes = {
    addCard: propTypes.func.isRequired,
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
  }

  onAddCard = () => {
    this.props.addCard(this.props.columnId)
  }

  render() {
    const { cards, color } = this.props
    return (
      <div className="column">
        <div className="header" style={{backgroundColor: color}}>{this.props.name}</div>
        <div className="cards-container">
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
            value={this.props.newCardValue} />
        )}
        <div className="add-card" onClick={this.onAddCard}>
          Add Card +
        </div>
      </div>
    )
  }
}

export default Column
