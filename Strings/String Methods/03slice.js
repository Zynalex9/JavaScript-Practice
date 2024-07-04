// Question: Write a function getFirstHalf(str) that returns the first half of a string str.
const str = "Hello World";
const str1 = "JavaScript";
function firstHalf(str) {
  const half = Math.floor(str.length / 2);
  return str.slice(0, half);
}
console.log(firstHalf(str));
//Question: Implement a function that extracts a substring.
function getSubString(str, startIndex, endIndex) {
  return str.slice(startIndex, endIndex);
}
console.log(getSubString(str1, 4, 10));
