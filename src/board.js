export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(
      numberOfRows,
      numberOfColumns
    );
    this._bombBoard = Board.generateBombBoard(
      numberOfRows,
      numberOfColumns,
      numberOfBombs
    );
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== " ") {
      let flippedMessage = "This tile has already been flipped!";
      return flippedMessage;
    } else if (this._bombBoard[rowIndex][columnIndex] === "B") {
      this._playerBoard[rowIndex][columnIndex] = "B";
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(
        rowIndex,
        columnIndex
      );
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    let neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];

      if (
        neighborRowIndex >= 0 &&
        neighborRowIndex <= this._numberOfRows &&
        neighborColumnIndex >= 0 &&
        neighborColumnIndex <= this._numberOfColumns
      ) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B") {
          this._numberOfBombs++;
        }
      }
    });

    return this._numberOfBombs;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    console.log(this._playerBoard.map(row => row.join(" | ")).join("\n"));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];
    for (let row = 0; row < numberOfRows; row++) {
      let row = [];
      for (let column = 0; column < numberOfColumns; column++) {
        row.push(" ");
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = [];
    for (let row = 0; row < numberOfRows; row++) {
      let row = [];
      for (let column = 0; column < numberOfColumns; column++) {
        row.push(null);
      }
      board.push(row);
    }
    let numberofBombsPlaced = 0;
    while (numberofBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

      if (board[randomRowIndex][randomColumnIndex] !== "B") {
        board[randomRowIndex][randomColumnIndex] = "B";
        numberofBombsPlaced++;
      }
    }
    return board;
  }
}
