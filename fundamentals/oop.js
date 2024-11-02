// oop

// function Person(userName, age) {
//   this.userName = userName;
//   this.age = age;
// }

// Person.prototype = {
//   eat() {
//     console.log(this);
//   },
// };

// class system

class Person {
  constructor(userName, age) {
    this.userName = userName;
    this.age = age;
  }

  // methods

  eat() {
    console.log(this);
  }
}

const sajib = new Person("sajib", 25);

sajib.eat();
