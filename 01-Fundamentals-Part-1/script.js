/*
let js ="amazing";
console.log(40+8+23-10);
console.log("jonas"); 
console.log(23);

// a value is the smallest unit  of  information that we have in javascript
 
let firstName="Gaurav";    // this is how we declare a variable
console.log(firstName);

// _ and $ are the onlu two symbols that are allowed for naming variables

//starting letter with uppercase is only use while oop(object oriented programming) \

let myFirstjob = 'Programmer';
let mycurrentjob = 'Teacher';
console.log(mycurrentjob)
console.log(myFirstjob)
*/

/*let javascriptIsFun=true; /// value hold the datatype not variable 
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'gaurav');
    
javascriptIsFun = 'Yes!'// when you want to change the value simpliy rewrite it without writing let 
console.log(typeof javascriptIsFun)

let year;
console.log(year);

console.log(typeof year);

year = 1992;
console.log(typeof year)

console.log(typeof null);  */

/*let age = 30;
age = 32 ;

const  birthyear= 1991;
// birthyear=1990;

// const job;

var job = 'programmer';
job = 'techer';


console.log(job)*/

//Math operators

/*const now = 2037;
const ageGaurvar = now - 1991;
const ageabhi = now - 2018;
console.log(ageGaurvar, ageabhi);

console.log(ageGaurvar * 2, ageabhi / 2, 2 ** 3);

// 2 ** 3 meanns 2 to the power of 3  = 2 * 2 * 2

const firstName = "Gaurav ";
const lastName = "patil";

console.log(firstName + " " + lastName);

let x = 10 + 5; //15
x += 10; // x= x+ 10
x *= 4; // x = x* 4 = 100
x++; // x = x+ 1
x--;
x--;

console.log(x);

// comparison operators

console.log(ageGaurvar > ageabhi);
console.log(ageGaurvar >= 18);

const isFullage = ageabhi >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageGaurvar = now - 1991;
const ageabhi = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;

x = y = 15 - 10 - 5;
console.log(x, y);

const averageAge = (ageGaurvar + ageabhi) / 2;
console.log(ageGaurvar, ageabhi, averageAge);
*/

///////////////////////////////////////////////////////
// coding challenge #1

/* Vishal and Onkar are trying to compare their  BMI (Body Mass Index), which is calculated using the formula : BMI = mass / height ** 2 = mass / ( height * height ).
(mass in kg and height in meter) 

1. Store Vishal's and Onkar's mass and height in variables 
2. Calculate both their BMI's using the formula ( you can even implement both versions)
3. Create a boolean variable 'VishalHigherBMI' containing information about whether vishal has a higher BMI than Onkar.

TEST DATA 1 :   Vishal weights 78 kg and is 1.69 m tall . Onkar weights 92 kg and  is 1.95 m tall. 
Test Data 2 : Vishal weight 95 kg and is 1.88m tall. Onkar wights 85kg and is 1.76 m tall .

 


*/

/*
const massVishal = 78;
const heightVishal = 1.69;
const massOnkar = 78;
const heightOnkar = 1.95;

const BMIVishal = massVishal / heightVishal ** 2;
const BMIOnkar = massOnkar / heightOnkar ** 2;
const VishalBMIHIgher = BMIOnkar > BMIVishal;

console.log(BMIOnkar, BMIVishal, VishalBMIHIgher);*/

/*
//String and template Literals
const firstName = "gaurav";
const job = "programmer";
const birthday = 2001;
const year = 2022;

const gaurav =
  "I'm " + firstName + ", a " + (year - birthday) + " years old " + job + "!";

console.log(gaurav);

const gauravNew = `I'm ${firstName} , a ${year - birthday} years old ${job} !`;
console.log(gauravNew);

console.log(` just a regular string `);

console.log(`string 
             multiple 
            lines `);
*/

/* 
const age = 15;

// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can  start driving License  ");
} else {
  const yearLeft = 18 - age;
  console.log(
    `sarah can not start driving License wait another ${yearLeft} years :)`
  );
}
*/

/*

// Type conversion

const inputYear = "1991"; /// this still hold as string
console.log(Number(inputYear), inputYear); // using this number function will give us a number.
console.log(Number(inputYear) + 18);

// type coercion

console.log("I am " + 23 + " year old ");
console.log("I am " + "23" + " year old ");
console.log("23" + "10");
console.log("23" * "2"); // here 23 is string
console.log("23" - "10" + 3);

let n = "1" + 1; // this will be 11
n = n - 1; // this will converted to number so string  11 will convert to number 11 and the -1 so 10 2ill be  the output
console.log(n);

let m = 2 + 3 + 4 + "5";
console.log(m);

let x = "10" - "4" - "3" - 2 + "5 ";
console.log(x);
*/

/// 5 falsy values : 0 , '' , undefined , null ,    NaN , falses

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log(`don't spent it all  `);
} else {
  console.log(`Your should get a job`);
}

let height;
if (height) {
  console.log(`Yey! height is defined`);
} else {
  console.log(`Height is undefiend `);
}
*/

/*
////////////////////////Equality operators/////////////////////

const age = 19; // assignment operator

// strict equality operator
if (age === "19") console.log(`you just became an adult `);

// loose equality operator
if (age == 19) console.log(`you just became adult :)`);

// we cat  get any value from web page using prompt function

const Fav = Number(prompt("What's your favourite Number?"));
console.log(Fav);
console.log(typeof Fav);

if (Fav === 23) {
  console.log(`Cool ! 23 is amazing number!`);
} else if (Fav === 7) {
  console.log(` 7 is cool number `);
} else {
  console.log(`Number is not 23 or 7 `);
}

const Nav = prompt("What's your favourite Number?");
console.log(Nav);
console.log(typeof Nav);

if (Nav == 7) {
  console.log(`Cool ! 7 is amazing number!`);
}

if (Nav !== 23) console.log(`why not 23`);
*/
/*
/////////////////////Logical Operators /////////////////////

const hasDriverLicense = true; // A
const hadGoodVision = true;

console.log(hasDriverLicense && hadGoodVision);
console.log(hasDriverLicense || hadGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hadGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive ");
// } else {
//   console.log(`Some one else should drive`);
// }
const isTired = true;
console.log(hasDriverLicense && hadGoodVision && isTired);

if (shouldDrive && !isTired) {
  console.log("Sarah is able to drive ");
} else {
  console.log(`Some one else should drive`);
}


*/
