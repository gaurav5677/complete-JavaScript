'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/* 
/////////////////////////////////////// Ajax call  /////////////////////////////////////// 
const getCountryData = function (country) {
   const request = new XMLHttpRequest();
   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
   request.send();

   request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);




      // const lang = data.languages;
      // const langspoken = Object.values(data.languages)[0]
      // const currencies = Object.values(data.currencies)[0].name;

      const html = ` 
   <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people </p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
        </article>
        `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
   })
}


getCountryData('portugal');
getCountryData('India')
getCountryData('usa')
*/

/////////////////////////////////////// Callback hell   /////////////////////////////////////// 
// multiple ajax call , let's create a sequence of calls , so the second will run after the first get complete
// I'm going to reder the neighboring country  , besides the origianl country 

const renderCountry = function (data) {

   // const flagsImgage = Object.values(data.flags)[0].png;

   const html = ` 
   <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people </p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
        </article>
        `;
   countriesContainer.insertAdjacentHTML('beforeend', html);
   countriesContainer.style.opacity = 1;
   // console.log(data.flags.png);
}





// const getCountryAndNeighbor = function (country) {
//    // AJAX CAll country 1
//    const request = new XMLHttpRequest();
//    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);  // first AJAX call
//    request.send();

//    request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);

//       //render Country 1
//       renderCountry(data);

//       // Get neighbor Country 2
//       const [neighbor] = data.borders;

//       if (!neighbor) return;

//       // AJAX CAll country 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);  // second AJAX call
//       request2.send();


//       request2.addEventListener('load', function () {
//          const data2 = JSON.parse(this.responseText);
//          console.log(data2);

//          console.log(data2);
//          renderCountry(data2, 'neighbor');
//       })
//    });
//    // console.log(neighbor);



// }
// getCountryAndNeighbor('bangladesh');


// const getCountryAndNeighbour = function (country) {
//    // AJAX call country 1
//    const request = new XMLHttpRequest();
//    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//    request.send();
//    request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
//       // Render country 1
//       renderCountry(data);
//       // Get neighbour country (2)
//       const [neighbour] = data.borders;
//       if (!neighbour) return;
//       // AJAX call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();
//       request2.addEventListener('load', function () {
//          const data2 = JSON.parse(this.responseText);
//          console.log(data2);
//          renderCountry(data2, 'neighbour');
//       });
//    });
// };
// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');


// const getCountryData = function (country) {
//    const request = new XMLHttpRequest();
//    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//    request.send();

// const request = fetch('https://restcountries.com/v3.1/name/india');

// console.log(request);


///////////////////////////////////////  Consuming Promises    /////////////////////////////////////// 


// const getCountryData = function (country) {
//    fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then(function (response) {
//          console.log(response)
//          return response.json();//with  json method  we can read the data body 

//          // response.json will be the new promise, so we need to handle that promise as well . so 
//          // the way we do that is to call another then method .then(function(data){console.log(data);})

//       }).then(function (data) {
//          console.log(data);

//          renderCountry(data[0]);

//       })
//    // to handle the fulfilled state we use 'then'  method that is available on all Promises 
//    // we need to pass a callback function that we want ot executed  as soon as the promise is actually fulfilled 



// };


// const getCountryData = function (country) {
//    fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then((response) => response.json()//with  json method  we can read the data body 
//          // response.json will be the new promise, so we need to handle that promise as well . so 
//          // the way we do that is to call another then method .then(function(data){console.log(data);})
//       ).then(data => renderCountry(data[0]));
// }

// getCountryData('india')


///////////////////////////////////////  Chanining  Promises    /////////////////////////////////////// 


// const getCountryData = function (country) {
//    //country 1 
//    fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then((response) => response.json() // then method always return  a promise , no matter if we acturally return anything or not 
//          // but if we don return value , then that value will became the fulfillment value of the return promise 
//       ).then(data => {
//          renderCountry(data[0]);
//          const neighbor = data[0].borders[0]

//          if (!neighbor) return;
//          // country 2 
//          return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
//       })
//       .then(response => response.json())
//       .then(data => renderCountry(data, 'neighbor'));
// };


// btn.addEventListener('click', function () {

//    getCountryData('india');

// })


///////////////////////////////////////  Handling Rejected   Promises    ///////////////////////////////////////

//  the only way in which the fetch promise rejects  is when  the user looses its internet connection 
// const renderError = function (msg) {
//    countriesContainer.insertAdjacentText("beforeend", msg);

//    // countriesContainer.style.opacity = 1;
// }


// const getCountryData = function (country) {
//    //country 1 
//    fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then((response) => response.json() // then method always return  a promise , no matter if we acturally return anything or not 
//          // but if we don return value , then that value will became the fulfillment value of the return promise 
//       ).then(data => {
//          renderCountry(data[0]);
//          const neighbor = data[0].borders[0]

//          if (!neighbor) return;
//          // country 2 
//          return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
//       })
//       .then(response => response.json())
//       .then(data => renderCountry(data, 'neighbor'))
//       .catch(err => {
//          console.error(`${err} 🔥🔥`);
//          renderError(`something went wrong 🔥🔥 ${err.message}. Try Again!`);
//       })


//       // we use this method  for something that always needs to happen no matter the result of the promises 
//       .finally(() => {
//          countriesContainer.style.opacity = 1;


//       })

// };


// btn.addEventListener('click', function () {

//    getCountryData('india');

// })



//since ES2017 there is now an even better and easier way to consume promises which is called async and await 
///////////////////////////////////////  Consuming Promises with Async  / Await    ///////////////////////////////////////

// so now this function is asynchronous function 
// // will basically keep running in the background 
// const wehereAmI = async function (country) {

// }

const getPosition = function () {
   return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
   })
}

const wehereAmI = async function (country) {
   // we use the await keyword to basically await for  the result of this  promises
   // Isn't  stopping the Code  Blocking the Execution ? 
   //  ans no  bua , stopping execution in an async function , the asunchronous function Run Ascynchrouslly in background
   // not blocking the main threat of  exection , not blocking the call stack 

   const pos = await getPosition();
   const { latitude: lat, longitude: lng } = pos.coords;

   // Reverse geocoding  
   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit   / =json`);
   const dataGeo = await resGeo.json();
   console.log(dataGeo);
   // const { } = await getPosition();


   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
   const data = await res.json();
   console.log(data);

   renderCountry(data[0]);

}
wehereAmI('india');
console.log('first');
