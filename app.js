console.log("hewwo")
// VARIABLES & CONSTANTS  -- LET'S DRAW
// the game's main piece, of which will be used to render + update (the canvas!)
const game = document.getElementById("game");
// this lets you draw and manipulate things on a canvas element in the game and includes info about colors, line width, fonts, and other graphic elements (the tool box!)
var ctx = game.getContext("2d");
// need to grab the score element to store the score after play completes a row/line
const scoreDisplay = document.getElementById("score");
// game board 
// board dimensions - row = 24; col = 12;
// empty squares/divs marked by lavenderblush color :^)
const box = 20;
const empty = "lavenderblush";

// game pieces/tetrominoes (more details in "Tetris-Game-Piece-Details.png")
// 0 = empty/false; 1 = live/true
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
    // ctx.fillRect(4*20, 0*20, 20, 20)
    ctx.fillRect(x*box, y*box, box, box); // note: ctx.fillRext(x,y,width, height); x & y is the location coordinate of the square 
    ctx.strokeStyle = 'lightgrey';
    ctx.lineWidth = 1; // why isn't the line width working...
    // ctx.fillRect(4*20, 0*20, 20, 20)
    ctx.strokeRect(x*box, y*box, box, box);
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
            drawBox(c,r,board[r][c]); // c=x, r=y board[r][c] = empty (color = 'lavenderblush')
        }
    }
}

// now drawing the pieces using constructor function 
function Pieces(tetro, color) {
    this.tetro = tetro;
    this.tetroI = 0; // starting with first rotation index first
    this.color = color;
    this.liveTetro = this.tetro[this.tetroI]; // accessing the relative piece we'll be playing (aka tetro[0])
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
// instead of array.prototype.fill => function.prototype.fill works ???
// the other way of class extend?? but with objects 
Pieces.prototype.fill = function(color) { // in this case, fill is a method
    for(r=0; r<this.liveTetro.length; r++) { // drawing the live tetro based on coordinates of pieces in the array
        for(c=0; c<this.liveTetro.length; c++) { 
            if(this.liveTetro[r][c]) { // only need to draw the live/true tetro, to get their shapes
                drawBox(this.x + c, this. y + r, color); // starting position plus c & r increments based on size(in x,y coordinates) of piece shape
                // r represents row increments; c represents column increments (both based on the width & height of the tetro)
                // based on guidance from canvas crawler zoom session recording 
            }
        }
    }
}

// randomize the pieces
function randPieces() {
    let rand = Math.floor(Math.random()*pieces.length); // randomize all the pieces in the pieces array based on indices (includes color)
    return new Pieces(pieces[rand][0],pieces[rand][1]); // returns a new Piece object (randomized piece shape and color as the parameter passed through)
}

let random = randPieces();

// movements! -> rotating function + movement functions + control function (to move the pieces) + timer function (to auto drop piece per second)
// drawing (fill it with color to draw) and undrawing the pieces to the board (making it empty)
Pieces.prototype.show = function () {
    this.fill(this.color); // if square is occupied or live, fill it with color (show it)
}
Pieces.prototype.hide = function () { // same logic but to make it empty/unfill it
    this.fill(empty)
}

// live piece to move down 
Pieces.prototype.down = function () {
    if(!this.collision(0,1,this.liveTetro)) { // undraw the piece first, then increment just the y position by 1, then draw the piece in the next position down
        this.hide(); // this will ihide the piece before it so it doesn't look like it's lagging/getting bigger
        this.y++;
        this.show();
    } // update to capture frozen piece & generate new randomized piece 
}
// live piece to move left 
Pieces.prototype.left = function () {
    if(!this.collision(-1,0,this.liveTetro)) { // same logic as down method but decrement just the x position by 1
        this.hide();
        this.x--;
        this.show();
    }
}
// live piece to move right
Pieces.prototype.right = function () {
    if(!this.collision(1,0,this.liveTetro)) {// same logic as down method but increment just the x position by 1
        this.hide(); 
        this.x++;
        this.show();
    }
}
// NOTE: event.key instead of event.keyCode Description:https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
// piece to rotate
// make it so that the walls locks in the pieces (so they don't protrude outside) 
Pieces.prototype.rotate = function () {
    // tetroI = 0, starting rotation index 
    let turn = this.tetro[(this.tetroI + 1) % this.tetro.length]; // declaring the next index of rotation array of relative live tetro by adding 1 index (first rotation) modulus live tetro index
    let bound = 0; // declaring position of bound, it's 0 unless the pieces go beyond the left and right walls
    if(this.collision(0,0,turn)) {
        if(this.x > col/2) { // 
            bound = -1; // right wall, so have piece go left
        } else {  
            bound = 1; // left wall, so have piece go right
        }
    } 
    if(!this.collision(bound,0,turn)) {
        this.hide();
        this.x =- bound;
        this.tetroI = (this.tetroI + 1) % this.tetro.length; // tetro rotation index = (0+1)%4 = 1
        this.liveTetro = this.tetro[this.tetroI];
        this.show();
    }
}

function control() {
    document.addEventListener("keydown", e => {
        const k = e.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        if(k = "ArrowLeft") {
            p.left();
            let start = Date.now();
        } else if(k = "ArrowUp") {
            p.rotate();
            let start = Date.now();
        } else if(k = "ArrowRight") {
            p.right();
            let start = Date.now();
        } else if(k = "ArrowDown") {
            p.down();
        }
    });
}



// collision detection function 
Pieces.prototype.collision = function(x,y,shape) {
    for(r=0; r<shape.length; r++) {
        for (c=0; c<shape.length;c++) {
            if(!piece[r][c]) {
                continue;
            }
            let afterX = this.x + c + x;
            let afterY = this.y + r + y; 

            if(afterX<0 || afterX >= col || afterY >= row) {
                return true;
            }
            if(afterY<0) {
                continue;
            }
            if(board[afterY][afterX] != empty) {
                return true;
            }
        }
    }
}

// score board & gameover function
// make it so that once a row is all filled/taken: 1) that row is removed, score is counted, and we append a new row on top of the board
// to keep score, must code somewhere to keep count of filled rows

let score = 0; 


// start/pause button
//      const startBtn = document.querySelector('#start-button')
let start = Date.now();
let gameOver = false;
function fall() {
    let now = Date.now();
    let time = now - start;
    if(time > 1000) {
        p.down();
        start = Date.now();
    }
    if(!gameOver) {
        requestAnimationFrame(fall);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    drawBoard();
    console.log(random);
    fall();
})
