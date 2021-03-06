# Project One: Tootris

This is the final version of my project one for General Assembly's Software Engineering Immersive FLEX program.

### App Demo: Click [here!](https://xlnl.github.io/project-one-tetris/)

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

## Concept: About Tootris

Tootris is another take of the game Tetris, in which the players must fill up a row to gain a score and minimize the amount of pieces they have on the game board. This involves strategy and technique as the pieces are randomized and set to automatically go down as the game starts. 

### Technologies Used

I used: 
* HTML (& HTML5)
* CSS
* Javascript
* iTerm
* Visual Studio Code
* Excel
* Github & Github Pages
* Google Chrome

**Credits:** 
```
buttsss.com
pond5.com
```

### Approach:
#### Overview
I knew there was a way to do this sans HTML5 but I wanted to pursue the challenge of learning more about the Canvas element since it will allow my game to be more efficient and my graphics easier to draw on Javascript. 

Firstly, I wanted to draw the game on excel so I have a visual guide for when I draw through canvas. You can view that in my planning folder. Two main guides include: 
* Overview of the game structure (size of game board, displays of buttons, and score board)
![game wireframe](/Planning/Tetris-Wireframing-MockUp.png)
* Visual guide of all the game pieces in addition to their rotational arrays (utilizing booleans to display the actual pieces on the board)
![game pieces](/Planning/Tetris-Game-Piece-Details.png)

#### User Stories
As a user, I expect to be able to move my pieces down, have the pieces locked at the bottom, have my score updated if I filled out a row using my pieces. If I am not able to fill up my rows and my pieces end up stacked on top, I expected to receive a "Game Over" alert.

#### Development Plan
Then, it was all research! I wanted to see how others made their tetris games in addition to how canvas is utilized overall. I watched the [Canvas Crawler tutorial](https://github.com/TaylorDarneille/canvas-crawler) along with countless articles to see what would be the best practices for my own code. 

After researching all that I could to have a better understanding of the important components, I began the planning and psueodocoding process.

After learning more about some cool elements including event.key (instead of event.keyCodes) and objects constructor, I set up my game and started on the MVP version one first. 

#### The MVP:

1. MVP ONE
   * The game board (grid level)
   * The game pieces (randomized colors)
   * Game play that doesn't require a start function—-it would just loop as the game loads/refreshes.
2. MVP TWO
   * The game board (white space, no grid level)
   * The game pieces (randomized colors)
   * Styling (simple)
   * Start button
3. MVP THREE
   * The game board (white space, no grid level)
   * The game pieces (different shades of brown)
   * Styling (quirky)
   * Start button
   * Refresh button

#### Stretch Goals:
For the next level/update, I'd like to explore how to add:

1. An "Up Next" display showing the next game piece in the array
2. Levels to the game so it can be more challenging the longer the user plays
3. Have a scoreboard to store past scores and have it ordered by highest to lowest
4. Have the gameboard transparent to make the game be more in line with the overall design theme

### Challenges

A big chunk of my time was spent figuring out how to understand and work through the movements of the pieces (collision detection and freezing the pieces). Understanding the logic of this particular game and applying it through functions was a steep learning curve as well.

Collision detection was a big mystery to me—and I'm still learning the ins and outs of it—but I'm happy with my progress so far with applying what I've learned to make the game work! 

## App Demo
### Click [here!](https://xlnl.github.io/project-one-tetris/)
