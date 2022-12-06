/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " Correct Number 🎉";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 11;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

////////////////////////////////////////////// Secret Number ///////////////////////////////////////////////////////////////////
let secretNumber = Math.trunc(Math.random() * 20 + 1);

/* here Math is object and random is one of the method in Math object*/
//////////////////////////////////////////// Score data  ///////////////////////////////////////////////////////////////////

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

////////////////////////////////////////////    Handling check event ////////////////////////////////////////////////////

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  /////////////////////////////////////////    when there is no input    //////////////////////////////////////////////////////

  if (!guess) {
    // this will only execute if the guess is false , but the NOT operator will convert it to true.
    //  document.querySelector(".message").textContent = "🙅‍♂️ No number ! ";
    displayMessage("🙅‍♂️ No number ! ");

    /////////////////////////////////////////////  This is  This is when the guess is Correct , player wins   //////////////////////////////////////////////////
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;

    //  document.querySelector(".message").textContent = " Correct Number 🤩";
    displayMessage(" Correct Number 🤩");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem"; // this must be in string we can not specify it as  number or integer value .
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    ///when the guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high! 📈 " : "Too low! 📈  ");
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too high! 📈 " : "Too low! 📈  ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" You lost the game !🤡");
      // document.querySelector(".message").textContent = " You lost the game !🤡";
      document.querySelector(".score").textContent = 0;
    }
    //     /////////////////////////////////////////////   This is when the guess is too High !////////////////////////////////////////
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too high! 📈  ";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = " You lost the game !🤡";
    //       document.querySelector(".score").textContent = 0;
    //     }

    //     /////////////////////////////////////////////   This is when the guess is too Low ! //////////////////////////////////
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too low! 📈  ";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = " You lost the game !🤡";
    //       document.querySelector(".score").textContent = 0;
    //     }
  }
});

////////////////////////////////////////////    Handling Again  event ////////////////////////////////////////////////////

document.querySelector(".again").addEventListener("click", function () {
  score = "20";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector(".message").textContent = "Start guessing.....";
  displayMessage("Start guessing.....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
