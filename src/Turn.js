class Turn {
  constructor(guess, cardInPlay) {
    this.guess = guess;
    this.card = cardInPlay;
  }
  returnGuess() {
    return this.guess;
  };
  returnCard() {
    return this.card;
  };
  evaluateGuess() {
    return this.guess === this.card.correctAnswer
  };
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  };
}



module.exports = Turn;
