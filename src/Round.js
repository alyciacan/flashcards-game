class Round {
  constructor(deck) {
    this.deck = deck.cards;
  }
  returnCurrentCard() {
    console.log(this.deck[0])
    return this.deck[0];
  }
}


module.exports = Round;
