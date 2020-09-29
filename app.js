console.log('hewwo')


// PSUEDOCODING

// HTML set up -> create 288 divs with a container div with class 
//     Create a start/pause button
//     Create a score section (update later to allow for name input form button??)
// CSS set up -> Styling the divs (basic for now) -> each div (20x20px) -> board (12x24divs)
//     game board = width 240px; height: 480px
// JS set up 
//      VARIABLES & CONSTANTS  
//         const canvas = document.getElementById("tetris");
//         const ctx = cvs.getContext("2d");
//         const score = document.getElementById("score");
//         game pieces/tetrominoes
//              drawing them and their rotations (create separate excel sheet with blueprint of all game pieces & their rotations)
//              store the rotations of the game pieces in an array under their respective constants 
//              const lTetro = 
//                 	[
//                 		[0, 1, 0],
//                 		[0, 1, 0],
//                 		[0, 1, 1]
//                 	],
//                 	[
//                 		[0, 0, 0],
//                 		[1, 1, 1],
//                 		[1, 0, 0]
//                 	],
//                 	[
//                 		[1, 1, 0],
//                 		[0, 1, 0],
//                 		[0, 1, 0]
//                 	],
//                 	[
//                 		[0, 0, 1],
//                 		[1, 1, 1],
//                 		[0, 0, 0]
//                 	]
//                 ];
//              const jTetro = [
//                 	[
//                 		[0, 1, 0],
//                 		[0, 1, 0],
//                 		[1, 1, 0]
//                 	],
//                 	[
//                 		[1, 0, 0],
//                 		[1, 1, 1],
//                 		[0, 0, 0]
//                 	],
//                 	[
//                 		[0, 1, 1],
//                 		[0, 1, 0],
//                 		[0, 1, 0]
//                 	],
//                 	[
//                 		[0, 0, 0],
//                 		[1, 1, 1],
//                 		[0, 0, 1]
//                 	]
//                 ];
//              const sTetro = [
//                 	[
//                 		[0, 1, 1],
//                 		[1, 1, 0],
//                 		[0, 0, 0]
//                 	],
//                 	[
//                 		[0, 1, 0],
//                 		[0, 1, 1],
//                 		[0, 0, 1]
//                 	],
//                 	[
//                 		[0, 0, 0],
//                 		[0, 1, 1],
//                 		[1, 1, 0]
//                 	],
//                 	[
//                 		[1, 0, 0],
//                 		[1, 1, 0],
//                 		[0, 1, 0]
//                 	]
//                 ];
//              const zTetro = [
//                 	[
//                 		[1, 1, 0],
//                 		[0, 1, 1],
//                 		[0, 0, 0]
//                 	],
//                 	[
//                 		[0, 0, 1],
//                 		[0, 1, 1],
//                 		[0, 1, 0]
//                 	],
//                 	[
//                 		[0, 0, 0],
//                 		[1, 1, 0],
//                 		[0, 1, 1]
//                 	],
//                 	[
//                 		[0, 1, 0],
//                 		[1, 1, 0],
//                 		[1, 0, 0]
//                 	]
//                 ];
//              const oTetro = [
//                 	[
//                 		[0, 0, 0],
//                 		[0, 1, 1],
//                 		[0, 1, 1]
//                 	],
//                 	[
//                 		[0, 0, 0],
//                 		[1, 1, 0],
//                 		[1, 1, 0]
//                 	],
//                 	[
//                 		[1, 1, 0],
//                 		[1, 1, 0],
//                 		[0, 0, 0]
//                 	],
//                 	[
//                 		[0, 1, 1],
//                 		[0, 1, 1],
//                 		[0, 0, 0]
//                 	]
//                 ];
//              const iTetro = [
//                 	[
//                 		[0, 0, 0, 0],
//                 		[1, 1, 1, 1],
//                 		[0, 0, 0, 0],
//                 		[0, 0, 0, 0],
//                 	],
//                 	[
//                 		[0, 0, 1, 0],
//                 		[0, 0, 1, 0],
//                 		[0, 0, 1, 0],
//                 		[0, 0, 1, 0],
//                 	],
//                 	[
//                 		[0, 0, 0, 0],
//                 		[0, 0, 0, 0],
//                 		[1, 1, 1, 1],
//                 		[0, 0, 0, 0],
//                 	],
//                 	[
//                 		[0, 1, 0, 0],
//                 		[0, 1, 0, 0],
//                 		[0, 1, 0, 0],
//                 		[0, 1, 0, 0],
//                 	]
//                 ];
//              const tTetro = [
//                 	[
//                 		[0, 0, 0],
//                 		[0, 1, 0],
//                 		[1, 1, 1]
//                 	],
//                 	[
//                 		[1, 0, 0],
//                 		[1, 1, 0],
//                 		[1, 0, 0]
//                 	],
//                 	[
//                 		[1, 1, 1],
//                 		[0, 1, 0],
//                 		[0, 0, 0]
//                 	],
//                 	[
//                 		[0, 0, 1],
//                 		[0, 1, 1],
//                 		[0, 0, 1]
//                 	]
//                 ];
//              const pieces = [lTetro, jTetro, zTetro, sTetro oTetro, iTetro, tTetro]
//         make sure the pieces that land at the bottom gets frozen/locked
//         game board
//              board dimensions
//                  const row = 24;
//                  const col = 12;
//              empty squares/divs w/ white bg (for now)
//                  const squareSize = 20;
//                  const empty = "#FFFFF";
//              define board array 
//                  let board = [];
//   
//     FUNCTIONS
//         create the rows & columns
//              for loop functions for each, have them be empty (white bg)
//         create the units - using canvas
//              construction function with context
//                  function drawSquare(x,y,color){
//                  ctx.fillStyle = color;
//                  ctx.fillRect(x*squareSize,y*squareSize,squareSize,squareSize);
//                  ctx.strokeStyle = "grey";
//                  ctx.strokeRect(x*squareSize,y*squareSize,squareSize,squareSize);
//                  }
//         collision detection function 
//         movemnents! -> rotating function + movement functions + control function (to move the pieces) + timer function (to auto drop piece per second)
//         make it so that the walls locks in the pieces (so they don't protrude outside)
//         make it so that once a row is all filled/taken: 1) that row is removed, score is counted, and we append a new row on top of the board
//         score board
//              const scoreBoard = document.querySelector('#score')
//              to keep score, must code somewhere to keep count of filled rows
//         start/pause button
//              const startBtn = document.querySelector('#start-button')
