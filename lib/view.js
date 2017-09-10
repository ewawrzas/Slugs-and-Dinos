import Board from './board.js'
import { dragstart_handler, dragover_handler, drop_handler } from './tile.js';


class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.$clickedCreature = null;
    // this.board = board;
    this.findTargets = this.findTargets.bind(this);
    this.findMatches = this.findMatches.bind(this);

    this.populateBoard = this.populateBoard.bind(this);
    this.checkMatches = this.checkMatches.bind(this);
    this.checkDir = this.checkDir.bind(this);

    this.setUpBoard();
    // this.populateBoard();
    // this.bindEvents();
    this.play();
  }

  play() {
    $("#start").click(() => {
      this.populateBoard();
    })
  }


  bindEvents() {
    for (let idx = 0; idx < 64; idx++) {
      const $clickedCreature = $(`ul.group li:eq(${idx})`)
      // this.checkMatches($clickedCreature);
      this.findTargets($clickedCreature);
    }
  }

  findTargets($clickedCreature) {
    const clickedCreatureIdx = $clickedCreature.index();
    const deltas = [-9, -8, -7, -1, 1, 7, 8, 9];

    let possibleTargets = []

    deltas.forEach((delta) => {
      return possibleTargets.push(clickedCreatureIdx + delta)
    });

    console.log(possibleTargets)
    this.findMatches(possibleTargets, $clickedCreature);
  }


  findMatches(possibleTargets, $clickedCreature) {
    const matches = []
    possibleTargets.forEach( function (index) {
      debugger

      if ($clickedCreature.html() === $(`ul.group li:eq(${index})`).html()) {
        // $( `ul.group li:eq(${index})`).css("background-color", "red");
        matches.push($( `ul.group li:eq(${index})`));
        // matches.push(index);
        console.log(matches)
        console.log($(matches))
        debugger
        return matches
      }
    })
    this.checkMatches(matches, $clickedCreature)
  }



  // checkMatches($clickedCreature) {
    // const clickedCreatureIdx = $clickedCreature.index();
    // const deltas = [-9, -8, -7, -1, 1, 7, 8, 9];
    //
    // let possibleTargets = []
    //
    // deltas.forEach((delta) => {
    //   return possibleTargets.push(clickedCreatureIdx + delta)
    // });
    //
    // console.log(possibleTargets)

    // const matches = []
    // possibleTargets.forEach( function (index) {
    //   debugger
    //
    //   if ($clickedCreature.html() === $(`ul.group li:eq(${index})`).html()) {
    //     // $( `ul.group li:eq(${index})`).css("background-color", "red");
    //     matches.push($( `ul.group li:eq(${index})`));
    //     // matches.push(index);
    //     console.log(matches)
    //     console.log($(matches))
    //     debugger
    //     return matches
    //   }
    //
    // })
    checkMatches(matches, $clickedCreature) {
    matches.forEach( function (match) {
      debugger
      const diff = $clickedCreature.index() - $(match).index();
      const possibleThirdIdx = $(match).index() - diff;
      const possibleThird = ($(`ul.group li:eq(${possibleThirdIdx})`));
      debugger
      if ($(match).html() === $(possibleThird).html()) {
        const images = ['bluedino.png', 'slug.png', 'slug1.png', 'dino2.png', 'rex.svg'];
        const matchThree = [$(match), $clickedCreature, possibleThird];
        matchThree.forEach( function (element) {
          debugger
          element.html("").append(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]} height="54px" >`);
        })
      }
    })

  }


  checkDir(match, clickedCreature) {
    const diff = clickedCreature.index() - match.index();
    const possibleThirdIdx = match.index() - diff;
    debugger
    const possibleThird = ($(`ul.group li:eq(${possibleThirdIdx}`));
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
    debugger
    const image = images[Math.floor(Math.random() * images.length)]
    // const handlers = ''
    debugger
    // $("ul li").each( function(index) { $(this).append(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/image} height="54px" >`)}).addClass('icon');
    $("ul li").each( function(index) { $(this).append(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(index + Math.floor(Math.random() * 6)) % 5]} height="54px" >`)}).addClass('icon');
    this.bindEvents();
  }

}

export default View;
