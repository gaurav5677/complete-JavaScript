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

///////////////////////////////////Recursive functions in javaScript //////////////////////

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
