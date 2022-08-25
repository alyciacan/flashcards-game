const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', function() {
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);
    card1 = new Card(1, 'How old is Alycia?', ['31', '30', '36', '35'], '36');
    card2 = new Card(2, 'In which state was Alycia born?', ['Maine', 'Utah', 'California', 'Rhode Island'], 'Maine');
    card3 = new Card(3, 'How many tattoos does Alycia have?', ['0', '3', '2', '7'], '3');
  });

  it('should be a function', function() {

    expect(Deck).to.be.a('function');
  });

  it('should know how many Cards are in the deck', function() {

    expect(deck.countCards()).to.equal(3);
  });
});
