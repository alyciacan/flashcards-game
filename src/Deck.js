class Deck {
  constructor(cardsArray) {
    this.cards = cardsArray;
  };
  countCards() {
    return this.cards.length;
  };
  logCards() {
    console.log('Hello Alycia, check out' + this.cards);
  }
};

module.exports = Deck;
