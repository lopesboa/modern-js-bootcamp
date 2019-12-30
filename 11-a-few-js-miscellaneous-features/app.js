/**
 * @param {*Using SPREAD Operator for function call}
 */

function giveMeFour(a, b, c, d) {
  return `"a" ${a}, "b" ${b}, "c" ${c}, "d" ${d}`;
}

const colors = ['red', 'orange', 'yellow', 'blue'];

giveMeFour(...colors);

/**
 * Spread in Array literals
 * Join 2 or more arrays into 1
 * Make a copy of any array
 */

const cephalopoods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish'
];

const gastropoods = [
  'giant african snail',
  'banana slug',
  'variable neon slug'
];

const cnidaria = ['fire coral', 'moom jelly'];

const mollusca = [...cephalopoods, ...gastropoods];

const cephaCopy = [...cephalopoods];

/**
 * SPREAD in Object Literals.
 * Copy properties over from one object to a new object
 * Just don't forget that order metter (In conflite props)
 */
const feline = {
  legs: 4,
  family: 'Felinae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'Unpredictable'
};
