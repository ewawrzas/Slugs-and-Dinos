/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.grid = Board.setUpGrid();
  }

  _createClass(Board, null, [{
    key: "setUpGrid",
    value: function setUpGrid() {
      var grid = [];
      for (var rowIdx = 0; rowIdx < 8; rowIdx++) {
        grid.push([]);
        for (var colIdx = 0; colIdx < 8; colIdx++) {
          grid[rowIdx].push(null);
        }
      }
      return grid;
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _view = __webpack_require__(2);

var _view2 = _interopRequireDefault(_view);

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var rootEl = $('.gameboard');
  var game = new _game2.default();
  new _view2.default(game, rootEl);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(0);

var _board2 = _interopRequireDefault(_board);

var _tile = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View(game, $el) {
    _classCallCheck(this, View);

    this.$el = $el;
    this.game = game;

    this.findTargets = this.findTargets.bind(this);
    this.findMatches = this.findMatches.bind(this);

    this.populateBoard = this.populateBoard.bind(this);
    this.checkMatches = this.checkMatches.bind(this);

    this.timer = this.timer.bind(this);
    this.checkHorizontals = this.checkHorizontals.bind(this);
    this.setUpBoard();

    this.play();
  }

  _createClass(View, [{
    key: 'play',
    value: function play() {
      var _this = this;

      $(".start").click(function () {
        $('.start').hide();
        $("#instructions").hide();
        $('.restart').show();
        _this.populateBoard();
        _this.timer();
      });
    }
  }, {
    key: 'timer',
    value: function timer() {
      var elem = document.getElementById("bar");
      var width = 1;
      var id = setInterval(frame, 500);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          $('.gameboard').hide();
          $('.control-panel-column').hide();
          $('.gamescreen').html('<div class=loser-screen\'><button class=\'newGame\' type=\'button\' onclick=\'location.reload();\'name=\'button\'>New Game</button> <img src=\'assets/images/sad.png\' width=\'500px\'></div>');
          var $button = $("<button>");
          $button.addClass("newGame");
        } else {
          width++;
          elem.style.width = width + '%';
        }
      }
    }
  }, {
    key: 'checkInside',
    value: function checkInside() {

      for (var idx = 0; idx < 64; idx++) {
        var borderIndicies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 57, 58, 59, 60, 61, 62, 63];
        if (borderIndicies.includes(idx)) {
          continue;
        }
        var $clickedCreature = $('ul.group li:eq(' + idx + ')');

        this.findTargets($clickedCreature);
      }
    }
  }, {
    key: 'checkHorizontals',
    value: function checkHorizontals() {
      var horizontalIndicies = [0, 1, 2, 3, 4, 5, 56, 57, 58, 59, 60, 61];

      horizontalIndicies.forEach(function (idx) {
        var $currentCreature = $('ul.group li:eq(' + idx + ')');
        var $firstCheck = $('ul.group li:eq(' + (idx + 1) + ')');
        var $secondCheck = $('ul.group li:eq(' + (idx + 2) + ')');

        if ($currentCreature.html() === $firstCheck.html() && $currentCreature.html() === $secondCheck.html()) {
          $currentCreature.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/bluedino.png height="54px" >');
          $firstCheck.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/slug.png height="54px" >');
          $secondCheck.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/dino2.png height="54px" >');
        }
      });
      return this.checkVerticals();
    }
  }, {
    key: 'checkVerticals',
    value: function checkVerticals() {
      var verticalIndicies = [0, 8, 16, 24, 32, 40, 15, 23, 31, 39, 47];

      verticalIndicies.forEach(function (idx) {
        var $currentCreature = $('ul.group li:eq(' + idx + ')');
        var $firstCheck = $('ul.group li:eq(' + (idx + 8) + ')');
        var $secondCheck = $('ul.group li:eq(' + (idx + 16) + ')');

        if ($currentCreature.html() === $firstCheck.html() && $currentCreature.html() === $secondCheck.html()) {
          var images = ['dino2.png', 'rex.png', 'bluedino.png', 'slug1.png', 'slug.png'];
          // const newHTML = `<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/${images[(Math.floor(Math.random() * 5)) % 5]} height="54px" >`
          $currentCreature.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/dino2.png height="54px" >');
          $firstCheck.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/slug1.png height="54px" >');
          $secondCheck.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/rex.png height="54px" >');
        }
      });
      return this.checkInside();
    }
  }, {
    key: 'findTargets',
    value: function findTargets($clickedCreature) {
      var clickedCreatureIdx = $clickedCreature.index();
      var deltas = [-9, -8, -7, -1, 1, 7, 8, 9];

      var possibleTargets = [];

      deltas.forEach(function (delta) {
        return possibleTargets.push(clickedCreatureIdx + delta);
      });

      console.log(possibleTargets);
      return this.findMatches(possibleTargets, $clickedCreature);
    }
  }, {
    key: 'findMatches',
    value: function findMatches(possibleTargets, $clickedCreature) {
      var matches = [];
      possibleTargets.forEach(function (index) {

        if ($clickedCreature.html() === $('ul.group li:eq(' + index + ')').html()) {
          // $( `ul.group li:eq(${index})`).css("background-color", "red");
          matches.push($('ul.group li:eq(' + index + ')'));
          // matches.push(index);
          console.log(matches);
          console.log($(matches));
          // return matches
        }
      });
      if (matches.length > 0) {
        this.checkMatches(matches, $clickedCreature);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'checkMatches',
    value: function checkMatches(matches, $clickedCreature) {
      matches.forEach(function (match) {
        var diff = $clickedCreature.index() - $(match).index();
        var possibleThirdIdx = $(match).index() - diff;
        var possibleThird = $('ul.group li:eq(' + possibleThirdIdx + ')');
        if ($(match).html() === $(possibleThird).html()) {
          var images = ['dino2.png', 'rex.png', 'slug.png', 'slug1.png', 'bluedino.png'];
          var newHTML = '<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/' + images[Math.floor(Math.random() * 5) % 5] + ' height="54px" >';
          possibleThird.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/' + images[Math.floor(Math.random() * 5) % 5] + ' height="54px" >');
          $(match).html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/' + images[Math.floor(Math.random() * 5) % 5] + ' height="54px" >');
          $clickedCreature.html("").html('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/' + images[Math.floor(Math.random() * 5) % 5] + ' height="54px" >');
        }
      });
    }
  }, {
    key: 'setUpBoard',
    value: function setUpBoard() {
      var $ul = $("<ul>");
      $ul.addClass("group");

      for (var rowIdx = 0; rowIdx < 8; rowIdx++) {
        for (var colIdx = 0; colIdx < 8; colIdx++) {
          var $li = $("<li>");
          $li.data("pos", [rowIdx, colIdx]);
          $li.attr({
            droppable: true
            // ondrop: 'drop(event)',
            // ondragover: 'allowDrop(event)'
          });
          $ul.append($li);
        }
      }
      this.$el.append($ul);
    }
  }, {
    key: 'populateBoard',
    value: function populateBoard() {
      var images = ['bluedino.png', 'slug.png', 'slug1.png', 'rex.png', 'dino2.png'];
      $("ul li").each(function (index) {
        $(this).append('<img draggable="true" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" ondragstart="dragstart_handler(event);" src=assets/images/' + images[(index + Math.floor(Math.random() * 6)) % 5] + ' height="54px" >');
      }).addClass('icon');
      this.checkHorizontals();
    }
  }]);

  return View;
}();

exports.default = View;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _board = __webpack_require__(0);

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
  _classCallCheck(this, Game);

  this.board = new _board2.default();
  // this.countScore = this.countScore.bind(this)
};

exports.default = Game;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map