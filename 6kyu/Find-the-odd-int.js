// Find the odd int

// DESCRIPTION:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  const sortedArr = A.sort((a, b) => a - b);
  console.log(sortedArr);
  let countedArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    let count = 0;

    if (!countedArr.includes(sortedArr[i])) {
      countedArr.push(sortedArr[i]);
      count++;
      for (let j = i + 1; j < sortedArr.length; j++) {
        console.log(`i: ${sortedArr[i]}, j: ${sortedArr[j]} `);
        if (sortedArr[i] !== sortedArr[j]) {
          console.log("doesnt equal");
          break;
        } else {
          console.log("is equal");
          count++;
          console.log("current count", count);
        }
      }
    }
    console.log("final count", count);
    if (count % 2 !== 0) {
      return sortedArr[i];
    }
  }
}

// Plan
// Sort
// Go through array:
//    how we counted this number before?
//        if yes: move on
//        if no:
//            push number into a countedArray,
//            count number of times it repeats
//    is count = even?
//         if yes: continue with loop
//         if no: stop, and return number
