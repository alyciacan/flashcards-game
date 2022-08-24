const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 'first';
    this.roundMessage = `This is the ${this.currentRound} round.`;
    this.deck = {};

  }

  start() {
    const questions = [];
    const questionsDatabase = prototypeQuestions.Deck;
    questionsDatabase.forEach((question) => {
      question = new Card(question.id, question.question, question.answers, question.correctAnswer)
      questions.push(question); //could use map instead?
    });
    const deck = new Deck(questions);
    const round = new Round(deck);
    return round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
