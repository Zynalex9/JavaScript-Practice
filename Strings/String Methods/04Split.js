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
// Write a function parseTime(timeString) that takes in a time string in the format "HH:MM:SS" and returns an object { hours: HH, minutes: MM, seconds: SS }. Use the split method to achieve this.
function timeString(string) {
  let timeArray = string.split(":");
  let [haveHours, haveMinutes, haveSeconds] = timeArray;
  return {
    hours: parseInt(haveHours),
    minutes: parseInt(haveMinutes),
    seconds: parseInt(haveSeconds),
  };
}
const timeStr = "12:55:20";
console.log(timeString(timeStr));
//Create a function `splitAndMerge(str)` that splits a string `str` into individual characters, sorts them alphabetically, and then joins them back into a string.
function splitAndMerge(str) {
  let splitStr = str.split("").sort().join("");
  console.log(splitStr);
}
let str = "DCBA";
splitAndMerge(str);
