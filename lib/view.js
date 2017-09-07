class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game
    this.fromCreatureIdx = null;

    this.$el.on(
      "click",
      "ul",
      this.clickCreature.bind(this)
    );

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
    const images = ['bluedino.png', 'slug.png', 'slug1.png', 'dino2.png', 'rex.svg'];
    const image = images[Math.floor(Math.random() * images.length)]
    const $tile = this.$el.find("li");
    $("ul li").each( function(index) { $(this).append(`<img src=assets/images/${images[(index + Math.floor(Math.random() * 5)) % 5]} height="56px" >`)}).addClass('icon');
  }

  clickCreature(event) {
    const creatureIdx = $(event.currentTarget).index();

    if (this.fromCreatureIdx === null) {
      this.fromCreatureIdx = creatureIdx
    }

    this.fromCreatureIdx = null;
    this.render();

  }

  render() {
    const $field = this.$el.find("ul");
      $field.removeClass();
  }

  if (this.fromCreatureIdx) {
    $field.eq(this.fromCreatureIdx).addClass("selected");
  }




}

export default View;
