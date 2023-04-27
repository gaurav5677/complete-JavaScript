'use strict';

/*
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode"
const Person = function (firstName, birthYear) {
   //  console.log(this)

   // this are Instance properties 
   this.firstName = firstName;
   this.birthYear = birthYear


   // // never do this 
   // this.calcAge = function () {
   //    console.log(2037 - this.birthYear);


   // }

}

const gaurav = new Person('gaurav ', 2001);

console.log(gaurav);
// 1 . new Empty object is created {};
// 2 . function is called ,  this = {} , this keyword will point the new object  
// 3 . this new created object { } is linked to the prototype 
// 4 . function automatically returns the empty {} 

const abhishek = new Person('abhi', 2001);

const devesh = new Person('devesh ', 2000);

console.log(abhishek, devesh);
// console.log(devesh);

console.log(gaurav instanceof Person);
// gaurav abhisshek and devesh are the instance of construction function Person

const Admi = function (Naam, Gaddi) {
   this.Naam = Naam;
   this.Gaddi = Gaddi

}

const gaurav1 = new Admi(' gaurav ', 'honda');

console.log(gaurav1);



////////////////////////////////// Prototypes  /////////////////////

// each and every function in javaScript have a property called Prototype 

Person.prototype.calcAge = function () {
   console.log(2023 - this.birthYear);
}

devesh.calcAge();

console.log(gaurav.__proto__);

Person.prototype.species = 'Homo Sapiens';
console.log(gaurav.species, abhishek.species);

console.log(gaurav.hasOwnProperty('firstName'));
console.log(gaurav.hasOwnProperty('species'));

console.log(gaurav.__proto__);
console.log(gaurav.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor)

const arr = [3, 4, 5, 6, 7, 8];   // new Array ===[]

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);


Array.prototype.unique = function () {
   return [...new Set(this)];

}
console.log(arr.unique());


const Car = function (name, speed) {
   this.name = name;
   this.speed = speed;
}

const Fortuner = new Car('Fortuner', 180);

const Endevaour = new Car('Endevaour', 210);


Car.prototype.accelerate = function () {
   this.speed += 10;
   console.log(`${this.name} is going at ${this.speed}`);

}

Car.prototype.brake = function () {

   this.speed -= 5;
   console.log(`${this.name} is going at ${this.speed}`);
}

Fortuner.accelerate();
Fortuner.brake();
*/



/*                               ES6 Classes                          */


/*
// class Expression

// const PersonCl = class {

// }



// Class Declaration 
class PersonCl {

   // inside the class the first thing we need to do is
   // declare the Construction class 
   constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
   }  // this is a Method 


   calcAge() {
      console.log(2037 - this.birthYear);
   }

}

const gaurav = new PersonCl('gaurav', 2001);

console.log(gaurav);
gaurav.calcAge();



// 1 . classes are NOT hoisted  ( which means we can use them  before they are declared  in the code )
// 2 . Just like function,  classes  are First-class citizens
// 3 . The body of class are executed in Strict mode 


*/



/*                           Getter and Setter                       */










/*                            Object.create                          */
/*
const PersonProto = {
   calcAge() {
      console.log(2037 - this.birthYear);
   },

   init(name, birthYear) {
      this.name = name;
      this.birthYear = birthYear;
   },
};
// Object.create   creates a new object  and the prototype of that object  
const gaurav = Object.create(PersonProto);
// console.log(gaurav)
gaurav.init('gaurav', 2001);
gaurav.calcAge();

*/




/*                            Inheritance Between "Classes" : Constructor Function                             */

const person = function (firstName, birthYear) {
   this.firstName = firstName;
   this.birthYear = birthYear;
}

person.prototype.calcAge = function () {
   console.log(2037 - this.birthYear);
}

const student = function (firstName, birthYear, course) {
   person.call(this, firstName, birthYear);
   this.course = course;
}

//linking prototpe 
student.prototype = Object.create(person.prototype);
student.prototype.intro = function () {
   console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const gaurav = new student('gaurav ', 2001, 'Instru');

gaurav.intro();
gaurav.calcAge();
















/*
const Person = function (firstname, birthYear) {
   this.firstname = firstname;
   this.birthYear = birthYear;

}

Person.prototype.calcage = function () {
   console.log(2050 - this.birthyear);
}

// constructor function 
const Student = function (firstName, birthYear, course) {

   // Person(firstName, birthYear) // this will never work bcuz we are calling Person construction function   as a regular function  call 
   // so we are not using the new operator to call the person function  constructor 
   // therefor in regular function call the this keyword is set to undefined  .. cuzes error 
   // so now we need to call the function and at the same time set the this keyword 
   // use call method

   Person.call(this, firstName, birthYear);

   // this.firstName = firstName;

   // this.birthYear = birthYear;

   this.course = course;  // additional property 

}

// LInking prototype 
// Student.prototype = Object.create(Person.prototype);
Student.prototype = Object.create(Person.prototype)

// Introducntion 

Student.prototype.Intro = function () {
   console.log(`My Name is ${this.firstName} and I study ${this.course}`);
}


//creating new student 

const gaurav = new Student('gaurav', 2001, 'Instrumentation Engineering');
// console.log(gaurav);
gaurav.Intro();
gaurav.calcage();

*/