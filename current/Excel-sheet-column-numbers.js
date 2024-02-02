/* Description */

// Write a function

// titleToNumber(title) or title_to_number(title) or titleToNb title ...

// (depending on the language)

// that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

// Examples:

// titleTonumber('A') === 1
// titleTonumber('Z') === 26
// titleTonumber('AA') === 27

/* Solution */

function titleToNumber(title) {
  let titleArr = [];
  let colNum = 0;

  const alphabetConvertNumObj = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  for (let i = 0; i < title.length; i++) {
    titleArr.unshift(title[i]);
  }

  titleArr.unshift(0);

  for (let i = 1; i < titleArr.length; i++) {
    let letter = titleArr[i];

    let alphaNum = alphabetConvertNumObj[letter];

    colNum += expn(26, i) * alphaNum;
  }

  return colNum;

  function expn(x, n) {
    let num = 0;
    for (let i = 1; i < n; i++) {
      if (i === 1) {
        num = 1;
      }
      num *= 26;
    }
    return num;
  }
}

// Plan
// First column = x (A = 1)
// Second culmn = 26x + x (AA=1x26 + 1)
// Third column = 26x26*x + 26x + x (AAA = 26*26*1 + 1*26 + 1)

//  So first need to reverse the title
//  Need an object to find the letter
