// You have a string names = "John, Jane, Bob". Use the split method to create an array containing each name separately.
const names = "John, Jane, Bob";
const splitedNames = names.split(",");
console.log(splitedNames);
// Given a string dateString = "2023-07-05", split it into an array where each element represents the year, month, and day separately.
const dateString = "2023-07-05";
const dateArray = dateString.split("-");
let formattedDateString = [
  "YEAR: " + dateArray[0],
  "Month: " + dateArray[1],
  "Day: " + dateArray[2],
];
console.log(dateArray);
console.log(formattedDateString);
