let piecesPositionList = [
  "A_Yellow",
  "B_Red",
  "B_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "C_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "F_Yellow",
  "E_Red",
  "D_Yellow",
];

function whoIsWinner(piecesPositionList) {
  // Game board
  let piecesPlayed = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
  };

  // Add all pieces to board
  for (let i = 0; i < piecesPositionList.length; i++) {
    const array = piecesPositionList[i].split("_");
    const letter = array[0];
    const colourPlayed = array[1];
    piecesPlayed[letter].push(colourPlayed);
    //   console.log(piecesPositionList[i])
    //   console.log(`i: ${i}, letter:${letter}, colour:, ${colourPlayed}`)
    //   console.log(piecesPlayed[letter])
  }

  function checkLetter(check) {
    switch (check) {
      case 0:
        letter = "A";
        break;
      case 1:
        letter = "B";
        break;
      case 2:
        letter = "C";
        break;
      case 3:
        letter = "D";
        break;
      case 4:
        letter = "E";
        break;
      case 5:
        letter = "F";
        break;
      case 6:
        letter = "G";
        break;
    }
    return letter;
  }

  console.log(piecesPlayed);

  // Check to see winner:

  // row
  for (let i = 0; i <= 6; i++) {
    console.log("check row");
    console.log("current row (i)", i);
    let checkPieces = [];
    for (let j = 0; j <= 3; j++) {
      for (let k = 0; k <= 3; k++) {
        let sum = j + k;
        console.log(sum);
        let letter = checkLetter(sum);
        console.log(letter);

        if (piecesPlayed[letter][i] == undefined) {
          console.log("undefined");
          break;
        }
        checkPieces.push(piecesPlayed[letter][i]);
        console.log("checkpieces", checkPieces);

        if (k > 0) {
          if (checkPieces[k] !== checkPieces[k - 1]) {
            console.log("k doesnt equal");
            //   console.log(checkPieces[k]);
            //   console.log(checkPieces[k - 1]);
            break;
          }
        }
        if (k === 3 && checkPieces[2] === checkPieces[3]) {
          console.log("winner is:", checkPieces[3]);
          return checkPieces[3];
        }
      }
    }
  }

  // column
  for (let i = 0; i <= 6; i++) {
    console.log("check column");
    let letter = checkLetter(i);
    console.log(letter);
    for (let j = 0; j <= 2; j++) {
      let checkPieces = [];
      console.log("check:", j);
      for (let k = 0; k <= 3; k++) {
        console.log(piecesPlayed[letter][j + k]);
        if (piecesPlayed[letter][j + k] == undefined) {
          console.log("undefined");
          break;
        }
        checkPieces.push(piecesPlayed[letter][j + k]);

        if (k > 0) {
          if (checkPieces[k] !== checkPieces[k - 1]) {
            console.log("k doesnt equal");
            console.log(checkPieces[k]);
            console.log(checkPieces[k - 1]);
            break;
          }
        }
        if (k === 3 && checkPieces[2] === checkPieces[3]) {
          console.log("winner is:", checkPieces[3]);
          return checkPieces[3];
        }
      }
    }
  }

  // Check Diagonal up:
  // loop 1: row
  // loop 2: letter
  // loop 2: 0-3

  for (let i = 0; i <= 2; i++) {
    console.log("check diagonal up");
    for (let j = 0; j <= 3; j++) {
      let checkPieces = [];
      for (let k = 0; k <= 3; k++) {
        checkLetter(j + k + i);
        console.log(letter);

        if (piecesPlayed[letter][k] == undefined) {
          console.log("undefined");
          break;
        }
        checkPieces.push(piecesPlayed[letter][k]);
        console.log("checkpieces", checkPieces);

        if (k > 0) {
          if (checkPieces[k] !== checkPieces[k - 1]) {
            console.log("k doesnt equal");
            //   console.log(checkPieces[k]);
            //   console.log(checkPieces[k - 1]);
            break;
          }
        }
        if (k === 3 && checkPieces[2] === checkPieces[3]) {
          console.log("winner is:", checkPieces[3]);
          return checkPieces[3];
        }
      }
    }
  }

  // Check Diagonal down:
  // loop 1: row
  // loop 2: letter
  // loop 2: 0-3

  for (let i = 3; i <= 5; i++) {
    console.log("check diagonal down");
    for (let j = 3; j >= 0; j--) {
      console.log("down - j loop");
      let checkPieces = [];
      for (let k = 0; k <= 3; k++) {
        // console.log("down - k loop");
        // checkLetter(j - k + i);
        let sum = i - k + j;
        // console.log(sum);
        checkLetter(sum);
        console.log(letter, k);

        if (piecesPlayed[letter][k] == undefined) {
          console.log("undefined");
          break;
        }
        checkPieces.push(piecesPlayed[letter][k]);
        console.log("checkpieces", checkPieces);

        if (k > 0) {
          if (checkPieces[k] !== checkPieces[k - 1]) {
            console.log("k doesnt equal");
            //   console.log(checkPieces[k]);
            //   console.log(checkPieces[k - 1]);
            break;
          }
        }
        if (k === 3 && checkPieces[2] === checkPieces[3]) {
          console.log("winner is:", checkPieces[3]);
          return checkPieces[3];
        }
      }
    }
  }

  return "Draw";
}

// Plan
// Initialise object
// Loop through pieces played array
//      split element in array to column, and color
// Add pieces played to object
// check if 4 colours are the same in:
//    column
//    row
//    diagonal upwards (left-> right)
//    diagonal downwards (left -> right)

/* Grid: 
    A B C D E F G
  6
  5
  4
  3
  2
  1
  
  Objet to represent grid: {
  A: []
  B: []
  C: []
  etc
  
  }
  
  
  */

whoIsWinner(piecesPositionList);
