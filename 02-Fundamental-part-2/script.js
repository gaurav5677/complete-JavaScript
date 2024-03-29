///////////////////////////Function/////////////////////////////

/*
function logger() {
  console.log(`my name is gaurav`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);
console.log(fruitProcessor(5, 2));

const appleOrangeJuice = fruitProcessor(2, 6);
console.log(appleOrangeJuice);

const num = Number("23");
*/
/*
/////////// funtion declaration  Vs Exprestions////////////////////
// function declaration
function calculateAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calculateAge1(1991);
// console.log(age1);

// function expresstion

const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calAge2(1991);

console.log(age1, age2);
*/
/*
// ///////////////////ARRROW function ///////////////

// Arrow function

const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

/// here we don't need to right return keyword it's done explicity with in the single line of code

const YearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  // return retirment;
  return ` ${firstName} retires in ${retirment} years`;
};

console.log(YearsUntilRetirement(1991, "jonas"));
console.log(YearsUntilRetirement(1990, "bobs"));

*/

// ////////////////////////////////Functions calling other function (recursion)////////////////////////
// function cutFruitpieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitpieces(apples);
//   const orangePieces = cutFruitpieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/*
///////////////////////////////Arrays ///////////////////////

const frineds = ["Michael", "Steven", "peter"];
console.log(frineds);

const years = new Array(1991, 1973, 1239, 3020);
console.log(years);

console.log(frineds[0]);
console.log(frineds[2]);
console.log(years[0]);

console.log(frineds.length);
console.log(frineds[frineds.length - 1]);

frineds[2] = "gaurav";
console.log(frineds);

const firstName = "jonas";
const jonas = [firstName, "patil", 2023 - 2022, "teacher", years];
console.log(jonas);
console.log(jonas.length);

*/

/*
/////////////////////////////ARRays methods ///////////////////////////

const frineds = ["bob", "michael", "Steven", "peter", "gaurav"];
frineds.push("jay");
console.log(frineds);
// console.log(newLength);

frineds.unshift("jay"); // alos return the length of the arrya
console.log(frineds);

console.log(frineds.indexOf("Steven"));

*/

/*
//////////////////////////objects /////////////////

const Gaurav = {
  // this syntax is called as Object literal Syntax
  firstName: "gaurav ",
  lastName: "patil",
  age: 2022 - 2001,
  job: "Teacher",
  friends: ["abhi", "onkar", "harshal"],
}; //Curly braces are used to define new object
// this is out object Gaurav having 5 key values  , this is impossible in arrays but in object it is possible

console.log(Gaurav);

///////////////////// how to change and retrive  data from objects ////////////////////////

console.log(Gaurav.lastName);

console.log(Gaurav["lastName"]);

const nameKey = "Name";
console.log(Gaurav["first" + nameKey]);
console.log(Gaurav["last" + nameKey]); // is is important to build a string without it ,  it can't work properly

const interestedIn = prompt(
  " What do you want to know about Gaurav?  Choose between firstName , lastName age, job and friends "
);

if (Gaurav[interestedIn]) {
  console.log(Gaurav[interestedIn]); // here bracket notation gives us a  correct ans and it is perfect to use . instead of dot notation
} else {
  console.log(
    `Wrong request! What do you want to know about Gaurav?  Choose between firstName , lastName age, job and friends `
  );
}
Gaurav.location = "Indian";
// Gaurav('twitter') = @adgadsf;
console.log(Gaurav);

console.log(
  ` ${Gaurav.firstName} has ${Gaurav.friends.length} , and his best friend is called ${jonas.friends[0]}`
);
*/
/*

//////////////////////////////////////////////////        Object methods         //////////////////////////////////////////

const Gaurav = {
  firstName: "Gaurav",
  lastName: "Patil",
  birthYear: 2001,
  job: "teacher",
  friends: ["ahbhi", "pranav", "onkar", "harshal"],
  hasDrivingLicense: false,

  // calAge: function (birthYear) {
  //   return 2022 - birthYear;
  // }

  // calAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calAge()} -year old ${
      Gaurav.job
    } , and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license.   `;
  },
};

console.log(Gaurav.calAge());

// console.log(Gaurav.age);

console.log(Gaurav.getSummary());
*/

//////////////////////////////////////////////////        _Iteration_for_Loop_          //////////////////////////////////////////

// console.log(`lifting weights repetition 1`);

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition  ${rep}  😤 `);
// }
