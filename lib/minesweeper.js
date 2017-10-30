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
    var randomColIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColIndex] !== 'B') {
      board[randomRowIndex][randomColIndex] === 'B';
      numberofBombsPlaced++;
    }
  }
  return board;
};

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatedPlayerBoard(3, 4);
var bombBoard = generatedBombBoard(3, 2, 4);

console.log("Player board: " + printBoard(playerBoard));
console.log("Bomb board: " + printBoard(bombBoard));