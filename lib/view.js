class View {
  constructor($el) {
    this.$el = $el;

    this.findTargets = this.findTargets.bind(this);
    this.findMatches = this.findMatches.bind(this);

    this.populateBoard = this.populateBoard.bind(this);
    this.checkMatches = this.checkMatches.bind(this);

    this.timer = this.timer.bind(this);
    this.checkHorizontals = this.checkHorizontals.bind(this);
    this.setUpBoard();

    this.play();
  }

  play() {
    $(".start").click(() => {
      $('.start').hide();
      $("#instructions").hide();
      $('.restart').show();
      this.populateBoard();
      this.timer();
    })
  }

  timer() {
    let elem = document.getElementById("bar");
    let width = 100;
    let id = setInterval(frame, 500);
    function frame() {
        if (width <= 0) {
            clearInterval(id);
            $('.gameboard').hide();
            $('.control-panel-column').hide();
          $('.gamescreen').html(`<div class=loser-screen'><button class='newGame' type='button' onclick='location.reload();'name='button'>New Game</button> <img src='assets/images/sad.png' width='500px'></div>`)
          const $button = $("<button>");
          $button.addClass("newGame");
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

  checkInside() {

    for (let idx = 0; idx < 64; idx++) {
      const borderIndicies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 57, 58, 59, 60, 61, 62, 63]
      if (borderIndicies.includes(idx)) {
        continue;
      }
      const $clickedCreature = $(`ul.group li:eq(${idx})`)


      this.findTargets($clickedCreature);
    }
  }

  checkHorizontals() {
      const horizontalIndicies = [0, 1, 2, 3, 4, 5, 56, 57, 58, 59, 60, 61]

      horizontalIndicies.forEach((idx) => {
        const $currentCreature = $(`ul.group li:eq(${idx})`)
        const $firstCheck = $(`ul.group li:eq(${idx+1})`)
        const $secondCheck = $(`ul.group li:eq(${idx+2})`)

        if ($currentCreature.html() === $firstCheck.html() && $currentCreature.html() === $secondCheck.html()) {
          $currentCreature.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/bluedino.png height="54px" >`);
          $firstCheck.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/slug.png height="54px" >`);
          $secondCheck.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/dino2.png height="54px" >`);
        }
      })
      return this.checkVerticals();
  }

checkVerticals () {
  const verticalIndicies = [0, 8, 16, 24, 32, 40, 15, 23, 31, 39, 47]

    verticalIndicies.forEach((idx) => {
      const $currentCreature = $(`ul.group li:eq(${idx})`)
      const $firstCheck = $(`ul.group li:eq(${idx+8})`)
      const $secondCheck = $(`ul.group li:eq(${idx+16})`)

      if ($currentCreature.html() === $firstCheck.html() && $currentCreature.html() === $secondCheck.html()) {
        const images = ['dino2.png', 'rex.png', 'bluedino.png', 'slug1.png', 'slug.png'];
        // const newHTML = `<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]} height="54px" >`
        $currentCreature.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/dino2.png height="54px" >`);
        $firstCheck.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/slug1.png height="54px" >`);
        $secondCheck.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/rex.png height="54px" >`);
      }
    })
    return this.checkInside();
  }

  findTargets($clickedCreature) {
    const clickedCreatureIdx = $clickedCreature.index();
    const deltas = [-9, -8, -7, -1, 1, 7, 8, 9];

    let possibleTargets = []

    deltas.forEach((delta) => {
      return possibleTargets.push(clickedCreatureIdx + delta)
    });

    console.log(possibleTargets)
    return this.findMatches(possibleTargets, $clickedCreature);
  }


  findMatches(possibleTargets, $clickedCreature) {
    const matches = []
    possibleTargets.forEach( function (index) {

      if ($clickedCreature.html() === $(`ul.group li:eq(${index})`).html()) {
        // $( `ul.group li:eq(${index})`).css("background-color", "red");
        matches.push($( `ul.group li:eq(${index})`));
        // matches.push(index);
        console.log(matches)
        console.log($(matches))
        // return matches
      }
    })
    if (matches.length > 0) {
      this.checkMatches(matches, $clickedCreature)
      return true
    } else {
      return false
    }

  }


  checkMatches(matches, $clickedCreature) {
    matches.forEach( function (match) {
      const diff = $clickedCreature.index() - $(match).index();
      const possibleThirdIdx = $(match).index() - diff;
      const possibleThird = ($(`ul.group li:eq(${possibleThirdIdx})`));
      if ($(match).html() === $(possibleThird).html()) {
        const images = ['dino2.png', 'rex.png', 'slug.png', 'slug1.png', 'bluedino.png'];
        const newHTML = `<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]} height="54px" >`
        possibleThird.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]} height="54px" >`);
        $(match).html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]} height="54px" >`);
        $clickedCreature.html("").html(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]} height="54px" >`);
      }
    })
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
    const images = ['bluedino.png', 'slug.png', 'slug1.png', 'rex.png', 'dino2.png'];
    $("ul li").each( function(index) { $(this).append(`<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(index + Math.floor(Math.random() * 6)) % 5]} height="54px" >`)}).addClass('icon');
    this.checkHorizontals();
  }


}

export default View;
