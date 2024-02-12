/* Description */

// Task

// You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
// Rules

// 1. There are always exactly three reels

// 2. Each reel has 10 different items.

// 3. The three reel inputs may be different.

// 4. The spin array represents the index of where the reels finish.

// 5. The three spin inputs may be different

// 6. Three of the same is worth more than two of the same

// 7. Two of the same plus one "Wild" is double the score.

// 8. No matching items returns 0.
// Scoring

// Item
// Three of the same
// Two of the same
// Two of the same plus one Wild
// Wild
// 100
// 10
// N/A
// Star
// 90
// 9
// 18
// Bell
// 80
// 8
// 16
// Shell
// 70
// 7
// 14
// Seven
// 60
// 6
// 12
// Cherry
// 50
// 5
// 10
// Bar
// 40
// 4
// 8
// King
// 30
// 3
// 6
// Queen
// 20
// 2
// 4
// Jack
// 10
// 1
// 2

// Returns

// Return an integer of the score.
// Example

// Initialise

// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// spin = [5,5,5];
// result = fruit([reel1,reel2,reel3],spin);
// Scoring

// reel1[5] == "Cherry"
// reel2[5] == "Cherry"
// reel3[5] == "Cherry"

// Cherry + Cherry + Cherry == 50
// Return

// result == 50

/* Solution */

// Plan
//      scoring:
//              - three       two         two + wild
//                10 * x       x              2x
//              - object with the value of x and item
//              - check for 3 of the same,
//              - check for two of the same
//              - check for presence of Wild,
//                          - after checking
//                          - look up points value and formulae about what to do with value

let reels = [
  [
    "Wild",
    "Star",
    "Bell",
    "Shell",
    "Seven",
    "Cherry",
    "Bar",
    "King",
    "Queen",
    "Jack",
  ],
  [
    "Wild",
    "Star",
    "Bell",
    "Shell",
    "Seven",
    "Cherry",
    "Bar",
    "King",
    "Queen",
    "Jack",
  ],
  [
    "Wild",
    "Star",
    "Bell",
    "Shell",
    "Seven",
    "Cherry",
    "Bar",
    "King",
    "Queen",
    "Jack",
  ],
];

let spins = [0, 0, 0];

function fruit(reels, spins) {
  // Code here
  console.log(reels, spins);
  let fruitValue = {
    Wild: 10,
    Star: 9,
    Bell: 8,
    Shell: 7,
    Seven: 6,
    Cherry: 5,
    Bar: 4,
    King: 3,
    Queen: 2,
    Jack: 1,
  };
  //   console.log(fruitValue)
  //   console.log(fruitValue.Bell)

  let spin1 = spins[0];
  let spin2 = spins[1];
  let spin3 = spins[2];

  console.log(spins);
  console.log(spin1, spin2, spin3);
}
