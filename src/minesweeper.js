// Generate the dynamic player board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let loopRows = 0; loopRows < numberOfRows; loopRows++) {
    let row = [];
    for (let loopColumns = 0; loopColumns < numberOfColumns; loopColumns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

// Generate dynamic bomb board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let loopRows = 0; loopRows < numberOfRows; loopRows++) {
    let row = [];
    for (let loopColumns = 0; loopColumns < numberOfColumns; loopColumns++) {
      row.push(null);
    }
    board.push(row);
  }

// Generate random bombs
let numberOfBombsPlaced = 0;
while (numberOfBombsPlaced < numberOfBombs) {
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  board[randomRowIndex][randomColumnIndex] = 'B';
  numberOfBombsPlaced++;
  // Duplicating bombs on the same location will be fixed later in Control Flow lesson
}
  return board;
}

// Optimize layout of the board
const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

// Create boards to test code
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
