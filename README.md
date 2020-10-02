# Project One: Tootris

This is the final version of my project one for General Assembly's Software Engineering Immersive FLEX program.

## Technical Requirements & Goals
My app must:
* Display a game in the browser
* Switch turns between two players, or have the user play the computer (AI or obstacles)
* Design logic for winning & visually display which player won
* Include separate HTML / CSS / JavaScript files
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use Javascript for DOM manipulation
* Deploy your game online, where the rest of the world can access it**
* Use semantic markup for HTML and CSS (adhere to best practices)

## Explanations

### Technologies Used

I used: 
* iTerm
* Visual Studio Code
* Github & Github Pages
* Google Chrome

### Approach Taken

I knew there was a way to do this sans HTML5 but I wanted to pursue the challenge of learning more about the Canvas element since it will allow my game to be more efficient and my graphics easier to draw on Javascript. 

Firstly, I wanted to draw the game on excel so I have a visual guide for when I draw through canvas. You can view that in my planning folder. Two main guides include: 
* Overview of the game structure (size of game board, displays of buttons, and score board)
* Visual guide of all the game pieces in addition to their rotational arrays (utilizing booleans to display the actual pieces on the board)

Then, it was all research! I wanted to see how others made their tetris games in addition to how canvas is utilized overall. I watched the [Canvas Crawler tutorial](https://github.com/TaylorDarneille/canvas-crawler) along with countless articles to see what would be the best practices for my own code. 

After researching all that I could to have a better understanding of the important components, I began the planning and psueodocoding process.

After learning more about out some cool elements including event.key (instead of event.keyCodes) and objects constructor, I set up my game and started on the MVP version first. 

##### The MVP included: 
* The game board
* The game pieces
* The score board
* Game play that doesn't require a start function—-it would just loop as the game loads/refreshes.

Some bonuses I was able to add was the quirky styling to the game and buttons. I also added a refresh button as well! 

### Installation Instructions

You don't need to install anything for this to work -- just internet connection and a web browser! 

### Unsolved Problems

For the next level/update, I'd like to explore how to add an "Up Next" display showing the next game piece in the array. 

I'd also like to work out how to add levels so the game can be more challenging the longer the user plays. Speaking of which...

## Wanna play? 
### Click [here!](https://xlnl.github.io/project-one-tetris/)
