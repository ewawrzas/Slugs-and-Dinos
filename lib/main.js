import View from './view.js'
import Game from './game.js'

$( () => {
  const rootEl = $('.gameboard');
  const game = new Game();
  new View(game, rootEl);
});
