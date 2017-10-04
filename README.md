# Slugs & Dinos

Inspired by Bejeweled, Slugs & Dinos is a puzzle game where players earn points by lining up matching pieces before the clock runs out.

Play it [live](http://elliewawrzaszek.us/Slugs-and-Dinos/)

![alt text](https://github.com/ewawrzas/Slugs-and-Dinos/blob/master/assets/Screen%20Shot%202017-10-03%20at%208.03.34%20PM.png)

![alt text](https://github.com/ewawrzas/Slugs-and-Dinos/blob/master/assets/Screen%20Shot%202017-10-03%20at%208.03.20%20PM.png)

## Functionality & MVP
  + Game Board and Control Panel
    - The board consists of an 8x8 grid
    - A control panel with a start button, scoreboard, and timer occupies the space next to the board
    - The start button initializes the game, triggering the board populate method, which randomly distributes slug and dino pieces on the board


  + Pieces
    - There are five pieces, each having a different shape and color
    - The pieces randomly populate the board when the start button is clicked
    - The user can swap one piece with an adjacent piece on the board
    - After a swap, any rows or columns of 3 or more matching pieces is dissolved and randomly replaced with a new piece


  + Score Board & Timer
    - The score increases with each match on the board
    - When the timer runs out all of the pieces disappear from the board and the player is prompted to start a new game

## Wireframes

Slugs and Dinos will be displayed on a single screen. The title and instructions will be at the top center of the page with the main content below. The control panel will host the start button, timer, and scoreboard. The game board will be an 8x8 grid next to the control panel. Links to Github, LinkedIn and my portfolio will be located below the main content of the page.

![alt text](https://github.com/ewawrzas/Slugs-and-Dinos/blob/master/Wireframe.png)

The start screen will include a demo button, which will open a modal with a gif demonstrating how to play the game.

## Technologies and Architecture

The following technologies will be used to create the game:

+ `JavaScript` for game logic
+ `jQuery` to render game board, pieces, and control panel
+ `Webpack` to bundle js files

The following will be scripts in addition to the entry file:

- `game.js` this script will house the logic for game play
- `view.js` this script will control the logic pertaining to the user interface of the game

## Implementation Timeline

+ Day 1: Game Board and Control Panel
  - Objective: Complete board and control panel
    * Use `jQuery` to create the board from a unordered list with 64 indexed list elements
    * Install click handler on the start button and write algorithm to randomly populate the board when the button is clicked
+ Day 2: Pieces
  - Objective: Complete pieces and game logic
    * Install drag, dragover and drop handlers on pieces and write corresponding event methods to swap data after a drop event
    * Write algorithm to check for horizontal and vertical matches, storing matching elements in an array and replacing them all at once
+ Day 3: Score Board and Timer
  - Objective: Complete functional score board and timer
  * Use match algorithm to add score keeping functionality
  * Implement timer that starts on click of the start button
  * Use `jQuery` to dynamically render restart screen when time runs out
