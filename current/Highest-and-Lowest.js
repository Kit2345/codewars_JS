/* Description */

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

/* Solution */

// Plan
// convert string to array
// convert each element to a number
// sort array by number order
// new string variable is first and last of sorted number aray

const numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

function highAndLow(numbers) {
  let stringArray = numbers.split(" ");
  //   console.log("string", stringArray);
  //   console.log(typeof stringArray[1]);

  let numArray = stringArray.map((string) => Number(string));
  //   console.log("number", numArray);
  //   console.log(typeof numArray[1]);

  sortedNumArray = numArray.sort((a, b) => b - a);
  console.log("sorted", sortedNumArray);

  const highestNum = sortedNumArray[0];
  const lowestNum = sortedNumArray[sortedNumArray.length - 1];
  console.log("highest:", highestNum, "lowest:", lowestNum);
}

highAndLow(numbers);
