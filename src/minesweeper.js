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
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

if (board[randomRowIndex][randomColumnIndex] !== 'B') {
  board[randomRowIndex][randomColumnIndex] = 'B';
  numberofBombsPlaced++
}

}
  return board;

}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  let neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex <= numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });

return numberOfBombs;

};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {

if (playerBoard[rowIndex][columnIndex] !== ' ') {
  let flippedMessage = "This tile has already been flipped!";
  return flippedMessage;
} else if (bombBoard[rowIndex][columnIndex] === 'B') {
   playerBoard[rowIndex][columnIndex] = 'B';
} else {
  playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
}

}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'))
}

let playerBoard = generatedPlayerBoard(3, 4)
let bombBoard = generatedBombBoard(3, 2, 4)

console.log("Player board: "+ printBoard(playerBoard))
console.log("Bomb board: "+ printBoard(bombBoard))

flipTile(playerBoard, bombBoard, 0, 0);

console.log("Updated Player Board");

printBoard(playerBoard);
