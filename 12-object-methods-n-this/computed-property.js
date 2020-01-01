const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// Old version
// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
  [role]: person,
  [role2]: person2
};

team();

// Without Computed Property
// function addProp(obj, k, v) {
//   const copy = { ...obj };
//   copy[k] = v;
//   return copy;
// }

// NEW SYNTAX, COMPUTED PROPERTY & ARROW FUNCTION
const addProp = (obj, k, v) => ({ ...obj, [k]: v });

addProp(team, 'happy', ':)');
