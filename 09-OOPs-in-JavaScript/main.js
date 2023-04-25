'use strict';
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode"
const person = function (firstName, birthYear) {
   //  console.log(this)

   // this are Instance properties 
   this.firstName = firstName;
   this.birthYear = birthYear


   // // never do this 
   // this.calcAge = function () {
   //    console.log(2037 - this.birthYear);


   // }

}

const gaurav = new person('gaurav ', 2001);

console.log(gaurav);
// 1 . new Empty object is created {};
// 2 . function is called ,  this = {} , this keyword will point the new object  
// 3 . this new created object { } is linked to the prototype 
// 4 . function automatically returns the empty {} 

const abhishek = new person('abhi', 2001);

const devesh = new person('devesh ', 2000);

console.log(abhishek, devesh);
// console.log(devesh);

console.log(gaurav instanceof person);
// gaurav abhisshek and devesh are the instance of construction function Person

const Admi = function (Naam, Gaddi) {
   this.Naam = Naam;
   this.Gaddi = Gaddi

}

const gaurav1 = new Admi(' gaurav ', 'honda');

console.log(gaurav1);
