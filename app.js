console.log("hewwo")
// VARIABLES & CONSTANTS  -- LET'S DRAW
// the game's main piece, of which will be used to render + update (the canvas!)
const game = document.getElementById("game");
// this lets you draw and manipulate things on a canvas element in the game and includes info about colors, line width, fonts, and other graphic elements (the tool box!)
var ctx = game.getContext("2d");
// need to grab the score element to store the score after play completes a row/line
const score = document.getElementById("score");
// game board 
// board dimensions - row = 24; col = 12;
// empty squares/divs w/ white bg (for now)
const box = 20;
const empty = "lavenderblush";

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

   
// FUNCTIONS
// it's drawing time! 
// creating the squares using canvas - modularizing!
function drawBox(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x*box, y*box, box, box); // note: ctx.fillRext(x,y,width, height); x & y is the location coordinate of the square 
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1; // why isn't the line width working...
    ctx.fillRect(x*box, y*box, box, box);
}

// creating the board
let board = [];
for (r=0; r<24; r++) { // for loop for the rows
    board[r] = []; // store board with index of r into an empty array
    for (c=0; c<12; c++) { // for loop for the columns 
        board[r][c] = empty // make it empty (shown as lavenderblush)
    }
}

// now drawing the board
function drawBoard() {
    for(r=0; r<24; r++){
        for(c=0; c<12; c++){
            drawBox(c,r,board[r][c]);
        }
    }
}

// now drawing the pieces using constructor function 
function Pieces(tetro, color) {
    this.tetro = tetro;
    this.color = color;
    this.tetroI = 0; // starting with first rotation index first
    this.liveTetro = this.tetro[this.tetroI];
    // starting coordinates of the pieces
    this.x = 4; // 4 units right from origin 
    this.y = 0; // 0 units from origin  
}

// const pieces = [lTetro, jTetro, sTetro, zTetro, oTetro, iTetro, tTetro]
// instantiating the colors; 
const pieces = [
    [lTetro, "yellow"],
    [jTetro, "pink"],
    [sTetro, "orange"],
    [zTetro, "red"],
    [oTetro, "green"],
    [iTetro, "purple"],
    [tTetro, "teal"]
];

// making the squares filled with colors now! 
// get the coordinates/location of the units for live tetros
// function.prototype property => allows you to add new properties & methods to objects constructors: https://www.w3schools.com/js/js_object_prototypes.asp
// the other way of class extend?? but with objects 
Pieces.prototype.fill = function(color) {
    for(r=0; r<this.liveTetro.length; r++) {
        for(c=o; c<this.liveTetro.length; c++) {
            if(this.liveTetro[r][c]) {
                drawBox(this.x + c, this. y + r, color); // based on guidance from canvas crawler zoom session recording
                // r represents row increments; c represents column increments (both based on the width & height of the tetro)
            }
        }
    }
}

// collision detection function 
//         movements! -> rotating function + movement functions + control function (to move the pieces) + timer function (to auto drop piece per second)
//         make it so that the walls locks in the pieces (so they don't protrude outside)
//         make it so that once a row is all filled/taken: 1) that row is removed, score is counted, and we append a new row on top of the board
//         score board
//              const scoreBoard = document.querySelector('#score')
//              to keep score, must code somewhere to keep count of filled rows
//         start/pause button
//              const startBtn = document.querySelector('#start-button')


document.addEventListener('DOMContentLoaded', ()=>{
    drawBoard();
    console.log(pieces);
})