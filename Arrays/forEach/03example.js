// Program: Flatten a nested array using forEach
let nestedArray = [[1, 2], [3, 4], [5, 6]];

let flattenedArray = [];

nestedArray.forEach(function(innerArray) {
    innerArray.forEach(function(element) {
        flattenedArray.push(element);
    });
});

console.log("Flattened array:", flattenedArray);