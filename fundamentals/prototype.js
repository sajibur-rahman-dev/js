//
// OOP in a object way
//

// const person1 = {};

// person1.username = "sajibur rahman";
// person1.age = 25;

// person1.eat = function () {
//   console.log(`${this.username} is eating`);
// };

// person1.sleep = function () {
//   console.log(`${this.username} age is ${this.age}`);
// };

// person1.eat();

// const person2 = {};

// person2.username = "rabeya bosri";
// person2.age = 20;

// person2.eat = function () {
//   console.log(`${this.username} is eating`);
// };

// person2.sleep = function () {
//   console.log(`${this.username} age is ${this.age}`);
// };

// person2.eat();

//
// OOP in function way
//

// function Person(userName, age) {
//   const person = {};

//   person.userName = userName;
//   person.age = age;

//   person.eat = function () {
//     console.log(`${this.userName} is eating`);
//   };

//   person.sleep = function () {
//     console.log(`${this.userName} age is ${this.age}`);
//   };

//   return person;
// }

// const sajib = Person("Sajibur rahman", 25);
// const rabeya = Person("Rabeya Bosri", 19);

// console.dir(sajib);
// console.dir(rabeya);

//
// memory optimize
//

// const personMethods = {
//   eat() {
//     console.log(`${this.userName} is eating`);
//   },
//   sleep() {
//     console.log(`${this.userName} age is ${this.age}`);
//   },
// };

// function Person(userName, age) {
//   const person = {};

//   person.userName = userName;
//   person.age = age;
//   person.eat = personMethods.eat;
//   person.sleep = personMethods.sleep;

//   return person;
// }

// const sajib = Person("Sajibur rahman", 25);
// const rabeya = Person("Rabeya Bosri", 19);

// console.dir(sajib);
// console.dir(rabeya);

//
// memorize with Object.create()
//

// const personMethods = {
//   eat() {
//     console.log(`${this.userName} is eating`);
//   },
//   sleep() {
//     console.log(`${this.userName} is sleeping`);
//   },
// };

// function Person(userName, age) {
//   const person = Object.create(personMethods);

//   person.userName = userName;
//   person.age = age;

//   return person;
// }

// const sajib = Person("Sajibur rahman", 25);
// const rabeya = Person("Rabeya Bosri", 19);

// console.dir(sajib);
// console.dir(rabeya);

//
// memorize with Object prototype
//

// function Person(userName, age) {
//   const person = Object.create(Person.prototype);

//   person.userName = userName;
//   person.age = age;

//   return person;
// }

// // shared methods

// Person.prototype = {
//   eat() {
//     console.log(`${this.userName} is eating`);
//   },
//   sleep() {
//     console.log(`${this.userName} is sleeping`);
//   },
// };

// const sajib = Person("Sajibur rahman", 25);
// const rabeya = Person("Rabeya Bosri", 19);

// console.log(sajib);
// console.log(rabeya);

//
// class
//

// function Person(userName, age) {
//   const person = Object.create(Person.prototype);

//   person.userName = userName;
//   person.age = age;

//   return person;
// }

// // shared methods

// Person.prototype = {
//   eat() {
//     console.log(`${this.userName} is eating`);
//   },
//   sleep() {
//     console.log(`${this.userName} is sleeping`);
//   },
// };

// const sajib = Person("Sajibur rahman", 25);
// const rabeya = Person("Rabeya Bosri", 19);

// console.log(sajib);
// console.log(rabeya);

// ***

function Person(userName, age) {
  const person = Object.create(Person.prototype);

  person.userName = userName;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    console.log(`user name us  ${this.userName}`);
  },
  sleep() {
    console.log(`${this.userName} is sleeping`);
  },
  run() {
    console.log(`${this.userName} is running`);
  },
};

// object creation

const sajib = Person("Sajibur Rahman", 25);

sajib.eat();
console.dir(Object);
