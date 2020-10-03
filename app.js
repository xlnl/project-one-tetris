// VARIABLES & CONSTANTS  -- LET'S DRAW
// the game's main piece, of which will be used to render + update (the canvas!)
const game = document.getElementById("game");
// this lets you draw and manipulate things on a canvas element in the game and includes info about colors, line width, fonts, and other graphic elements (the tool box!)
var ctx = game.getContext("2d");
// const upNext = document.getElementById("up-next");
// var nextCtx = upNext.getContext('2d');
const startButt = document.getElementById("start-button");
const freshButt = document.getElementById("refresh-button");
// need to grab the score element to store the score after play completes a row/line
const scoreDisplay = document.getElementById("score");
// game board 
// board dimensions 
const row = 24;
const col = 12;
// empty squares/divs marked by white to match toilet?
const box = 20;
const empty = "white";
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
    // ctx.fillRect(5*20, 1*20, 20, 20) (eg)
    ctx.fillRect(x*box, y*box, box, box); // note: ctx.fillRext(x,y,width, height); x & y is the location coordinate of the square 
    ctx.strokeStyle = 'white';
    // ctx.fillRect(4*20, 0*20, 20, 20)
    ctx.strokeRect(x*box, y*box, box, box);
}
// creating the board
let board = [];
for (let r=0; r<row; r++) { // for loop for the rows
    board[r] = []; // store board with index of r into an empty array
    for (let c=0; c<col; c++) { // for loop for the columns 
        board[r][c] = empty // make it empty (shown as white)
    }
}
// now drawing the board
function drawBoard() {
    for(let r=0; r<row; r++){
        for(let c=0; c<col; c++){
            drawBox(c,r,board[r][c]); // c=x, r=y board[r][c] = empty (color = 'white')
        }
    }
}
drawBoard();
// now drawing the pieces using constructor function 
function Pieces(tetro, color) {
    this.tetro = tetro;
    this.color = color;
    this.tetroI = 0; // starting with first rotation index first
    this.liveTetro = this.tetro[this.tetroI]; // accessing the relative piece we'll be playing (aka tetro[0])
    // starting coordinates of the pieces
    this.x = 5; // 5 units right from origin 
    this.y = -1; // -1 units from origin  
}
// drawing displayNext board
// let nextBoard = [];
// for (r=0; r<5; r++) { // for loop for the rows
//     nextBoard[r] = []; // store board with index of r into an empty array
//     for (c=0; c<5; c++) { // for loop for the columns 
//         nextBoard[r][c] = empty // make it empty (shown as white)
//     }
// }

// // display pieces up-next
// function displayNext () {
//     for(r=0; r<5; r++){
//         for(c=0; c<5; c++){
//             drawBox(c,r,nextBoard[r][c]); // c=x, r=y board[r][c] = empty (color = 'white')
//         }
//     }
// }

// displayNext();
// const pieces = [lTetro, jTetro, sTetro, zTetro, oTetro, iTetro, tTetro]
// instantiating the colors; 
const pieces = [ 
    [lTetro, "#805e4d"],
    [jTetro, "#4a403b"],
    [sTetro, "#4a352b"],
    [zTetro, "#917c64"],
    [oTetro, "#87571f"],
    [iTetro, "#d9984c"],
    [tTetro, "#9e8470"]
];
// randomize the pieces
function randPieces() {
    let rand = Math.floor(Math.random()*pieces.length); // randomize all the pieces in the pieces array based on indices (includes color)
    return new Pieces(pieces[rand][0],pieces[rand][1]); // returns a new Piece object (randomized piece shape and color as the parameter passed through)
}
let n = randPieces(); // (n = new piece)

// making the squares filled with colors now! 
// get the coordinates/location of the units for live tetros
// function.prototype property => allows you to add new properties & methods to objects constructors: https://www.w3schools.com/js/js_object_prototypes.asp
// instead of array.prototype.fill => function.prototype.fill works ???
// the other way of class extend?? but with objects 
Pieces.prototype.fill = function(color) { // in this case, fill is a method
    for(let r=0; r<this.liveTetro.length; r++) { // drawing the live tetro based on coordinates of pieces in the array
        for(let c=0; c<this.liveTetro.length; c++) { 
            if(this.liveTetro[r][c]) { // only need to draw the live/true tetro, to get their shapes
                drawBox(this.x + c, this. y + r, color); // starting position plus c & r increments based on size(in x,y coordinates) of piece shape
                // r represents row increments; c represents column increments (both based on the width & height of the tetro)
                // based on guidance from canvas crawler zoom session recording 
            }
        }
    }
}

// score board & gameover function
// make it so that once a row is all filled/taken: 1) that row is removed, score is counted, and we append a new row on top of the board
// to keep score, must code somewhere to keep count of filled rows
// freezing the pieces and detecting full rows
let score = 0;
let message = document.querySelector("h4");
Pieces.prototype.freeze = function() { 
    for(let r=0; r<this.liveTetro.length; r++) { // loop through all the board
        for(let c=0; c<this.liveTetro.length; c++) { 
            if(!this.liveTetro[r][c]) {  // skip the vacant squares
                continue; 
            } 
            if(this.y + r <0) { // reached the top
                message.innerText = "Game Over! Please flush your pieces, and start again!"
                gameOver = true;
                break; // break from loop
            }
            board[this.y+r][this.x+c] = this.color; // this will lock the piece based on square coordinates and its color
        }
    } // removing filled row
    for (r=0; r<row; r++) { // loop over just the rows
        let full = true; 
        for(let c=0; c<col; c++) { // loop over the columns now
            full = full && (board[r][c] != empty); // row full AND not empty
        }
        if(full) { // if row is full, move down the rows and add another row 
            for(let y=r; y>1; y--) {
                for(c=0; c<col; c++) {
                    board[y][c] = board[y-1][c];
                }
            } // delete one row
            for(let c=0; c<col; c++) {
                board[0][c] = empty; // add another one
            }
            score += 120
        }
        
    }
    drawBoard();
    // displayNext();
    scoreDisplay.innerHTML = score;
}

// movements! -> rotating function + movement functions + control function (to move the pieces) + timer function (to auto drop piece per second)
// drawing (fill it with color to draw) and undrawing the pieces to the board (making it empty)
Pieces.prototype.show = function () {
    this.fill(this.color); // if square is occupied or live, fill it with color (show it)
}
Pieces.prototype.hide = function () { // same logic but to make it empty/unfill it
    this.fill(empty)
}
// live piece to move down, check for collision here also (if no collision, continue movement)
Pieces.prototype.down = function () {
    if(!this.collision(0,1,this.liveTetro)) { // undraw the piece first, then increment just the y position by 1, then draw the piece in the next position down
        this.hide(); // this will hide the piece before it so it doesn't look like it's lagging/getting bigger
        this.y++;
        this.show();
    } else {
        this.freeze(); 
        n = randPieces();
    }
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
// piece to rotate
// make it so that the walls locks in the pieces (so they don't protrude outside) - check for collision
Pieces.prototype.rotate = function () {
    // tetroI = 0, starting rotation index 
    // tetro rotation index = (0+1)%4 = 1
    let turn = this.tetro[(this.tetroI + 1) % this.tetro.length]; // declaring the next index of rotation array of relative live tetro by adding 1 index (first rotation) modulus live tetro index
    let bounce = 0; // declaring position of bound, it's 0 unless the pieces go beyond the left and right walls
    if(this.collision(0,0,turn)) { // check for collision after rotation
        if(this.x > col/2) { // determines right or left wall boundaries
            bounce = -1; // if collision detected: right wall, so have piece bounce left
        } else {  
            bounce = 1; // if collision detected: left wall, so have piece bounce right
        }
    } 
    if(!this.collision(bounce,0,turn)) { 
        this.hide();
        this.x += bounce; // confusing at first! not =- 
        this.tetroI = (this.tetroI + 1) % this.tetro.length; 
        this.liveTetro = this.tetro[this.tetroI];
        this.show();
    }
}

// collision detection function 
Pieces.prototype.collision = function(x,y,p) { // need to check if piece (p) movement would collide using x,y coordinatoes 
    //(false - move); (true - freeze); check for vacant boxes
    for(let r=0; r<p.length; r++) {
        for (let c=0; c<p.length;c++) {
            if(!p[r][c]) { // if box is empty, continue moving
                continue;
            }
            let afterX = this.x + c + x;
            let afterY = this.y + r + y; 
            if(afterX<0 || afterX >= col || afterY >= row) { // if any incremented boxes on x,y coordinates = out of bounds, freeze
                return true;
            }
            if(afterY<0) { // if any of incremented boxes on y coordinates = within bounds, continue moving because board[-1][x] will make game crash
                continue;
            }
            if(board[afterY][afterX] != empty) { // if any of the incremented boxes is touching frozen/filled box, freeze
                return true;
            }
        }
    }
}

// NOTE: event.key instead of event.keyCode Description:https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
function movementHandler(e) {
    if(e.key == "ArrowLeft") {
        n.left();
        start = Date.now();
    } else if(e.key == "ArrowUp") {
        n.rotate();
        start = Date.now();
    } else if(e.key == "ArrowRight") {
        n.right();
        start = Date.now();
    } else if(e.key == "ArrowDown") {
        n.down();
    }
}
document.addEventListener("keydown", movementHandler);

// Date.now() source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now

let start = Date.now();
let gameOver = false;
function fall() {
    let now = Date.now();
    let time = now - start;
    if(time > 1000) {
        n.down(); 
        start = Date.now();
    }
    if(!gameOver) {
        requestAnimationFrame(fall);
    } 
}

function refresh() {
    location.reload();
}

startButt.addEventListener("click", fall);
freshButt.addEventListener("click", refresh);