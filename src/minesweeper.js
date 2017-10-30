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

if (board[randomRowIndex][randomColIndex] !== 'B') {
  board[randomRowIndex][randomColIndex] === 'B';
  numberofBombsPlaced++
}

}
  return board;

}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'))
}

let playerBoard = generatedPlayerBoard(3, 4)
let bombBoard = generatedBombBoard(3, 2, 4)

console.log("Player board: " + printBoard(playerBoard));
console.log("Bomb board: " + printBoard(bombBoard));
