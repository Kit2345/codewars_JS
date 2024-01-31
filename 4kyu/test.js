function whoIsWinner(piecesPositionList) {
  // Game board
  let gameBoardState = {
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

    gameBoardState[letter].push(colourPlayed);
    const lastElement = gameBoardState[letter].length - 1;
    //         console.log("current:", piecesPositionList[i] )
    //         console.log(`i: ${i}, letter:${letter}, colour:, ${colourPlayed}`)
    //         console.log("gameboard for letter", letter,":", gameBoardState[letter])
    //         console.log("last colour in column", letter, ":", gameBoardState[letter][lastElement])
    //       console.log("number of elements in array", letter,":", gameBoardState[letter].length)
    // co-ordinates of last played piece is: gameBoardState[letter][lastElement]

    if (i >= 6) {
      console.log("i:", i, "letter:", letter, "board:", gameBoardState);
      console.log("checking if game won");

      // row:
      for (let j = 0; j <= 3; j++) {
        let rowCheck = [];
        for (let k = 0; k <= 3; k++) {
          if (gameBoardState[letter][j + k] == undefined) {
            //             console.log("undefined");
            break;
          }
          let sum = j + k;
          //           console.log("sum", sum)
          rowCheck.push(gameBoardState[letter][sum]);
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

        if (gameBoardState[letter].length < 4) {
          //           console.log("column has less than 4 pieces");
          break;
        }

        //         console.log("column has 4 pieces or more")
        //         columnCheck.push(gameBoardState[letter][lastElement - j]);
        //         console.log(columnCheck);
        if (
          gameBoardState[letter][lastElement - j] !==
          gameBoardState[letter][lastElement]
        ) {
          break;
        }
        return gameBoardState[letter][lastElement];
      }

      // diagonal left:
      console.log("checking diagonal left");
      if (letter === "A") {
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
