const makeDeck = () => ({
  deck: [],
  drawncards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const { deck, suits, values } = this;
    for (const value of values.split(',')) {
      for (const suit of suits) {
        deck.push({ value, suit });
      }
    }
    // return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawncards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const crads = [];
    for (let i = 0; i < numCards; i++) {
      crads.push(this.drawCard());
    }
    return crads;
  },
  shuffle() {
    const { deck } = this;
    // Loop over array backwords
    for (let i = deck.length - 1; i > 0; i--) {
      // Pick random index before current element
      const j = Math.floor(Math.random() * (i + 1));
      // swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
});
const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
