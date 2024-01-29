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
