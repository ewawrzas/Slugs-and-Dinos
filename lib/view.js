import Board from './board.js'

class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.$clickedCreature = null;
    // this.board = board;

    this.populateBoard = this.populateBoard.bind(this);
    this.checkMatches = this.checkMatches.bind(this);
    this.checkDir = this.checkDir.bind(this);

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

      // const clickedCreatureIdx = $clickedCreature.index()
      // console.log(clickedCreatureIdx)
// debugger

    this.checkMatches($clickedCreature);
      //  const deltas = [-9, -8, -7, -1, 1, 7, 8, 9]
       //
      //     let possibleTargets = []
       //
      //     deltas.forEach((delta) => {
      //       return possibleTargets.push(clickedCreatureIdx + delta)
      //     })
       //
      //     console.log(possibleTargets)
       //
      //     possibleTargets.forEach( function (index) {
      //       debugger
      //       if ($clickedCreature.html() === $(`ul.group li:eq(${index})`).html()) {
      //         const matches = $( `ul.group li:eq(${index})`).css("background-color", "red");
      //         console.log(matches)
      //         return matches;
      //       }
      //     })


    }))
  }

  checkMatches($clickedCreature) {
    const clickedCreatureIdx = $clickedCreature.index();
    const deltas = [-9, -8, -7, -1, 1, 7, 8, 9];

    let possibleTargets = []

    deltas.forEach((delta) => {
      return possibleTargets.push(clickedCreatureIdx + delta)
    });

    console.log(possibleTargets)

    const matches = []
    possibleTargets.forEach( function (index) {
      debugger

      if ($clickedCreature.html() === $(`ul.group li:eq(${index})`).html()) {
        $( `ul.group li:eq(${index})`).css("background-color", "red");
        matches.push($( `ul.group li:eq(${index})`));
        // matches.push(index);
        console.log(matches)
        console.log($(matches))
        debugger
        return matches
      }

    })
    matches.forEach( function (match) {
      debugger
      const diff = $clickedCreature.index() - $(match).index();
      const possibleThirdIdx = $(match).index() - diff;
      const possibleThird = ($(`ul.group li:eq(${possibleThirdIdx})`));
      debugger
      // if ($(match).html())
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
    const image = images[Math.floor(Math.random() * images.length)]
    const $tile = this.$el.find("li");
    $("ul li").each( function(index) { $(this).append(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(index + Math.floor(Math.random() * 5)) % 5]} height="54px" >`)}).addClass('icon')
  }

  // checkMatches() {

    // while some dino's match number is greater than
    // iterate over each dino
    // check surrounding dinos


    // const idxChange = [-9, -8, -7, -1, 1, 7, 8, 9]
    //
    // let possibleTargets = []
    //
    // idxChange.forEach((change) => {
    //   return possibleTargets.push(clickedCreatureIdx + change)
    // })
    //
    // console.log(possibleTargets)
    //
    // possibleTargets.forEach( function (index) {
    //
    //     return $( `ul.group li:eq(${index})`).css("background-color", "red");
    // })

  //   $("ul li").each(function(index) {
  //     const idxChange = [-9, -8, -7, -1, 1, 7, 8, 9];
  //     let possibleTargets = []
  //
  //     // $li.data("counter", current)
  //     // current = 0;
  //
  //     liIdx = $li.index()
  //
  //     idxChange.forEach(function(change) {
  //       return possibleTargets.push( liIdx + change)
  //     })
  //
  //     possibleTargets.forEach(function(target) {
  //       if ($li.html() === $(`ul.group li:eq(${target})`).html()) {
  //         $li.data("counter", current++)
  //       }
  //     })
  //
  //     })
  //
  //
  // }



  // render() {
  //   const $field = this.$el.find("ul");
  //     $field.removeClass();
  //     debugger
  // }
  //
  // if ($fromCreature) {
  //   debugger
  //   $field.eq($fromCreature).addClass("selected");
  // }




}

export default View;
