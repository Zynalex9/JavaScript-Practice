/* Modify an array of numbers using map so that:
 Numbers less than 10 are multiplied by 2.
 Numbers 10 or greater are multiplied by 3.*/

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const mappedArr = myArr.map((elem) => {
  /* first way
   if (elem < 10) {
     return elem * 2;
     }
     else {
     return elem * 3;
     } */
  //   Second way
  return elem < 10 ? elem * 2 : elem * 3;
});
console.log(mappedArr);
