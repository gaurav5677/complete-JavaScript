'use strict';

// Data
const account1 = {
  owner: 'Gaurav Patil',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2021-05-08T14:11:59.604Z',
    '2021-07-25T17:01:17.194Z',
    '2021-07-21T23:36:17.929Z',
    '2021-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Abhishek Shinde',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const warningText = document.querySelector('.warning-text');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const loginForm = document.querySelector('.login');
const navContainer = document.querySelector('.login-nav');
const loginTooltip = document.querySelector('.tooltip');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnLogout = document.querySelector('.logout');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--password');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return '${daysPassed} days ago';
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

const formatCurrency = function (value, locale, currency) {
  //Format currency
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  //sort movemenets
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //Display dates
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);
    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);
    const html = ` <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">${displayDate}</div>
  <div class="movements__value">${formattedMov}</div>
</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//CREATE USERNAME
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
const updateUI = function (currentAccount) {
  //Calculate numbers
  displayMovements(currentAccount);
  calcPrintBalance(currentAccount);
  calcDisplaySum(currentAccount);
};
//Display Balance
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedMov = formatCurrency(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = `${formattedMov}`;
};

///IN OUT INTERESET

const calcDisplaySum = function (acc) {
  //Income
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);
  //Out
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCurrency(out, acc.locale, acc.currency);
  //Interest
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

//Logout timer
const startLogoutTimer = function () {
  const tick = function () {
    const mins = String(Math.trunc(timer / 60)).padStart(2, 0);
    const secs = String(timer % 60).padStart(2, 0);
    labelTimer.textContent = `${mins}:${secs}`;
    //Logout once we reach 0
    if (timer === 0) {
      clearInterval(timing);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.display = 'none';
      loginTooltip.style.display = 'block';
      loginForm.style.display = 'flex';
      navContainer.style.marginTop = '10%';
    }
    timer--;
  };
  //set time to 5 min
  let timer = 100;
  tick();
  const timing = setInterval(tick, 1000);
  return timing;
};
//Lougout with logut button
btnLogout.addEventListener('click', function () {
  labelWelcome.textContent = 'Log in to get started';
  containerApp.style.display = 'none';
  loginForm.style.display = 'flex';
  loginTooltip.style.display = 'block';
  navContainer.style.marginTop = '10%';
});

//Implement Login
let currentAccount, timing;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submiting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  ///Login validation
  let bothInputsEmpty =
    inputLoginUsername.value.length === 0 && inputLoginPin.value.length === 0;
  let usernameEmpty = inputLoginUsername.value.length === 0;
  let passwordEmpty = inputLoginPin.value.length === 0;

  if (bothInputsEmpty) {
    inputLoginUsername.classList.add('warning');
    inputLoginPin.classList.add('warning');
    warningText.textContent = 'Empty Username and Password!';
    console.log('empty both');
  } else if (usernameEmpty && !passwordEmpty) {
    inputLoginUsername.classList.add('warning');
    inputLoginPin.classList.remove('warning');
    warningText.textContent = 'Empty Username!';
    console.log('empty username');
  } else if (passwordEmpty && !usernameEmpty) {
    inputLoginUsername.classList.remove('warning');
    inputLoginPin.classList.add('warning');
    warningText.textContent = 'Empty Password!';
    console.log('empty password');
  } else if (!currentAccount && !bothInputsEmpty) {
    inputLoginUsername.classList.add('warning');
    inputLoginPin.classList.add('warning');
    warningText.textContent = "Account with such username doesn't exist!";
    console.log('no such acc');
  }
  /// if validation passed
  else {
    inputLoginUsername.classList.remove('warning');
    inputLoginPin.classList.remove('warning');
    warningText.textContent = ' ';
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
        }!`;

      //Show hidden container
      loginForm.style.display = 'none';
      containerApp.style.display = 'grid';
      loginTooltip.style.display = 'none';
      navContainer.style.marginTop = '5%';
      //Create current date
      const now = new Date();
      const day = `${now.getDate()}`.padStart(2, 0);
      const month = `${now.getMonth() + 1}`.padStart(2, 0);
      const year = now.getFullYear();
      const hour = `${now.getHours()}`.padStart(2, 0);
      const min = `${now.getMinutes()}`.padStart(2, 0);
      labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
      updateUI(currentAccount);
      //Clear input
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
      //clear time if it started on another acc
      if (timing) clearInterval(timing);
      //Start logout
      timing = startLogoutTimer();
    }
  }
});

//Tranfer money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc.username !== currentAccount.username
  ) {
    //Transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
    //Reset timer on action
    clearInterval(timing);
    timing = startLogoutTimer();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);
    loginForm.style.display = 'flex';
    containerApp.style.display = 'none';
    navContainer.style.marginTop = '10%';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//Loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    //Set timer for loan
    setTimeout(function () {
      //Add movement
      currentAccount.movements.push(amount);
      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      //update UI
      updateUI(currentAccount);
      //Reset timer on action
      clearInterval(timing);
      timing = startLogoutTimer();
    }, 2500);
  }

  inputLoanAmount.value = '';
});

//Sort movements
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});












// "use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP



// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");



// // 145 Creating DOM Event
// // it's always best to creat a function

// const displayMovements = function (movements, sort = false) { // receives data from movements with which it should actally work


//   containerMovements.innerHTML = '';
//   // here we are using innerHTML as a setter
//   //.textcontent = 0




//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;



//   movs.forEach(function (mov, i) {


//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//      <div class="movements__row">
//     <div class="movements__type  movements__type--${type}"> ${i + 1} ${type}</div>
//     <div class="movements__value">${mov}€</div>
//  </div>`;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//     // A DOMstring representing the position  relative  to the element  , must be one of the following

//     // beforebegin , afterbegin, beforeend , afterend
//   });

// };


// // displayMovements(account1.movements);





// /*                          Display Balance                       */

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

//   labelBalance.textContent = `${acc.balance} EUR`;
// };

// // calcDisplayBalance(account1.movements);






// /*                          Display Balance   Summary                     */


// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements.filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);

//   labelSumIn.textContent = `${incomes}€`;

//   const out = acc.movements.filter(curr => curr < 0)
//     .reduce((acc, curr) => acc + curr, 0);


//   labelSumOut.textContent = `${Math.abs(out)}€`;


//   const interest = acc.movements.filter(mov => mov > 0)
//     .map(deposite => deposite * acc.interestRate / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);

//   labelSumInterest.textContent = `${interest}`;
// }
// // calcDisplaySummary(account1.movements);




// // console.log(containerMovements.innerHTML);

// ///149
// ///////// ////////////////// Computing Usernames ////////////////
// // here we are creating userNames of the data
// const creatUserNames = function (accs) {
//   // using foreach method buz we do not want to creat a new array , just want to moidfy
//   //  the array that we get as an input
//   // we use forEach method simply to do some work without returning anything

//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(word => word[0])
//       .join('');

//   });



// };

// creatUserNames(accounts);
// // console.log(accounts);

// // console.log(creatUserNames("Steven Thomas Williams"));
// // const user = "Steven Thomas Williams"; // stw





// // console.log(username);


// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc.movements);

//   // Display balance
//   calcDisplayBalance(acc);
//   // Display summary
//   calcDisplaySummary(acc);
// }




// /*           L0gin   Implementation                       */
// let currentAccount;

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   // as for default this will then prevent  this form from submiting
//   // console.log('LOGIN');

//   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // ? this will check whether this account is present or not
//     // console.log("Login")

//     // Display UI and Message
//     labelWelcome.textContent = `Welcome Back , ${currentAccount.owner.split(' ')[0]}`;

//     containerApp.style.opacity = 100;

//     // clear the input field
//     inputLoginUsername.value = inputLoginPin.value = '';


//     // this will blur the login credentials
//     inputLoginPin.blur();


//     // updated uI
//     updateUI(currentAccount);


//   }
//   // converted into Number becz its always in string

// })




// /*                                    Transfer Monney form one to another                      */

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   // creating some data
//   const amount = Number(inputTransferAmount.value);

//   const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

//   // console.log(amount, receiverAcc);

//   inputTransferAmount.value = inputTransferTo.value = '';

//   if (amount > 0 && receiverAcc &&
//     currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
//     // console.log('Transfer valid');
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);


//     // Update UI
//     updateUI(currentAccount);

//   }
// });







// //// Loan section

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     currentAccount.movements.push(amount);

//     updateUI(currentAccount);


//   }

//   inputLoanAmount.value = '';
// })


// // Delelte account

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();
//   // console.log('Delete');

//   if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {


//     const index = accounts.findIndex(acc => acc.username === currentAccount.username);
//     console.log(index);

//     // Delete Account
//     accounts.splice(index, 1);


//     // hide ui
//     containerApp.style.opacity = 0;

//   }
//   inputCloseUsername.value = inputClosePin.value = '';


// });

// /*                       The FindIndex Method                             */
// // To delete an element from the array we use Splice method,but
// // for splic method , we need index at which we want to delete ,
// // and that index could come from the findIndex Method





// //        sort
// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// })


// ///////////////////////////////// LECTURES  ///////////////////////////////////////////////////


// //
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// /*


// /////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// ////////////////////////////////////////////////////Slice Method ////////////////////////////////
// console.log(arr.slice(2)); // this retures new arrya but only the extracted part


// w,,,
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1)); // thats how we can take last element

// console.log(arr.slice(1, -2)); // -2 will extract except the last two element
// console.log(arr.slice()); // when  you want to change multiple method here then  use slice mehtod
// console.log([...arr]);
// ///////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////Splice Method /////////////////////////////////////

// // console.log(arr.splice(-1)); // In Splice Method the Extracted Method got remove from the original Array
// // console.log(arr);
// // arr.splice(1, 2);
// // console.log(arr);

// const arr2 = ["j", "i", "h", "g", "j"];
// console.log(arr2.reverse());
// console.log(arr2); // so this reverse method  manipulated the original array (arr2)

// ///////////////////////////////////////////Concat  Method /////////////////////////////////////

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// ///////////////////////////////////////////Join  Method /////////////////////////////////////

// console.log(letters.join(" - "));
// */
// ///////////////////////////////////////////  Looping  Arrays_ForEAch /////////////////////////////////////
// /*
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(` Movement ${ i + 1 }:You deposited ${ movement } `);
//   } else {
//     console.log(` Movement ${ i + 1 }: You withdrew ${ Math.abs(movement) } `);
//   }
// }

// console.log("   -------------ForEach------------     ");
// movements.forEach(function (mov, i, arr) {
//   // here the name doesn't matter but what  matter is the order  , the  first one is the Current Element , the seconed one is index and the
//   // thrid one is the entire arrya
//   if (mov > 0) {
//     console.log(` Movement ${ i + 1 }:You deposited ${ mov } `);
//   } else {
//     console.log(` Movement ${ i + 1 }: You withdrew ${ Math.abs(mov) } `);
//   }
// });

// // on iteration 0 : function(200) this  will call the value of 200
// // on iteration 1 : function(450) this  will call the value of 450
// // so on and so forth

// /*                    Looping Arrays_For EAch on maps and sets                        */
// //Maps
// /*
// const currencies = new Map([
//   ["USD", "United States Dollar"],
//   ["EUR", "EURO"],
//   ["GBP", "Pound Sterling "],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${ key } : ${ value } `);
// });

// // sets
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${ value }: ${ value } `);
// });
// */
// /*                   146 Coding Challenge Julia's and kate's dogs                          */



// // const checkDogs = function (dogsJulia, dogsKate) {
// //   const dogsJuliaCorrected = dogsJulia.Slice();
// //   dogsJuliaCorrected.splice(0, 1);// zero'th  element and want to remove only 1 element through the array
// //   dogsJuliaCorrected.splice(-2); // last two elements
// //   console.log(dogsJuliaCorrected);


// //   const dogs = dogsJuliaCorrected.concat(dogsKate);
// //   console.log(dogs);

// //   // dog number 1 is an adult , and is 5 year old   or a puppy (Dog number 2 is still a puppy)
// //   dogs.forEach(function (dog, i) {
// //     if (dog >= 3) {
// //       console.log(`Dog number ${ i + 1 } is an adult, and is ${ dog } years old `)
// //     } else {
// //       console.log(`Dog number ${ i + 1 } is still a puppy`);
// //     }
// //   })
// // }

// // checkDogs([3, 5, 2, 12, 7][4, 1, 15, 8, 3]);

// /*                  147 **** Map Data Transformation method                            */


// // // over here it automatically generate the new array
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const eurToUsd = 1.1;
// // // const movementsUSD = movements.map(function (mov) {
// // //   return mov * eurToUsd;
// // // });

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // })


// // console.log(movements);
// // console.log(movementsUSD);

// // more inline with functinonal programming ;; this is the way to go in mordern JavaScript


// // same using for loop


// // here we manually created new array

// // const movementsUSDfor = [];
// // for (const move of movements) {
// //   movementsUSDfor.push(move * eurToUsd);



// // }
// // console.log(movementsUSDfor);



// // current element, index , entire array

// // Array.prototype.unique = function () {
// //   console.log("Hello There");
// // }

// // console.log(Array.prototype);
// // Array.prototype.unique();

// // const arr1 = [1, 2, 3, 4];
// // arr1.unique()



// /*                       Filter Method                 */

// //now we will try to make an array of deposites from movements
// /*
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositeFor = [];

// for (const mov of movements) {
//   if (mov > 0) {
//     depositeFor.push(mov);
//   }
// }

// console.log(depositeFor);


// // Now we will build arrya for withdrawals


// const withdrawals = movements.filter(function (move) {
//   return move < 0;
// });
// console.log(withdrawals);

// // using arrow function

// const withdrawalsArrow = movements.filter(move => move < 0);
// console.log(withdrawalsArrow);
// */

// /*                               Reduce Method                           */
// // use to boil down all the elements in the array to one single value


// // //accumulator is like a snowball
// // const balance = movements.reduce(function (accumulator, currentElement, index, arr) {
// //   return accumulator + currentElement;
// // }, 0);

// // console.log(balance);


// /* const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
// // do the same thing manually using for loop

// let balanceFOr = 0;

// for (const mov of movements) balanceFOr += mov;
// console.log(balanceFOr);

// */
// // now we are going to calculate the maximum value in the movement
// // using reduce method

// /*
// const maximumValue = movements.reduce(function (accumulator, currentValue) {
//   if (accumulator > currentValue) {
//     return accumulator;
//     // we got to return accumulator buz in reduce method  we always have to somehow return the accumulator
//   } else {
//     return currentValue;
//   };
// }, movements[0]);

// console.log(maximumValue);

// // converting the  in Arrow Function
// const max = movements.reduce((acc, current) => {
//   if (acc > current) return acc;
//   else return current;
// }, movements[0]);

// console.log(max);

// */




// /*                              The Magic of Chaining Methods                   */

// // using all the method together ( filter , map , reduce )

// // const eurToUsd = 1.1;

// // const totalDepositsUSD = movements.filter(curr => curr > 0)
// //   .map(curr => curr * eurToUsd)
// //   .reduce((acc, curr) => acc + curr, 0);

// // console.log(totalDepositsUSD);


// /*                      Find Method                  */

// // Use to retrieve One Element of an arrya based on a condition

// // const firstWithdrawal = movements.find(mov => mov < 0);
// // console.log(movements);
// // console.log(firstWithdrawal);

// // const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// // console.log(account);

// // implement the above in for off loop 