/* Description */

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

/* Solution */

function powersOfTwo(n) {
  let answersArr = [1];
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= 2;
    answersArr.push(answer);
  }
  return answersArr;
}

powersOfTwo(4);
