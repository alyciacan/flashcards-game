const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should know how many Cards are in the deck', function() {
    const card1 = new Card(1, 'How old is Alycia?', ['31', '30', '36', '35'], '36');
    const card2 = new Card(2, 'In which state was Alycia born?', ['Maine', 'Utah', 'California', 'Rhode Island'], 'Maine');
    const card3 = new Card(3, 'How many tattoos does Alycia have?', ['0', '3', '2', '7'], '3');
    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  });
});
