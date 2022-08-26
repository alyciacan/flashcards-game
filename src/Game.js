const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');


class Game {
  constructor() {
    this.currentRound = 'first';
    this.roundMessage = `This is the ${this.currentRound} round.`;
  }
  testThings() {

  }

  start() {
    const questions = [];
    const questionsDatabase = prototypeQuestions.Deck;
    const cards = prototypeQuestions.forEach((question) => {
      question = new Card(question.id, question.question, question.answers, question.correctAnswer)
      questions.push(question);
    });
    const deck = new Deck(questions);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
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
