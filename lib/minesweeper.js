'use strict';

var generatedPlayerBoard = function generatedPlayerBoard(numberOfRows, numberOfColumns) {

  var board = [];
  for (var row = 0; row < numberOfRows; row++) {
    var row = [];
    for (var column = 0; column < numberOfColumns; column++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var generatedBombBoard = function generatedBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {

  var board = [];
  for (var row = 0; row < numberOfRows; row++) {
    var row = [];
    for (var column = 0; column < numberOfColumns; column++) {
      row.push(null);
    }
    board.push(row);
  }
  var numberofBombsPlaced = 0;
  while (numberofBombsPlaced < numberOfBombs) {

    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberofBombsPlaced++;
    }
  }
  return board;
};

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
  var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  var numberOfRows = bombBoard.length;
  var numberOfColumns = bombBoard[0].length;
  var numberOfBombs = 0;

  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset[0];
    var neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex <= numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });

  return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {

  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    var flippedMessage = "This tile has already been flipped!";
    return flippedMessage;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatedPlayerBoard(3, 4);
var bombBoard = generatedBombBoard(3, 2, 4);

console.log("Player board: " + printBoard(playerBoard));
console.log("Bomb board: " + printBoard(bombBoard));

flipTile(playerBoard, bombBoard, 0, 0);

console.log("Updated Player Board");

printBoard(playerBoard);