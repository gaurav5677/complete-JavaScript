/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " Correct Number 🎉";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 11;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

////////////////////////////////////////////// Secret Number ///////////////////////////////////////////////////////////////////
const secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".number").textContent = secretNumber;

/* here Math is object and random is one of the method in Math object*/
//////////////////////////////////////////// Score data  ///////////////////////////////////////////////////////////////////

let score = 20;
////////////////////////////////////////////Handling click event ///////////////////////////////////////////////////////////////////

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // this will only execute if the guess is false , but the NOT operator will convert it to true.
    document.querySelector(".message").textContent = "🙅‍♂️ No number ! ";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " Correct Number 🤩";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high! 📈  ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost the game !🤡";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low! 📈  ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost the game !🤡";
      document.querySelector(".score").textContent = 0;
    }
  }
});
