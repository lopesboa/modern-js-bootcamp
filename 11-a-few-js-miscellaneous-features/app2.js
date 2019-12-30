/**
 * The Arguments Object.
 *
 * Is not a real Array, you have to turn into array if you want to.
 * use array methods.
 *
 * No have functionality provided for collecting remaining arguments.
 *
 * The "arguments" objects this not exist at all in arraw function.
 */
function sum() {
  const argsArr = [...arguments];
  return argsArr.reduce((total, currVal) => total + currVal);
}

sum(1, 2, 3);

function fullName(first, last) {
  console.log(arguments);
  console.log(first);
}

fullName('Lopes', 'Fernando', 'Boa');

const multply = () => {
  console.log(arguments);
};
