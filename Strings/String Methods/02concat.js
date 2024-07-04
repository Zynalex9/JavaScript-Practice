//Question 1: Implement a function that concatenates two strings with a space in between.
let str1 = "Hello"
let str2 = "World"
function concatStrings(str1, str2) {
    return str1.concat(" ",str2)
}
console.log(concatStrings(str1, str2))