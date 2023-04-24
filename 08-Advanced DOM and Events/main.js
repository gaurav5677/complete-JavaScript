'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');



const nav = document.querySelector('.nav');












/////////////////////////////// Modal window   
const openModal = function () {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

const closeModal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
   }
});

// Smooth Scroll 

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

// Button Scrolling 
btnScrollTo.addEventListener('click', function (e) {
   section1.scrollIntoView({ behavior: 'smooth' });
});











//////////////////////////////////////////////////////////////////////////
/*                       Page Navigation                */

// document.querySelectorAll('.nav__link').forEach(function (el) {
//    el.addEventListener('click', function (e) {
//       e.preventDefault();
//       // console.log('link');
//       const id = this.getAttribute('href');
//       console.log(id);

//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

//    });
// });

// 1 . Add Event Listener to common parent element 
// 2 . Determine what elemnt originated the event 


document.querySelector('.nav__links').addEventListener('click', function (e) {
   // console.log(e.target);
   e.preventDefault();

   // Matching strategy 
   if (e.target.classList.contains('nav__link')) {
      // console.log('link')
      const id = e.target.getAttribute('href');
      console.log(id);

      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

   }
});











/*                                        Tabbed Component                        */



tabsContainer.addEventListener('click', function (e) {
   const clicked = e.target.closest('.operations__tab');

   // Guard clause
   if (!clicked) return;

   // Remove active classes
   tabs.forEach(t => t.classList.remove('operations__tab--active'));
   tabsContent.forEach(c => c.classList.remove('operations__content--active'));

   // Activate tab
   clicked.classList.add('operations__tab--active');

   // Activate content area
   document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
});

















/*                                    Menu  Animation                         */

// classlist property returns the css classnames of the elements 
const handleHover = function (e) {
   if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      // now we are using parent element to select each and every link 

      // we use queryselector on an element to search for a certain query only in that element.

      const siblings = link.closest('.nav').querySelectorAll('.nav__link');

      // now selecting logo

      const logo = link.closest('.nav').querySelector('img');


      // now we just have to change the opacity of siblinks of the selected links 

      siblings.forEach(el => {

         // checking if the current element is not the llink itself , because of the sibling will contain    initial link aswell 
         if (el !== link)
            el.style.opacity = this;

      });
      logo.style.opacity = this;
   }


}

// passing 'argument ' into handler 
nav.addEventListener('mouseover', handleHover.bind(0.5))


nav.addEventListener('mouseout', handleHover.bind(1))


// const handleHover = function (e) {
//    // console.log(e);
//    if (e.target.classList.contains('nav__link')) {
//       const link = e.target;
//       const siblings = link.closest('.nav').
//          querySelectorAll('.nav__link');
//       const logo = link.closest('.nav').querySelector('img');


//       siblings.forEach(el => {
//          if (el !== link) el.style.opacity = this;
//       });
//       logo.style.opacity = this;
//    }
// };


// nav.addEventListener('mouseover', handleHover.bind(0.5));


// nav.addEventListener('mouseout', handleHover.bind(1));



























// Sticky Navigation Using Intersection Observer API
// const obsCallback = function (entries, observer) {
//    // this callback function will get call , each time that the observed elememt, so 
//    // out target elememt  is intersecting the root element  at the threshold that we defiend 
//    entries.forEach(entry => {
//       console.log(entry);
//    });



// };

// const obsOptions = {
//    root: null,
//    threshold: [0, 0.2],
// };


// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
   const [entry] = entries;
   console.log(entry);

   if (!entry.isIntersecting) nav.classList.add('sticky');
   else
      nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
   root: null,
   threshold: 0,
   rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

















/////////// Reveal Sections

const allSections = document.querySelectorAll('.section');

const reverlSection = function (entries, observer) {
   const [entry] = entries;
   console.log(entry);
   if (!entry.isIntersecting) return;

   entry.target.classList.remove('section--hidden');
   observer.unobserve(entry.target);

}

const sectionObserver = new IntersectionObserver(reverlSection, {
   root: null,
   threshold: 0.15,
});

allSections.forEach(function (section) {

   sectionObserver.observe(section);
   section.classList.add('section--hidden');

});









///////////////////////// Lazy Loading Image 


// const imgTarget = document.querySelectorAll('img[data-src');
const imgTarget = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
   const [entry] = entries;
   console.log(entry);

   if (!entry.isIntersecting) return;
   // otherwise we want to replace the src with data-src (img names Low quality to high quality )
   entry.target.src = entry.target.dataset.src;

   entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');

   });

   observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
   root: null,
   threshold: 0,
   rootMargin: '-200px',
});


imgTarget.forEach(img => imgObserver.observe(img))

















// /*                               Sticky Event                  */
// //using window buz the scroll event is available in window 
// const initialCoords = section1.getBoundingClientRect();

// // console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//    // console.log(window.scrollY);

//    if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky')
//    else nav.classList.remove('sticky');
// });













//      Building a Slider Component 

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;


// const slider = document.querySelector('.slider')
// slider.style.transform = 'scale(0.5) translateX(-800px)';
// slider.style.overflow = 'visible';

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// the first slide should be at 0%  
// 2nd       slide should be at 100% 
// 3rd       slide should be at 200% 
// 4th       slide should be at 400% 


// const createDots = function () {
//    slides.forEach(function ( , i) {

//    });
// }



// the most tricky part while implementing slide function 
const goToSlide = function (slide) {
   slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));

}

goToSlide(0);

const nextSlide = function () {
   if (curSlide === maxSlide - 1) {
      curSlide = 0;
   } else {
      curSlide++;
   }


   goToSlide(curSlide);
}

const prevSlide = function () {
   if (curSlide === 0) {
      curSlide = maxSlide - 1;
   } else {
      curSlide--;
   }


   goToSlide(curSlide);
}
// Next slide 
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);


document.addEventListener('keydown', function (e) {
   // console.log(e);
   if (e.key === 'ArrowLeft') prevSlide();
   // we can also do some shortCircuiting  
   e.key === 'ArrowRight' && nextSlide();
});






















///////////// selecting elements 
// console.log(document.doucmentElement);
// console.log(document.head);
// console.log(document.body);

// for selecting multiple element use document.querySelectorAll
// const header = document.querySelector('.header');
// // we use the above alot when we want to select child elements 

// const allSection = document.querySelectorAll('.section');

// // console.log(allSection);

// document.getElementById('section--1')// here we only pass idname without the selector 

// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);
// this method actually return all the html collection 
// if the dom changes this also update automatically 

// this won't happend with node list 

// console.log(document.getElementsByClassName('btn'));

/////////////// Creating and inserting elements

// .insertAdjecentHTML   is used in Bankist  to create movements 
// quick and easy way 

// some other ways to create and knserting elements 

const message = document.createElement('div') // this div will create dom  element , all this is the dom object 

message.classList.add('cookie-message');
// message.textContent = 'We use cookies for imporved functionality and analytics.';
message.innerHTML = 'We use cookies for imporved functionality  and analytics. <button class = "btn btn--close-cookie">Got it! </button>';


// header.prepend(message);
// prepend : its basically adds the element as the first child of this( in this case header) element
header.append(message);
// append : its basically adds the element as the last child of this (in this case header) element


// we can also  use before and after

// header.after(message);
// header.before(message);

// delete Elements
// Remove the message 

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
   message.remove();
   // this remove method is recent update in javascipt
})



// style 
// this style is set as inline style
// directly in dom 
// only work for inline style 
message.style.backgroundColor = '#37383d';
message.style.width = '104%';

// console.log(getComputedStyle(message));

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// document.doucmentElement.style.setProperty('--color-primary', 'orangered');
// document.documentElement.style.setProperty('--color-primary', 'orangered');



// Tyeps of events and Event Handlers


// MouseEnterEvent

// const h1 = document.querySelector('h1');


// const alertH1 = function (e) {
//    alert('addEventListener : Great ! yuo are reading the heading :D');

//    h1.removeEventListener('mouseenter', alertH1);
// }

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// mouseenter event is a little bit like the hover event in CSS so, it fires whenever the mouse enters a certain element
// h1.addEventListener('mouseenter', function (e) {
//    alert('addEventListener: Great your are reading the Heading ');

// });
