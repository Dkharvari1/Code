//javascript code here

const board = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]

//DOM references
const cells = document.querySelectorAll("td");
let redPieces = document.querySelectorAll("p");
let blackPieces = document.querySelectorAll("span");
const redTurntext = document.querySelectorAll(".red-turn-text");
const blackTurntext = document.querySelectorAll(".black-turn-text");
const divider = document.querySelector("#divider");

//player properties
let turn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;

let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
}

//initialize event listeners on pieces
function givePiecesEventListeners(){
    if (turn) {
        for (let i = 0; i < redPieces.length; i++){
            redPieces[i].addEventListeners("click", getPlayerPieces);
        }
    }
    else {
        for (let i = 0; i < blackPieces.length; i++){
            blackPieces[i].addEventListeners("click", getPlayerPieces);
        }
    }
}

//holds the length of the players piece count
function getPlayerPieces(){
    if (turn) {
        playerPieces = redPieces;
    }
    else {
        playerPieces = blackPieces;
    }
    removeCellonclick();
    resetBorders();
}

function removeCellonclick() {
    for (let i = 0; i < cells.length; i++){
        cells[i].removeAttribute("onclick");
    }
}

//resets borders to default
function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++){
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedpieceProperties();
    getSelectedPiece();
}

function resetSelectedpieceProperties() {
    selectedPiece.pieceId = -1;
    selectedPiece.pieceId = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusSeventhSpace = false;
    selectedPiece.minusFourteenthSpace = false;
    selectedPiece.minusEighteenthSpace = false;
}

//gets ID and index of the board cell its on
