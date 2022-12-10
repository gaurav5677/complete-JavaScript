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

///////////////////////Practice This Keyword ///////////////////////
