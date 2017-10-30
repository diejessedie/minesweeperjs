const generatedPlayerBoard = (numberOfRows, numberOfColumns) => {

  let board = [];
  for (let row = 0; row < numberOfRows; row++) {
    let row = [];
     for (let column = 0; column < numberOfColumns; column++) {
       row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const generatedBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

  let board = []
  for (let row = 0; row < numberOfRows; row++) {
    let row = []
     for (let column = 0; column < numberOfColumns; column++) {
       row.push(null);
    }
    board.push(row);
  }
let numberofBombsPlaced = 0;
while(numberofBombsPlaced < numberOfBombs){

  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColIndex = Math.floor(Math.random() * numberOfColumns);
  board[randomRowIndex][randomColIndex] = 'B';
  numberofBombsPlaced++
  //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
}

  return board;

}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'))
}

let playerBoard = generatedPlayerBoard(3, 4)
let bombBoard = generatedBombBoard(3, 2, 4)

console.log("Player board: " + printBoard(playerBoard));
console.log("Bomb board: " + printBoard(bombBoard));
