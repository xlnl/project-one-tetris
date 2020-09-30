console.log("hewwo")
// VARIABLES & CONSTANTS  -- LET'S DRAW
// the game's main piece, of which will be used to render + update (the canvas!)
const game = document.getElementById("game");
// this lets you draw and manipulate things on a canvas element in the game and includes info about colors, line width, fonts, and other graphic elements (the tool box!)
var ctx = game.getContext("2d");
// need to grab the score element to store the score after play completes a row/line
const score = document.getElementById("score");
// game board 
// board dimensions
const row = 24;
const col = 12;
// empty squares/divs w/ white bg (for now)
const sqSize = 20;
const empty = "lavenderblush";

// drawing time! in this case, drawing a square (already got the size and empty constant)
// fill color
ctx.fillStyle = "lavenderblush";
// line color
ctx.strokeStyle = "gray";
// line width
ctx.lineWidth = 1;

ctx.fillRect(sqSize, sqSize, sqSize, sqSize);
ctx.strokeRect(sqSize,sqSize,sqSize,sqSize);




// game pieces/tetrominoes (more details in "Tetris-Game-Piece-Details.png")
const lTetro = [
        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0]
        ],
        [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ],
        [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ]
    ];
const jTetro = [
        [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
        [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ]
    ];
const sTetro = [
        [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
        ],
        [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0]
        ]
    ];
const zTetro = [
        [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 0, 1],
            [0, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 0]
        ]
    ];
const oTetro = [
        [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ],
        [
            [0, 0, 0],
            [1, 1, 0],
            [1, 1, 0]
        ],
        [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]
        ],
        [
            [0, 1, 1],
            [0, 1, 1],
            [0, 0, 0]
        ]
    ];
const iTetro = [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ]
    ];
const tTetro = [
        [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1]
        ],
        [
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 0]
        ],
        [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ],
        [
            [0, 0, 1],
            [0, 1, 1],
            [0, 0, 1]
        ]
    ];

// const pieces = [lTetro, jTetro, zTetro, sTetro oTetro, iTetro, tTetro]
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
