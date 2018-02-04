export default class Card {
  constructor(cardId, listId, value) {
    this.cardId = cardId
    this.listId = listId
    this.value = value,
    this.editMode = false
  }
}
