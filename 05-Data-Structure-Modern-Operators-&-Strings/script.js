// const { start } = require("live-server");

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
