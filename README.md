# Slugs & Dinos

Inspired by Candy Crush, Slugs & Dinos is a puzzle game where players race against the clock to line up matching pieces before time runs out.

## Functionality & MVP
  + Game Board and Control Panel
    - The board consists of an 8x8 grid
    - A control panel with a start button occupies the space next to the board
    - The start button initializes the game, allowing each space on the board to be occupied by a Slug or Dino piece


  + Pieces
    - There are four pieces, each having a different shape and color
    - The pieces randomly populate the board when the start button is clicked
    - The user can swap one piece with an adjacent piece on the board
    - After a swap any rows, columns, or diagonals of 3 or more matching pieces is dissolved


  + Score Board & Timer
    - The score increases with each match on the board
    - When the timer runs out all of the pieces disappear from the board

## Wireframes

Slugs and Dinos will be displayed on a single screen. The title and instructions will be at the top center of the page with the main content below. The control panel will host the start button, timer, and scoreboard. The game board will be an 8x8 grid next to the control panel. Links to Github, LinkedIn and my portfolio will be located below the main content of the page.

![alt text](https://github.com/ewawrzas/Slugs-and-Dinos/blob/master/Wireframe.png)

## Technologies and Architecture

The following technologies will be used to create the game:

+ `JavaScript` for game logic
+ Canvas to render game board, pieces, and control panel
+ Webpack to bundle js files

The following will be scripts in addition to the entry file:

`board.js` this script will house the logic for populating and updating the board during game play
`piece.js`  this script will house the logic for the pieces


## Implementation Timeline

+ Day 1: Game Board and Control Panel
  - Objective: Complete board and control panel
+ Day 2: Pieces
  - Objective: Complete pieces and game logic
+ Day 3: Score Board and Timer
  - Objective: Complete functional score board and timer
