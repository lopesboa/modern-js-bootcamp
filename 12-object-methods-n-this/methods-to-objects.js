// const math = {
//   numbers: [1, 2, 3, 4, 5],
//   add: function(x, y) {
//     return x + y;
//   },
//   multply: function(x, y) {
//     return x * y;
//   }
// };

/**
 * USING SHORTHAND SYNTAX
 */
const math = {
  numbers: [1, 2, 3, 4, 5],
  add(x, y) {
    return x + y;
  },
  multply(x, y) {
    return x * y;
  }
};

const auth = {
  username: 'TommyBot',
  login() {
    console.log('LOGGED YOU IN');
  },
  logout() {
    console.log('GOODBYE');
  }
};
