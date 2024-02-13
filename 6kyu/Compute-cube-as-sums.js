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

// Noticed that values are also n*n as the middle array number.

function findSummands(n) {
  let sumArr = [];
  const nSquared = n * n;
  const halfN = Math.floor(n / 2);
  console.log("halfN", halfN);

  if (n === 1) {
    sumArr.push(1);
    return sumArr;
  }

  if (nSquared % 2 === 0) {
    console.log(n, nSquared, "even");
    for (let i = nSquared + 1; i <= nSquared + (halfN - 1) * 2 + 1; i = i + 2) {
      sumArr.push(i);
      //     console.log(sumArr)
    }
    for (let i = nSquared - 1; i >= nSquared + 1 - halfN * 2; i = i - 2) {
      sumArr.unshift(i);
      //           console.log(sumArr)
    }
  } else {
    console.log(n, nSquared, "odd");
    for (let i = nSquared - 2 * halfN; i <= nSquared + 2 * halfN; i = i + 2) {
      sumArr.push(i);
      //     console.log(n, sumArr)
    }
  }
  return sumArr;
}

// function findSummands(n) {
//   let sumArr = [];
//   const nCubed = n * n * n;
//   //   console.log("nCubed =", nCubed)
//   let currentSum = 0;

//   //   case: n=1
//   if (n === 1) {
//     sumArr.push(1);
//     console.log("n=1", sumArr);
//   } else {
//     //       console.log("less than nCubed", currentSum)
//     for (let i = 1; i <= nCubed; i = i + 2) {
//       sumArr = [];
//       currentSum = 0;
//       for (let j = 0; j < n * 2; j = j + 2) {
//         //     console.log("j", j)
//         currentSum += i + j;
//         sumArr.push(i + j);
//         //     console.log(sumArr)
//       }
//       console.log("i:", i, "n:", n, sumArr, currentSum);
//       if (currentSum === nCubed) {
//         return sumArr;
//       }
//     }
//   }
//   return sumArr;
// }
