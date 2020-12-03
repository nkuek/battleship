let initialized = false;
class Board {
  constructor(numRos, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    this.numRos = numRos;
    this.numCols = numCols;
    this.numShips = numShips;
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.grid = this.populateGrid(); //this?
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.

    if (initialized === true) return
    const grid = [];
      for (let row = 0; row < this.numRos; row++) {
        grid.push(Array(this.numCols).fill(null))
      }

    let count = this.numShips;
    while (count > 0) {
      const randomRow = Math.floor(Math.random() * this.numRos);
      const randomCol = Math.floor(Math.random() * this.numCols);
      if (grid[randomRow][randomCol] === null) {
        grid[randomRow][randomCol] = 's'
        count--
      }
      initialized = true
    }
    return grid
  }

//   createGrid(numRows, numCols) {
//     let result = []
//     for (let row = 0; row < numRows; row++) {
//         let subArr = []
//         for (let col = 0; col < numCols; col++) {
//             subArr.push(null)
//         }
//         result.push(subArr)
//     }

//     return result
// }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    console.table(this.grid)
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    return this.numShips;
  }

  isValidMove([row, col]) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    if (!this.grid[row-1] || !this.grid[row-1][col-1]) return false
    return this.grid[row - 1][col - 1] !== 'x' && this.grid[row - 1][col - 1] !== 'h'
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
    return this.numShips === 0
  }

  attack([row, col]) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    if (this.grid[row-1][col-1] === 's') {
      this.grid[row-1][col-1] = 'h';
      this.numShips--;
    } else {
      this.grid[row-1][col-1] = 'x';
    }
  }
}

// const test = new Board(3, 3, 3)
// console.table(test.grid)
// test.attack([2, 3])
// test.display()
// test.display()
// test.display()

module.exports = Board;