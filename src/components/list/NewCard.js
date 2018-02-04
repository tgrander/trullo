import propTypes from 'prop-types'
import React from 'react'
import './styles/Card.css'

class Card extends React.PureComponent {
  static propTypes = {
    changeCardInProgressValue: propTypes.func.isRequired,
    listId: propTypes.string.isRequired,
    saveNewCard: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
  }

  componentDidMount() {
    // auto focus textarea when new card is added
    if (this.cardInput) {
      this.cardInput.focus()
    }
  }

  onChangeValue = e => {
    const { listId } = this.props
    this.props.changeCardInProgressValue(listId, e.target.value)
  }

  onKeyPress = ({ key }) => {
    const { listId, value } = this.props
    if (key === 'Enter' && value.length > 0) {
      this.props.saveNewCard(listId, value)
    }
  }

  render() {
    return (
      <div className="card">
        <textarea
          className="card-textarea"
          value={this.props.value}
          ref={(textarea) => { this.cardInput = textarea }}
          onChange={this.onChangeValue}
          onKeyPress={this.onKeyPress}>
        </textarea>
      </div>
    )
  }
}

export default Card
