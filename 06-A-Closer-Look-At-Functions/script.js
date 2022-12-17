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

// is the same as doning
const flightNum = flight;
const passenger = gaurav;
