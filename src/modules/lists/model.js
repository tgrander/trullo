class List {
  constructor(columnId, name) {
    this.columnId = columnId,
    this.name = name
    this.cards = {}
    this.showNewCard = false
    this.newCardValue = ''
  }
}

export default List
