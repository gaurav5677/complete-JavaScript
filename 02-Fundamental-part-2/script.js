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

////////////////////////////////Functions calling other function (recursion)////////////////////////
function cutFruitpieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitpieces(apples);
  const orangePieces = cutFruitpieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
