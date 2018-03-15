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
  if (board[randomRowIndex][randomColumnIndex] !== 'B') {
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
}
  return board;
}

// Function to get the number of neighbouring bombs
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, +1],
    [+1, -1],
    [+1, 0],
    [+1, +1]
  ];

  // Check the dimensions of the board
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && 
      neighborRowIndex < numberOfRows && 
      neighborColumnIndex >= 0 &&
      neighborColumnIndex < numberOfColumns)
      {
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') 
        {
          numberOfBombs++;
        }
      }
  });
  return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    // Place bomb on the player board
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
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

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated player board:');
printBoard(playerBoard);