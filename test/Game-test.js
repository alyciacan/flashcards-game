const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const prototypeData = require('../src/data');

describe('Game class', function() {
  it('should keep track of the current round', function() {
    const game = new Game();

    expect(game.roundMessage).to.equal('This is the first round.');
  });

  it('should have a start method', function() {
    const game = new Game();

    expect(game.start).to.be.a('function');
  });
});
