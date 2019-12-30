/**
 * Rest Operator.
 *
 * We don't need to turn into array if we want to use array methods.
 *
 * Have functionality provided for collecting remaining arguments.
 *
 * We can use at all in arraw function.
 */

function sum(...nums) {
  return nums.reduce((total, currVal) => total + currVal);
}

sum(2, 4, 6, 8, 3);

function fullName(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

fullName('Lopes', 'Boa', 23, 'programmer');

const mutply = (...nums) => nums.reduce((total, currVal) => total * currVal);

mutply(9, 5, 3);
