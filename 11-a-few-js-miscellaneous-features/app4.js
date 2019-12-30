// DESTRUCTURING ARRAYS
const raceResults = [
  'Eluid Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jered Ward'
];

const [gold, silver, bronze] = raceResults;
// const [first, , , fourth] = raceResults;
const [winner, ...others] = raceResults;

// DESTRUCTURING OBJECTS.
const runner = {
  first: 'Eluid',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the golden Heart of Kenya'
};

// const { first, last } = runner;

// Assign another name to a property
const { country: nation, title: honorific } = runner;

// Using Rest Operator & destructuring
const { first, last, ...other } = runner;

// NASTED DESTRUCTURING
const results = [
  {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya'
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
];

const [golden, silvers, bronzes] = results;
const [{ first: goldWinner }, { country }] = results;

// const [, silverMedal] = results;
// const { country } = silverMedal;

// PARAM DESTRUCTURING
const runners = {
  firsts: 'Eluid',
  lasts: 'Kipchoge',
  nations: 'Kenya',
  honor: 'Elder of the Order of the golden Heart of Kenya'
};

// function print(person) {
//   const { firsts, lasts, honor } = person;

//   console.log(`${firsts} ${lasts}, ${honor}`);
// }

function print({ firsts, lasts, honor }) {
  console.log(`${firsts} ${lasts}, ${honor}`);
}

print(runners);

const response = ['HTTP/1.1', '200 OK', 'application/json'];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}

parseResponse(response);
