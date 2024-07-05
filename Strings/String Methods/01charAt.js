// Question 1: Write a function that returns the middle character of a string. If the string length is odd, return the middle character; if even, return the middle two characters.
const str = "HELLO";
const str1 = "HELLOH";
console.log(str.length);
function middleOf(string) {
  const middle = Math.floor(string.length / 2);

  if (string.length % 2 === 1) {
    return string.charAt(middle);
  } else {
    return string.slice(middle - 1, middle + 1);
  }
}
console.log(middleOf(str));
// Question 2: Create a function that checks if the first and last characters of a string are the same.
 function firstLast(string) {
  if (string.charAt(0) === string.charAt(string.length - 1)) {
    return true;
  } else {
    return false;
  }
}
console.log(firstLast(str1))