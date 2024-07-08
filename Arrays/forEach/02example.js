// Program: Filter and print even numbers from an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even numbers:");

numbers.forEach(function(number) {
    if (number % 2 === 0) {
        console.log(number);
    }
});
