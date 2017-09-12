class Board {
  constructor() {
    this.grid = Board.setUpGrid();
  }

  static setUpGrid() {
    const grid = [];
    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      grid.push([]);
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        grid[rowIdx].push(null);
      }
    }
    return grid;
  }



}

export default Board;
