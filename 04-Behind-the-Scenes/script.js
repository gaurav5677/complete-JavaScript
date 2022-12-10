/*
///////////////////////      Scoping     ////////////////////////////
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2005 && birthYear <= 2018) {
      var millenial = true;
      const str = `oh, You're a Millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }
 
  printAge();
  return age;
}

const firstName = "gaurav";
calcAge(2001);
// var varrialbe do not care about blocks at all
*/

/*
/////////////////////////////  Hosting And TDZ  //////////////////////

// console.log(me);
// console.log(job);
// console.log(year);

var me = " gaurav";
let job = " Gamer";
const year = " 1992";

// function
// console.log(addDecl(2, 3));
// console.log(addExp);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExp = function (a, b) {
  return a * b;
};

var addArrow = (a, b) => a + b;
console.log(numProducts);
if (!numProducts) deleteShopping();
var numProducts = 10;

function deleteShopping() {
  console.log("All product deleted!");
}


*/
/*
///////////////////////Practice This Keyword ///////////////////////
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //   here it has its own this keyword
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // Array function do not have their own  this function , that why it is pointing to wards to window
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // in this example this keyword will point jonas because object is calleing calcAge function
    console.log(2037 - this.year);
  },
};
jonas.calcAge();


*/

////////////////////// Regular function vs Arrow function ///////////////////////

/// always avoid using Arrow function  , combination with THIS keyword , cause it will always undefind  ,  calling window in console ,
/// You can use var to solve the problem ,,

// var firstName = "Matilda";
// const jonas = {
//   firstName: "jonas",
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   great: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.great();

const jonas = {
  firstName: "jonas",
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  great: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.great();
