import Board from './board.js'

class Game {
  constructor() {
    this.board = new Board();
  }

  playMove(pos) {
    this.board.makeMark(pos)
  }
  
}

export default Game;
