/* Description */

// Can you compute a cube as a sum?

// In this Kata, you will be given a number n (where n >= 1) and your task is to find n consecutive odd numbers whose sum is exactly the cube of n.

// Mathematically:
// cube = n ** 3
// sum = a1 + a2 + a3 + ..... + an
// sum == cube
// a2 == a1 + 2, a3 == a2 + 2, .......

// For example:

// findSummands(3) = [7,9,11] // because 7 + 9 + 11 = 27, the cube of 3. Note that there are only n = 3 elements in the array.
// Write function findSummands(n) which will return an array of n consecutive odd numbers with the sum equal to the cube of n (n*n*n).

/* Solution */

// Plan
// Need loop:
//      an array of n consecutive odd numbers
//      to sum this array
//      check sum is equal to cube of n.
//                  if equal return array
//                  if sum is greater than n*n*n then stop otherwise check next array

function findSummands(n) {
  let sumArr = [];

  //   case: n=1
  if (n === 1) {
    sumArr.push(1);
    console.log(sumArr);
    return sumArr;
  }

  return sumArr;
}
