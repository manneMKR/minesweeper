const printBoard = board => {
  console.log('Current Board:');
  let boardCount;
  for (boardCount = 0; boardCount <= 2; boardCount++) {
      console.log(board[boardCount].join(' | '));
  }
};

let exampleBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


printBoard(exampleBoard);
exampleBoard[0][1] = '1';
exampleBoard[2][2] = 'B';
printBoard(exampleBoard);
