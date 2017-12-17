import propTypes from 'prop-types'
import React from 'react'
import './styles/Card.css'

class Card extends React.PureComponent {
  static propTypes = {
    changeNewCardValue: propTypes.func.isRequired,
    columnId: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
  }

  componentDidMount() {
    // auto focus textarea when new card is added
    if (this.cardInput) {
      this.cardInput.focus()
    }
  }

  onChangeValue = e => {
    const { columnId } = this.props
    this.props.changeNewCardValue(columnId, e.target.value)
  }

  render() {
    return (
      <div className="card">
        <textarea
          className="card-textarea"
          value={this.props.value}
          ref={(textarea) => { this.cardInput = textarea }}
          onChange={this.onChangeValue}>
        </textarea>
      </div>
    )
  }
}

export default Card
