class Board {
  constructor() {
    this.grid = Board.setUpGrid();
  }

  static setUpGrid() {
    const grid = [];
    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      grid.push([]);
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        grid[colIdx] = new Array(8);
      }
    }
    return grid;
  }


}

export default Board;
