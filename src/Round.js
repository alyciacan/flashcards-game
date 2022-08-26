const Turn = require('../src/Turn');

class Round {
  constructor(deckObj) {
    this.deck = deckObj.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  test() {
    console.log(this.deck[this.turns]);
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  };

  takeTurn(guess) {
    let thisTurn = new Turn(guess, this.deck[this.turns]);
    if(!thisTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[this.turns].id);
    };
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
