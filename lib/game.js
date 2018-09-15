function dragstart_handler(ev) {
  $(ev.target).attr("id", "selected");
  const data = event.dataTransfer;

  ev.dataTransfer.setData("text/plain", ev.target.id);
  var img = new Image();

  img.src = 'assets/images/four-expand-arrows.png';
  ev.dataTransfer.setDragImage(img, 10, 10);
  ev.dataTransfer.dropEffect = "move";
}

function dragover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");

  if (!data){
   dragstart_handler(ev);
  }

  const toElement = $(ev.target.parentElement);
  const image = ev.target.src.slice(42);
  const fromElement = $(document.getElementById(data).parentElement)
  makeSwap(toElement, fromElement, image, data)
}

function makeSwap(toElement, fromElement, image, data) {
  toElement.html("").append(document.getElementById(data))
  fromElement.append(`<img draggable="true"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);"
  ondragstart="dragstart_handler(event);"
  src=${image}
  height="54px" >`)
  $(document.getElementById(data)).removeAttr('id')
  checkHorizontals();
}

  function checkHorizontals() {
    const row0 = [0, 1, 2, 3, 4, 5];
    const row1 = [8, 9, 10, 11, 12, 13];
    const row2 = [16, 17, 18, 19, 20, 21];
    const row3 = [24, 25, 26, 27, 28, 29];
    const row4 = [32, 33, 34, 35, 36, 37];
    const row5 = [40, 41, 42, 43, 44, 45];
    const row6 = [48, 49, 50, 51, 52, 53];
    const row7 = [56, 57, 58, 59, 60, 61];
    const horizontalIndicies = row0.concat(row1, row2, row3, row4, row5, row6, row7);

    const matches = []
    horizontalIndicies.forEach((idx) => {
      const $currentCreature = $(`ul.group li:eq(${idx})`)
      const $firstCheck = $(`ul.group li:eq(${idx+1})`)
      const $secondCheck = $(`ul.group li:eq(${idx+2})`)
      if ($currentCreature.html() === $firstCheck.html() && $currentCreature.html() === $secondCheck.html()) {
        matches.push($currentCreature, $firstCheck, $secondCheck)
        return matches
      }
    })
    checkVerticals(matches);
  }


  function checkVerticals(matches) {
    const col0 = [0, 8, 16, 24, 32, 40];
    const col1 = [1, 9, 17, 25, 33, 41];
    const col2 = [2, 10, 18, 26, 34, 42];
    const col3 = [3, 11, 19, 27, 35, 43];
    const col4 = [4, 12, 20, 28, 36, 44];
    const col5 = [5, 13, 21, 29, 37, 45];
    const col6 = [6, 14, 22, 30, 38, 46];
    const col7 = [7, 15, 23, 31, 39, 47];
    const verticalIndicies = col0.concat(col1, col2, col3, col4, col5, col6, col7);

    const verticalMatches = []
    verticalIndicies.forEach((idx) => {
      const $currentCreature = $(`ul.group li:eq(${idx})`)
      const $firstCheck = $(`ul.group li:eq(${idx+8})`)
      const $secondCheck = $(`ul.group li:eq(${idx+16})`)
      if ($currentCreature.html() === $firstCheck.html() && $currentCreature.html() === $secondCheck.html()) {
        verticalMatches.push($currentCreature, $firstCheck, $secondCheck)
        return verticalMatches
      }
    })

    totalMatches = verticalMatches.concat(matches)
    if (totalMatches.length >= 1) {
      updateMatches(totalMatches)
    } else {
      return;
    }
  }

  function updateMatches(totalMatches) {
    const images = ['bluedino.png', 'slug.png', 'slug1.png', 'dino2.png', 'rex.png'];
    const score = (10 * totalMatches.length)
      totalMatches.forEach( function (element) {
        // element.html("").html("<img src='assets/images/explosion.png' width='57px'>")
        element.html("").html(`<img draggable="true"
        ondrop="drop_handler(event);"
        ondragover="dragover_handler(event);"
        ondragstart="dragstart_handler(event);"
        src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]}
        height="54px" >`);
      });
    updateScore(score);
  }

  function updateScore(score) {
    const $score = $(document.getElementById('score'))
    currentScore = Number($score.html());
    $score.html(currentScore + score)
    checkHorizontals();
  }
