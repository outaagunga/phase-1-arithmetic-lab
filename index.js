//Type your code here
function multiply(a, b) {
  const result = a * b;
  return result;
}

const a = 31;
const b = 2;
console.log(multiply(4,6));


// random: generates a random integer greater than 0
function random() {
  let randomNumber = 0;
  while (randomNumber <= 0) {
    randomNumber = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  }
  return randomNumber;
}
console.log(random());

// mod: an equation that calculates a remainder that is equal to 4
function mod() {
  const dividend = 14;
  const divisor = 5;
  const remainder = dividend % divisor;

  return {
    num3: 0, 
    num4: 0, 
    remainder,
  };
}
console.log(mod())
// max: returns 20 as the highest number in the set
function max() {
  const numbers = [5, 10, 15, 20, 2];
  return Math.max(...numbers);
}
