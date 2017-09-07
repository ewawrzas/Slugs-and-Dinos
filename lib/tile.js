class Tile {
  constructor(pos, image) {
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];

    this.image = image;
  }
}

export default Tile;
