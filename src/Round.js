const Turn = require('../src/Turn');

class Round {
  constructor(deckObj) {
    this.deck = deckObj.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCardIndex = 0;
  };

  returnCurrentCard() {
    return this.deck[this.currentCardIndex];
  };

  takeTurn(guess) {
    let thisTurn = new Turn(guess, this.deck[this.currentCardIndex]);
    if(!thisTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[this.currentCardIndex].id);
    };
    this.currentCardIndex += 1;
    this.turns += 1;
    return thisTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    let correctAnswers = this.turns - this.incorrectGuesses.length;
    return parseInt((correctAnswers / this.turns) * 100);
  };

  endRound() {
    let score = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${score}% of the questions correctly!`);
  }
};

module.exports = Round;
