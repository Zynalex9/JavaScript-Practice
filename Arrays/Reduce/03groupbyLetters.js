// Group words in an array by their starting letter.
const words = ["apple", "banana", "apricot", "cherry", "blueberry"];
const groupedWords = words.reduce((acc, word) => {
  const startingLetter = word[0];
  if (!acc[startingLetter]) {
    acc[startingLetter] = [];
  }
  acc[startingLetter].push(word);
  return acc;
}, []);

console.log(groupedWords);
