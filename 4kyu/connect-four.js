piecesPositionList = [
  "B_Red",
  "D_Yellow",
  "G_Red",
  "D_Yellow",
  "E_Red",
  "F_Yellow",
  "C_Red",
  "G_Yellow",
  "A_Red",
  "A_Yellow",
  "D_Red",
  "E_Yellow",
  "A_Red",
  "A_Yellow",
  "D_Red",
  "A_Yellow",
  "B_Red",
  "D_Yellow",
  "G_Red",
  "C_Yellow",
  "E_Red",
  "G_Yellow",
  "B_Red",
  "B_Yellow",
  "G_Red",
  "C_Yellow",
  "C_Red",
  "E_Yellow",
  "D_Red",
];

function whoIsWinner(piecesPositionList) {
  // Game board
  let gameBoardState = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };

  function whatNum(letter) {
    switch (letter) {
      case "A":
        return 0;
      case "B":
        return 1;
      case "C":
        return 2;
      case "D":
        return 3;
      case "E":
        return 4;
      case "F":
        return 5;
      case "G":
        return 6;
    }
  }

  // Add all pieces to board
  for (let i = 0; i < piecesPositionList.length; i++) {
    const array = piecesPositionList[i].split("_");
    const letter = array[0];
    const colNum = whatNum(letter);
    const colourPlayed = array[1];
    // console.log(letter, colNum);
    // console.log(typeof colNum);

    gameBoardState[colNum].push(colourPlayed);
    const lastElement = gameBoardState[colNum].length - 1;
    //         console.log("current:", piecesPositionList[i] )
    //         console.log(`i: ${i}, letter:${letter}, colour:, ${colourPlayed}`)
    //         console.log("gameboard for letter", letter,":", gameBoardState[letter])
    //         console.log("last colour in column", letter, ":", gameBoardState[letter][lastElement])
    //       console.log("number of elements in array", letter,":", gameBoardState[letter].length)
    // co-ordinates of last played piece is: gameBoardState[letter][lastElement]

    if (i >= 6) {
      //   console.log(
      //     "i:",
      //     i,
      //     "letter:",
      //     letter,
      //     "board:",
      //     gameBoardState,
      //     "row:",
      //     lastElement
      //   );
      //   console.log("checking if game won");

      // row

      // take all of the row into a variable
      let rowCheck = [];
      for (let j = 0; j <= 6; j++) {
        rowCheck.push(gameBoardState[j][lastElement]);
      }

      //   console.log("current row check", rowCheck);

      for (let j = 0; j < rowCheck.length; j++) {
        for (let k = 0; k <= 3; k++) {
          if (rowCheck[j + k] == undefined) {
            // console.log(k, "break");
            break;
          }
          if (rowCheck[j] != rowCheck[j + k]) {
            // console.log(k, rowCheck[j], "!=", rowCheck[j + k]);
            break;
          }
          if (k === 3 && rowCheck[j] == rowCheck[j + k]) {
            console.log("winner:", rowCheck[j]);
            return rowCheck[j];
          }
        }
      }

      // Column
      //       let columnCheck = [];
      for (let j = lastElement; j > lastElement - 4; j--) {
        // console.log("column check");
        // console.log("current col check", j, gameBoardState[colNum]);

        if (gameBoardState[colNum].length < 4) {
          //           console.log("column has less than 4 pieces");
          break;
        }

        if (gameBoardState[colNum][lastElement] != gameBoardState[colNum][j]) {
          break;
        }

        if (
          j === lastElement - 3 &&
          gameBoardState[colNum][lastElement] == gameBoardState[colNum][j]
        ) {
          console.log("winner:", gameBoardState[colNum][lastElement]);
          return gameBoardState[colNum][lastElement];
        }
      }

      // diagonal up:
      //   console.log("checking diagonal up");

      //   finding starting co-ordinates:
      let startingRow = lastElement;
      let startingCol = colNum;

      while (startingRow > 0 && startingCol > 0) {
        startingCol--;
        startingRow--;
        // console.log("starting col:", startingCol, "starting row:", startingRow);
      }

      // now add all colours diagonally right up from starting position:
      let currentCol = startingCol;
      let currentRow = startingRow;
      let diagUpCheck = [];

      while (currentCol <= 6 && currentRow <= 5) {
        diagUpCheck.push(gameBoardState[currentCol][currentRow]);
        currentCol++;
        currentRow++;
      }

      //   console.log("diagUpCheck", diagUpCheck);
      for (let j = 0; j < diagUpCheck.length; j++) {
        for (let k = 0; k <= 3; k++) {
          if (diagUpCheck[k] == undefined) {
            // console.log("j", j, "k:", k, "undefined, loop exit");
            break;
          }
          if (diagUpCheck[k] != diagUpCheck[j]) {
            // console.log("j", j, "k:", k, diagUpCheck[k], "!=", diagUpCheck[j]);
            break;
          }
          if (k === 3 && diagUpCheck[k] == diagUpCheck[j]) {
            console.log("winner:", diagUpCheck[j]);
            return diagUpCheck[j];
          }
        }
      }

      // diagonal down
      //   finding starting co-ordinates:
      console.log("checking diagonal down");
      let startRowDown = lastElement;
      let startColDown = colNum;

      while (startRowDown > 0 && startColDown < 6) {
        startColDown++;
        startRowDown--;
        // console.log(
        //   "starting col:",
        //   startColDown,
        //   "starting row:",
        //   startRowDown
        // );
      }
      // now add all colours diagonally left up from starting position:
      let currentColDown = startColDown;
      let currentRowDown = startRowDown;
      let diagDownCheck = [];

      //   console.log(currentColDown, currentRowDown);

      while (currentColDown >= 0 && currentRowDown <= 5) {
        diagDownCheck.push(gameBoardState[currentColDown][currentRowDown]);
        currentColDown--;
        currentRowDown++;
        // console.log(diagDownCheck);
      }

      console.log("i", i, diagDownCheck);

      for (let j = 0; j < diagDownCheck.length; j++) {
        for (let k = 0; k <= 3; k++) {
          if (diagDownCheck[k + j] == undefined) {
            console.log("undefined, loop exit");
            break;
          }
          if (k > 0 && diagDownCheck[k + j] != diagDownCheck[j + k - 1]) {
            console.log(
              "down check",
              "j",
              j,
              "k:",
              k,
              diagDownCheck[j + k],
              "!=",
              diagDownCheck[j + k - 1]
            );
            break;
          }
          if (k === 3 && diagDownCheck[k + j] == diagDownCheck[j]) {
            console.log("winner:", diagDownCheck[j]);
            return diagDownCheck[j];
          }
        }
      }
    }
  }
  console.log(gameBoardState);
  console.log("Draw");
  return "Draw";
}

// Plan
// Steps:
//      Play a piece.
//      Location of piece
//      Check piece to see if it is a winning move
//              - row
//              - column
//              - diagonal up
//              - diagonal down

whoIsWinner(piecesPositionList);
