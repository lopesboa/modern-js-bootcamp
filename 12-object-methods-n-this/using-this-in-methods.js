function sayHi() {
  console.log('Hi');

  // THIS REFERS TO THE WINDOW (GLOBAL SCOPE OBJECT IN THE BROWSER)
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',

  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },

  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person`);
  }
};
