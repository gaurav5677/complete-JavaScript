/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " Correct Number 🎉";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 11;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

////////////////////////////////////////////// Secret Number ///////////////////////////////////////////////////////////////////
const number = Math.random(); // here Math is object and random is one of the method in Math object
////////////////////////////////////////////Handling click event ///////////////////////////////////////////////////////////////////

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // this will only execute if the guess is false , but the NOT operator will convert it to true.
    document.querySelector(".message").textContent = "🙅‍♂️ No number ! ";
  }
});
