// Flatten an array of arrays into a single array.
const arrofArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
const flattenArr = arrofArr.reduce((acc, arr) => {
return acc.concat(arr);
},[]);
