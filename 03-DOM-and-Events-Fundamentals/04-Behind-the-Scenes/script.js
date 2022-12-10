function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2005 && birthYear <= 2018) {
      var millenial = true;
      const str = `oh, You're a Millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = "gaurav";
calcAge(2001);
// var varrialbe do not care about blocks at all
