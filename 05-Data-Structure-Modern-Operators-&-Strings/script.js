// const { start } = require("live-server");
/*

////////////////////////////////// Destructruing Arrays ////////////////////////////

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // its look like array but its not , it is Destructuring Assignment
console.log(x, y, z);
console.log(arr);

let [main, , third] = restaurant.categories;
console.log(main, third);

// const temp = main;
// main = third;
// third = temp;
// console.log(main, third);

[main, third] = [third, main];
console.log(main, third);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse); // most handy way to creat two variables out of one function call

///////Nested destruturing
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

/// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);



*/
/*
////////////////////////////////// Destructruing Objects ////////////////////////////
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thus: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 20,
    },

    sat: {
      open: 8,
      close: 16,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:20",
  address: "via del sale, 23",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 12 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/
/* 
///////////////////////       Spread Operator       /////////////////

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your  declicious pasta with ${ing1} , ${ing2} , ${ing3}`
    );
  },
};

const newMenu = [...restaurant.starterMenu, "Gnocci"];
console.log(newMenu);

/// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//// join 2 arrays

const twoArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(twoArray);

// const ingredients = [
//   prompt("Let's make pasta !  Ingredient 1?"),
//   prompt("Let's make pasta !  Ingredient 1?"),
//   prompt("Let's make pasta !  Ingredient 1?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

/////////Objects

const newRestaurant = { foundedIn: 2002, ...restaurant, founder: " Martia " };
console.log(newRestaurant);
*/

//////////////////////// Short Circuiting (&& and __) //////////////////////
// console.log(3 || "Jonas");
// console.log("" || "jonas");
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// ///////////////////////////////        Sets //////////////////

// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto ",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(orderSet);

// console.log(new Set("Jonas"));
// console.log(orderSet.size);
// orderSet.add("garlic Bread");
// orderSet.add("garlic Bread");
// console.log(orderSet);
// orderSet.delete("Pasta");
// console.log(orderSet);
/*
const gameEvent = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card "],
  [69, "Red card "],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [88, "Goal"],
  [92, "Yellow card"],
]);

//1.
// console.log(gameEvent.values());
const event = new Set(gameEvent.values());
console.log(event);

// 2.
gameEvent.delete(64);

// 3.

const time = [...gameEvent.keys()].pop();
console.log(time);

console.log(
  `An event happend, on Average , every ${time / gameEvent.size} minutes`
);

// 4.
for (const [min, event] of gameEvent) {
  const half = min <= 45 ? "first" : "second";
  console.log(`[${half} Half] ${min} : ${event}`);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////

const airline = "Tap Air India";
const plane = "A380";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("b838"[2]);
console.log(airline.length);
console.log("b383".length);

console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("r"));

console.log(airline.indexOf("India"));

console.log(airline.slice(4)); // Basically its the postion at which the extraction will start
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  const S = seat.slice(-1);
  if (S === "B" || S === "C") {
    console.log(`You got the middle seat 😙`);
  } else {
    console.log("you got lucky 😎");
  }
};
/// B and E are the middle seats

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
