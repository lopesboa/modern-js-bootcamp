/**
 * Performance Review
 * 3 - superstar
 * 2 - meets expectations
 * 1 - needs improvement
 *     anything else - wtf?
 */

let rating = 0;

if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
} else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
} else if (rating === 1) {
  console.log("NEEDS IMPROVEMENT");
} else {
  console.log("INVALID RATING!");
}

//Exemple 2
let highScore = 1430;
let userScore = 1300;

if (userScore >= highScore) {
  console.log(`Congrats, you have new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good Game. Your score of ${userScore} did not beat the high score ${highScore}`
  );
}

//exemple 3 - Nestnig Conditionals
let password = "teste321";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password is long enough, but cannot contain spaces");
  }
} else {
  console.log("Password must be longer");
}

// Exemple 4 - TRUTHY & FALSY VALUES
/**
 * All values have an inherent truthy or falsy boolean value.
 *
 * FALSY VALUES:
 *    false
 *    0
 *    "" (empty string)
 *    null
 *    undefined
 *    NaN
 * Everything else is TRUTHY.
 */
let mystery = 5;

if (mystery) {
  console.log("TRUTHY");
} else {
  console.log("FALSY");
}
