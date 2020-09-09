// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(password) !== -1) {
//     return false;
//   }
//   return true;
// }

// REFATORADO
// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }

//   return true;
// }

// REFATORADO 1.1
// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }

//   return true;
// }

// REFATORADO 1.2
// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;

//   if (tooShort || hasSpace || tooSimilar) return false;

//   return true;
// }

// REFATORADO 1.3
function isValidPassword (password, username) {
  const tooShort = password.length < 8
  const hasSpace = password.indexOf(' ') !== -1
  const tooSimilar = password.indexOf(username) !== -1

  return !tooShort && !hasSpace && !tooSimilar
}
/**
  Write a function to find the average value
  In an array of number
*/

function average (arr) {
  let total = 0
  for (num of arr) {
    total += num
  }
  return total / arr.length
}

/**
 * A pangram is a setence that contains every letter of the alphabet like:
 * "The quick brown fox jumps over lazy dog"
 *
 * Write a function called isPangram which checks to see if a given
 * setense contains every letter of the alphabet. Make sure you ignore
 * string casing!
 *
 * isPangram('The five boxing wizards jump quickly') //true
 * isPangram('The five boxing wizards jump quick') //false
 */

// function isPangram(setence) {
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (setence.indexOf(char) === -1) {
//       return false;
//     }
//   }

//   return true;ss
// }

// OPTION 2
function isPangram (setence) {
  for (const char of 'abcdefghijklmnopqrstuvwxyz') {
    if (!setence.includes(char)) {
      return false
    }
  }

  return true
}

/**
 * Write a getCard() function which returns a random playing card object, like:
 *  {
 *    value: 'K'
 *    suit: 'clubs'
 *  }
 * Pick a random value from:
 * ----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
 * Pick a random suit from:
 * ----clubs,spades, hearts, diamonds
 * return both in object
 */

// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A"
//   ];
//   const valueIndex = Math.floor(Math.random() * values.length);
//   const value = values[valueIndex];

//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   const suitIndex = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitIndex];

//   return { value: value, suit: suit };
// }

// OPTION 2
function pickRandom (arr) {
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

function getCard () {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ]
  // const value = pickRandom(values);

  const suits = ['clubs', 'spades', 'hearts', 'diamonds']
  // const suit = pickRandom(suits);

  return { value: pickRandom(values), suit: pickRandom(suits) }
}
