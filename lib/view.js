class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game

    this.setUpBoard();
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

}

export default View;