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
    const images = ['bluedino.png', 'slug.png', 'slug1.png', 'dino2.png'];
    const image = images[Math.floor(Math.random() * images.length)]
    const $tile = this.$el.find("li");
    // $tile.append(`<img src=assets/images/${image} height="56px" >`).addClass("icon")
    $("ul li").each( function(index) { $(this).append(`<img src=assets/images/${images[(index + Math.floor(Math.random() * 5)) % 4]} height="56px" >`)})

  }

  render() {
    const $field = this.$el.find("ul");
      $field.removeClass();
  }

}

export default View;
