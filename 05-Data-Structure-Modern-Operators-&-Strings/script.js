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
