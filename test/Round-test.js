const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let card4;
  let card5;
  let card6;
  let deck1;
  let round1;

  beforeEach(() => {
    card1 = new Card(1, 'How old is Alycia?', ['31', '30', '36', '35'], '36');
    card2 = new Card(2, 'In which state was Alycia born?', ['Maine', 'Utah', 'California', 'Rhode Island'], 'Maine');
    card3 = new Card(3, 'How many tattoos does Alycia have?', ['0', '3', '2', '7'], '3');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

    card4 = new Card(1, 'How old is Alycia?', ['31', '30', '36', '35'], '36');
    card5 = new Card(2, 'In which state was Alycia born?', ['Maine', 'Utah', 'California', 'Rhode Island'], 'Maine');
    card6 = new Card(3, 'How many tattoos does Alycia have?', ['0', '3', '2', '7'], '3');
    deck1 = new Deck([card4, card5, card6]);
    round1 = new Round(deck1);
  });

  it('should start out by playing the first card in the Deck', function() {

    round.test()

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start out with 0 turns and 0 incorrect guesses', function() {

    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should update the turn each time a turn is taken', function() {

    round.takeTurn('30');

    expect(round.turns).to.equal(1);
  });

  it('should then play the next card in the array on the next turn', function() {

    round.takeTurn('30');

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should evaluate and record the guess', function() {

    round.takeTurn('30');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should store the id of the incorrectly answered question in incorrectGuesses array', function() {

    round.takeTurn('30');

    expect(round.incorrectGuesses).to.include(1);
  });

  it('should return feedback whether the guess is incorrect or correct', function() {

    const response = round.takeTurn('30');

    expect(response).to.equal('Incorrect!');

    const response1 = round1.takeTurn('36');

    expect(response1).to.equal('Correct!');
  });

  it('should calculate and return the percentage of correct guesses, along with an end game message', function() {

    const response1 = round1.takeTurn('36');
    const response2 = round1.takeTurn('Maine');
    const response3 = round1.takeTurn('7');

    const score = round1.calculatePercentCorrect();
    
    round1.endRound();

    expect(score).to.equal(66);
  });

});
