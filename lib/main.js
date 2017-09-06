import Board from './board.js';
import View from './view.js';

$( () => {
  const rootEl = $('gameboard');
  new View(rootEl);
})
