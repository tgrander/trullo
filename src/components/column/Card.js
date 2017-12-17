import propTypes from 'prop-types'
import React from 'react'
import './styles/Card.css'

class Card extends React.PureComponent {
  static propTypes = {
    cardId: propTypes.string.isRequired,
    changeCardText: propTypes.func.isRequired,
    editMode: propTypes.bool.isRequired,
    value: propTypes.string.isRequired,
  }

  render() {
    return (
      <div className="card">
        {this.props.value}
      </div>
    )
  }
}

export default Card
