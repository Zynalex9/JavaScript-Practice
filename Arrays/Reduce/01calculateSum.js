// Calculate the sum of all numbers in the array using reduce.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sum = numbers.reduce((acc, currentVal) => {
  return acc + currentVal;
}, 0);
console.log(sum);
