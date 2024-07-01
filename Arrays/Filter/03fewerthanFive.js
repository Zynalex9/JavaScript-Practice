// Filter an array of strings to exclude strings with fewer than 5 characters.
const arrOfStrings = ["Hello", "LinkedIn", "github", "leetcode"];
const filteredStrings = arrOfStrings.filter((str) => str.length > 5);
console.log(filteredStrings);
