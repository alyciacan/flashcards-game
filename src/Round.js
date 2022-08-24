const Turn = require('../src/Turn');

class Round {
  constructor(deckObj) {
    this.deck = deckObj; //for some reason can't do deckObj.cards - why??
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCardIndex = 0;
  }
  returnCurrentCard() {
    return this.deck.cards[this.currentCardIndex];
  }
  takeTurn(guess) {
    let thisTurn = new Turn(guess, this.deck.cards[this.currentCardIndex]);
    if(!thisTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.currentCardIndex].id);
    } else {
    }
    this.currentCardIndex += 1;
    return thisTurn.giveFeedback();
  };
};


module.exports = Round;
