const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'How many kids does Alycia have?', ['1', '4', '2', '0'], '2')
    turn = new Turn('1', card);
  });

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should take two arguments - a user guess and the Card in play', function() {

    expect(turn.guess).to.equal('1');
    expect(turn.card).to.be.a('object');
  });

  it('should have a returnGuess method that returns the guess', function() {

    expect(turn.returnGuess).to.be.a('function');
    expect(turn.returnGuess()).to.equal('1');
  });

  it('should have a returnCard method that returns the Card', function() {

    expect(turn.returnCard).to.be.a('function');
    expect(turn.returnCard()).to.equal(card);
  });

  it("should have a method that returns TRUE if the user's guess is correct and FALSE if not", function() {

    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback', function() {

    expect(turn.giveFeedback).to.be.a('function');
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });

});
