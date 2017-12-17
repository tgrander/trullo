export default class Card {
  constructor(cardId, columnId, value) {
    this.cardId = cardId
    this.columnId = columnId
    this.value = value,
    this.editMode = false
  }
}
