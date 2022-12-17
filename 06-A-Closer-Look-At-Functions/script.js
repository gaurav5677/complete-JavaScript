const bookings = [];
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
