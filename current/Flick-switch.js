/* Description */

// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes

// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

/* Solution */

// Plan
//  need:
//      - array to contain true/false
//      - variable to keep track of true or false
//      - loop to go through each element. and add true/false to array

function flickSwitch(arr) {
  let current = true;
  let arrList = [];
  console.log(arr);
  console.log("current", current);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      console.log(i, arr[i]);
      current ? (current = false) : (current = true);
      console.log(current);
    }
    arrList.push(current);
    console.log(arrList);
  }
}
