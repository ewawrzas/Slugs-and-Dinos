import Board from './board.js'

class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.$clickedCreature = null;
    // this.board = board;

    this.makeSwap = this.makeSwap.bind(this);
    this.populateBoard = this.populateBoard.bind(this);

    // this.$el.on(
    //   "click",
    //   "li",
    //   this.clickCreature.bind(this)
    // );

    this.setUpBoard();
    // this.populateBoard();
    this.bindEvents();
    this.play();
  }

  play() {
    $("#start").click(() => {
      this.populateBoard();
    })
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $clickedCreature = $(event.currentTarget);
      // if (this.$clickedCreature === null) {
      //   this.$clickedCreature = $clickedCreature;
      // } else {
      //   this.$clickedCreature = null;
      // }
      debugger
      const pos = $clickedCreature.data('pos');
      const image = $clickedCreature.html();

      if (image) {
        this.makeSwap(image, $clickedCreature)
      }

      console.log(image)
    }))
  }

  makeSwap(image, element) {
    this.$el.on("click", "li", (event => {
      const $swapCreature = $(event.currentTarget);
      const swapImage = $swapCreature.html();
      debugger
      element.html(swapImage)
      $swapCreature.html(image)
      debugger
      element = null;
      image = null;
    }))
  }

  // clickCreature(event) {
  //   debugger
  //   const $clickedCreature = $(event.currentTarget);
  //
  //   if (this.fromCreature === null) {
  //     this.fromCreature = $clickedCreature;
  //   }
  //   debugger
  //   // this.fromCreatureIdx = null;
  //   this.render();
  //
  // }


  // bindEvents() {
  //   this.$el.on("click", "li", ( event => {
  //     const $clickedCreature = $(event.currentTarget);
  //     const pos = $clickedCreature.data('pos');
  //
  //     const deltas = [
  //       [-1, 0],
  //       [0, -1],
  //       [0, 1],
  //       [1, 0],
  //       [-1, -1],
  //       [-1, 1],
  //       [1, -1],
  //       [1, 1]
  //     ]
  //
  //     let possibleTargets = []
  //
  //     deltas.forEach((delta) => {
  //       return possibleTargets.push([pos[0] + delta[0], pos[1] + delta[1]])
  //     })
  //
  //
  //     // const $dropTarget = $('.icon-wrapper').find('[data-pos="[1, 0]"]')
  //     console.log(possibleTargets)
  //
  //     possibleTargets.forEach((pos) => {
  //       this.game.playMove(pos)
  //     })
      //
      //
      // // console.log($dropTarget)
      //
      // // $clickedCreature.attr({
      // //   draggable: true,
      // //   ondrag: console.log('help')
      // // });
      // debugger
      // // $clickedCreature.attr('ondrag', console.log('help'))
      // // // console.log($clickedCreature)
      // $clickedCreature.append("drag me")
      // // $dropTarget.append("drop here")
      // console.log($dropTarget)
  //   }))
  // }



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
    $("ul li").each( function(index) { $(this).append(`<img src=assets/images/${images[(index + Math.floor(Math.random() * 5)) % 5]} height="54px" >`)}).addClass('icon');
  }



  render() {
    const $field = this.$el.find("ul");
      $field.removeClass();
      debugger
  }

  if ($fromCreature) {
    debugger
    $field.eq($fromCreature).addClass("selected");
  }




}

export default View;
