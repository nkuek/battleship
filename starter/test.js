let test = (numRos, numCols) => {
    const grid = [];
        for (let row = 0; row < numRos; row++) {
            grid.push(Array(numCols).fill(null))
          }
    let count = this.numShips;
    while (count > 0) {
        const randomRow = Math.floor(Math.random() * numRos);
        const randomCol = Math.floor(Math.random() * numCols);
        if (grid[randomRow][randomCol] === null) {
        grid[randomRow][randomCol] = 's'
        count--
        }
    }
    return grid
}

console.log(test(3, 3))