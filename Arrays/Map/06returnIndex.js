// Given an array of strings, use map to create a new array where each string is appended with its index in the original array, separated by a dash (e.g., ["apple", "banana"] becomes ["apple-0", "banana-1"]).
const fruits = ["apple", "banana", "wateremlon", "kevi", "mango"];
const mappedFruits = fruits.map((fruit) => {
    return fruit + "-" + fruits.indexOf(fruit);
});
console.log(mappedFruits)