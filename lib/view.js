import Board from './board.js'

class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.fromCreatureIdx = null;
    // this.board = board;




    // this.$el.on(
    //   "click",
    //   "li",
    //   this.clickCreature.bind(this)
    // );

    this.setUpBoard();
    this.populateBoard();
    this.bindEvents();
  }




  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $clickedCreature = $(event.currentTarget);
      const pos = $clickedCreature.data('pos');

      const deltas = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
      ]

      let possibleTargets = []

      deltas.forEach((delta) => {
        return possibleTargets.push([pos[0] + delta[0], pos[1] + delta[1]])
      })


      console.log(possibleTargets)

      possibleTargets.forEach((pos) => {
        this.game.playMove(pos)
      })

      // const $dropTarget = $("li.data(pos)").filter(function () {
      //   return $(this).data("pos") === "[1, 0]"
      // });
      // console.log($dropTarget)

      // $clickedCreature.attr({
      //   draggable: true,
      //   ondrag: console.log('help')
      // });
      debugger
      // $clickedCreature.attr('ondrag', console.log('help'))
      // // console.log($clickedCreature)
      $clickedCreature.append("drag me")
      // $dropTarget.append("drop here")
      // console.log($dropTarget)
    }))
  }

  findDropTargets() {}

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

  // clickCreature(event) {
  //   debugger
  //   const creaturePos = $(event.currentTarget).pos;
  //
  //   // if (this.fromCreatureIdx === null) {
  //   //   this.fromCreatureIdx = creatureIdx
  //   // }
  //   // debugger
  //   // // this.fromCreatureIdx = null;
  //   // this.render();
  //
  // }

  render() {
    const $field = this.$el.find("ul");
      $field.removeClass();
      debugger
  }

  if (fromCreatureIdx) {
    $field.eq(fromCreatureIdx).addClass("selected");
  }




}

export default View;
