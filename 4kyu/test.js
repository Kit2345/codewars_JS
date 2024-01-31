piecesPositionList = [
  "C_Yellow",
  "E_Red",
  "G_Yellow",
  "B_Red",
  "D_Yellow",
  "B_Red",
  "B_Yellow",
  "G_Red",
  "C_Yellow",
  "C_Red",
  "D_Yellow",
  "F_Red",
  "E_Yellow",
  "A_Red",
  "A_Yellow",
  "G_Red",
  "A_Yellow",
  "F_Red",
  "F_Yellow",
  "D_Red",
  "B_Yellow",
  "E_Red",
  "D_Yellow",
  "A_Red",
  "G_Yellow",
  "D_Red",
  "D_Yellow",
  "C_Red",
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
      console.log(
        "i:",
        i,
        "letter:",
        letter,
        "board:",
        gameBoardState,
        "row:",
        lastElement
      );
      console.log("checking if game won");

      // row:
      for (let j = 0; j <= 3; j++) {
        let rowCheck = [];
        for (let k = 0; k <= 3; k++) {
          if (gameBoardState[colNum][j + k] == undefined) {
            //             console.log("undefined");
            break;
          }
          let sum = j + k;
          //           console.log("sum", sum)
          rowCheck.push(gameBoardState[colNum][sum]);
          //           console.log("current row:", rowCheck)

          if (k > 0) {
            if (rowCheck[k] !== rowCheck[k - 1]) {
              //               console.log("k doesnt equal");
              //   console.log(checkPieces[k]);
              //   console.log(checkPieces[k - 1]);
              break;
            }
          }
          if (k === 3 && rowCheck[2] === rowCheck[3]) {
            //      console.log("winner is:", rowCheck[3]);
            return rowCheck[3];
          }
        }
      }

      // Column
      //       let columnCheck = [];
      for (let j = 1; j <= 3; j++) {
        //         console.log("column check");

        if (gameBoardState[colNum].length < 4) {
          //           console.log("column has less than 4 pieces");
          break;
        }

        //         console.log("column has 4 pieces or more")
        //         columnCheck.push(gameBoardState[letter][lastElement - j]);
        //         console.log(columnCheck);
        if (
          gameBoardState[colNum][lastElement - j] !==
          gameBoardState[colNum][lastElement]
        ) {
          break;
        }
        return gameBoardState[colNum][lastElement];
      }

      // diagonal up:
      console.log("checking diagonal up");
      if (colNum === 0 && lastElement <= 2) {
        console.log("last element <=2");
        let checkUp = [];
        for (let j = lastElement + 1; j <= 3; j++) {
          console.log("current", gameBoardState[colNum + j][lastElement + j]);
          if (
            gameBoardState[colNum][lastElement] !=
            gameBoardState[colNum + j][lastElement + j]
          ) {
            console.log(
              "no match",
              gameBoardState[colNum][lastElement],
              gameBoardState[colNum + j][lastElement + j]
            );
            break;
          }

          if (gameBoardState[colNum + j][lastElement + j] == undefined) {
            console.log("undefined");
            break;
          }
          checkUp.push(gameBoardState[colNum + j][lastElement + j]);
          console.log("checkup", checkUp);
        }
        console.log("winner");
        return gameBoardState[colNum][lastElement];
      }
    }
  }
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
