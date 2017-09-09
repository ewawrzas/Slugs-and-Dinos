import Board from './board.js'

class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.$clickedCreature = null;
    // this.board = board;

    this.makeSwap = this.makeSwap.bind(this);
    this.populateBoard = this.populateBoard.bind(this);
    // this.allowDrop = this.allowDrop.bind(this);
    // this.drop = this.drop.bind(this);
    // this.drag = this.drag.bind(this);
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
  //
  // allowDrop(e) {
  //   e.preventDefault();
  // }
  //
  // drag(e) {
  //   e.dataTransfer.setData("img", e.target.innerHTML);
  //   console.log(e.target)
  // }
  //
  // drop(e) {
  //   e.preventDefault();
  //   const data = e.dataTransfer.getData("img");
  //   e.target.appendChild
  // }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $clickedCreature = $(event.currentTarget);

      const clickedCreatureIdx = $clickedCreature.index()
      console.log(clickedCreatureIdx)

       const deltas = [-9, -8, -7, -1, 1, 7, 8, 9]

          let possibleTargets = []

          deltas.forEach((delta) => {
            return possibleTargets.push(clickedCreatureIdx + delta)
          })

          console.log(possibleTargets)

          possibleTargets.forEach( function (index) {

              return $( `ul.group li:eq(${index})`).css("background-color", "red");
          })


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


  setUpBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);
        $li.attr({
            droppable: true,
            // ondrop: 'drop(event)',
            // ondragover: 'allowDrop(event)'
          })
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }

  populateBoard() {
    const images = ['bluedino.png', 'slug.png', 'slug1.png', 'dino2.png', 'rex.svg'];
    const image = images[Math.floor(Math.random() * images.length)]
    const $tile = this.$el.find("li");
    $("ul li").each( function(index) { $(this).append(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(index + Math.floor(Math.random() * 5)) % 5]} height="54px" >`)}).addClass('icon')


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
