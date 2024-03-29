/*const bookings = [];
const creatBooking = function (flightNum, numPassengers = 1, price = 199) {
  //        ES5
  //    numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking("LH123");
creatBooking("LH124", 2, 800);
creatBooking("LH124", 34);
creatBooking("LH124", 4);
*/

/*
///////////////// How Passing Arguments Works Value VS Reference/////////////////

const flight = "LH234";
const gaurav = {
  name: "Gaurav Patil",
  passport: 234234234,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LG242";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 234234234) {
    alert("Checked In");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, gaurav);
console.log(flight);
console.log(gaurav);

// // is the same as doning
// const flightNum = flight;
// const passenger = gaurav;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(gaurav);
checkIn(flight, gaurav);
*/
/*
///////////////////////////////////Higher-order functions in javaScript //////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

///////// Higher-order Functions/////////////
const transformer = function (str, fn) {
  console.log(`Original String ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

/////////// Js uses callbacks all the time ////////////
const high5 = function () {
  console.log("🖐");
};

document.body.addEventListener("click", high5);

["jonas", "jonas", "jonas", "jonas", "adsf", "wtf"].forEach(high5);

*/

//////////////////////////////////////////////////////////Function Returning Function //////////////////////////////////////////////////////////
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Gaurav");
greeterHey("Abhi");

greet("Hello")("Gaurav");

// chanllenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("hi")("gaurav");
*/
////////////////////////////////////////////////////////// The call and apply Method  //////////////////////////////////////////////////////////
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');
// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
// Call method
book.call(lufthansa, 238, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines ",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 582, "Mary Cooper");
console.log(swiss);
// Apply Method

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);

// console.log(swiss);

book.call(swiss, ...flightData);




////////////////////////////////////////////////////////// The Last Method ,,, Bind Method  //////////////////////////////////////////////////////////

const bookEW = book.bind(eurowings);
bookEW(23, "Steven Willams");
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookLH(234, "adam hency");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas patil");
bookEW23("Martha Cooper");

////////////////with Event Listneres//////////////////////
// new property only for lufthansa object
lufthansa.planes = 300; // meaning that this company has 300 planes
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // here lufthansa.buyPlane is the handler function

///////////////////// Partial Application of Bind Method ////////////////////////

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

//////////////////////////////////////////////////////////  Closures  //////////////////////////////////////////////////////////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

/* 
Closure Defination 1 :  A closure gives a function access to all the variables of
 its parent function, even after the parent function has returned. The function keeps a 
reference to its outer scope. Which preserves the scope chain throughout time


Closure Defination 2 : A closure is like a backpack that a function carries around wherever it goes. This backpack 
has all the variable that were present i the environment where the function was created . 

*/
