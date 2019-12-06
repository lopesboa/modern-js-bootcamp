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
  // console.log("INVALID RATING!");
}

//Exemple 2
let highScore = 1430;
let userScore = 1300;

if (userScore >= highScore) {
  // console.log(`Congrats, you have new high score of ${userScore}`);
  highScore = userScore;
} else {
  // console.log(
  //   `Good Game. Your score of ${userScore} did not beat the high score ${highScore}`
  // );
}

//exemple 3 - Nestnig Conditionals
let password = "teste321";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    // console.log("Valid Password");
  } else {
    // console.log("Password is long enough, but cannot contain spaces");
  }
} else {
  // console.log("Password must be longer");
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
  // console.log("TRUTHY");
} else {
  // console.log("FALSY");
}

/**
 * LOGICAL OPERATORS
 */

// AND (&&)
let passwords = "minhasenha";

if (passwords.length >= 8 && passwords.indexOf(" ") === -1) {
  // console.log("VALID PASSWORD");
} else {
  // console.log("INVALID PASSWORD");
}

// exemple 2
let num = 3;
if (num >= 1 && num <= 10) {
  // console.log("Number is between 1 and 10");
} else {
  // console.log("Please guess a number between 1 and 10");
}

// exemple 3
// OR (||)
let age = 30;

if (age < 6 || age >= 65) {
  // console.log("YOU GET IN FOR FREE");
} else {
  // console.log("YOU MUST PAYYYY!");
}

// exemple 4
let color = "purple";

if (color === "purple" || color === "lilac" || color === "violet") {
  // console.log("GREAT CHOICE");
}

// NOT (!)
let loggedInUser;

if (!loggedInUser) {
  console.log("GET OUT OF HERE");
}

// exemple 2

let flavor = "grepe";

// if (flavor !== "grepe" && flavor !== "cherry") {
//   console.log("WE DON'T HAVE THAT FLAVOR!");
// }

if (!(flavor === "grepe" && flavor === "cherry")) {
  console.log("WE DON'T HAVE THAT FLAVOR");
}
