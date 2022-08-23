const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round;

    expect(Round).to.be.a('function');
  });

  it('should start out by playing the first card in the Deck', function() {
    const card1 = new Card(1, 'How old is Alycia?', ['31', '30', '36', '35'], '36');
    const card2 = new Card(2, 'In which state was Alycia born?', ['Maine', 'Utah', 'California', 'Rhode Island'], 'Maine');
    const card3 = new Card(3, 'How many tattoos does Alycia have?', ['0', '3', '2', '7'], '3');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal({ id: 1, question: 'How old is Alycia?', answers: ['31', '30', '36', '35'], correctAnswer: '36' } );
  });


});
