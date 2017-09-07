class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game



    this.setUpBoard();
    this.populateBoard();
  }

  setUpBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }

  populateBoard() {
    const image = '<img src=assets/images/rex.svg width="35px" >';
    const $tile = this.$el.find("li");
    $tile.append(image).addClass("icon")
  }

  render() {
    const $field = this.$el.find("ul");
      $field.removeClass();
  }

}

export default View;
