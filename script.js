let playGrid = [["-","-","-"],["-","-","-"],["-","-","-"]];
const srcX = "assets/x_icon.svg";
const srcO = "assets/o_icon.svg"; 
let gridItemsList = document.getElementsByClassName("item-game-sign");
let playerName1 = document.getElementById("player-1");
let playerName2 = document.getElementById("player-2");
let playerScore1 = document.getElementById("player-1-score");
let playerScore2 = document.getElementById("player-2-score");
let restartButton = document.getElementById("restart");

let player1 = { name:"Player 1", sign:srcO, score:0, turn:true, simbol:"o", win:false};
let player2 = { name:"Player 2", sign:srcX, score:0, turn:false, simbol:"x", win:false};

console.log(playGrid.toString());

function swapCurrentPlayer(){
    if (player1.turn === true) {
        player1.turn = false;
        player2.turn = true;
    } else {
        player2.turn = false;
        player1.turn = true;
    }
}

function currentPlayer(){
    if (player1.turn === true) {
        return player1
    } else {
        return player2
    }
}
function currentSign(){
    return currentPlayer().sign;
};
function currentSimbol(){
    return currentPlayer().simbol;
}

function gridValueChecker(element){
    switch (element.id) {
        case "1":
            if (playGrid[0][0] === "-" && player1.win === false && player2.win === false){
                playGrid[0][0] = currentSimbol();
                console.log(playGrid.toString()); /// debug
                return true
            } else {
                return false
            }
            break
        case "2":
            if (playGrid[0][1] === "-" && player1.win === false && player2.win === false){
                playGrid[0][1] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } else {
                return false
            }
            break
        case "3":
            if (playGrid[0][2] === "-" && player1.win === false && player2.win === false){
                playGrid[0][2] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } else {
                return false
            }
            break
        case "4":
            if (playGrid[1][0] === "-" && player1.win === false && player2.win === false) {
                playGrid[1][0] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } else {
                return false
            }
            break
        case "5":
            if (playGrid[1][1] === "-" && player1.win === false && player2.win === false) {
                playGrid[1][1] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } else {
                return false
            }
            break
        case "6":
            if (playGrid[1][2] === "-" && player1.win === false && player2.win === false) {
                playGrid[1][2] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } else {
                return false
            }
            break
        case "7":
            if (playGrid[2][0] === "-" && player1.win === false && player2.win === false) {
                playGrid[2][0] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } else {
                return false
            }
            break
        case "8":
            if (playGrid[2][1] === "-" && player1.win === false && player2.win === false) {
                playGrid[2][1] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } else {
                return false
            }
            break
        case "9":
            if (playGrid[2][2] === "-" && player1.win === false && player2.win === false) {
                playGrid[2][2] = currentSimbol();
                console.log(playGrid.toString());
                return true
            } if (player1.win === true || player1.win === true) {
                
            } else {
                return false
            }
            break
    }
}
function conditionReviewer(){ 
    let col1Win = playGrid[0][0] === "o" && playGrid[1][0] === "o" && playGrid[2][0] === "o";
    let col2Win = playGrid[0][1] === "o" && playGrid[1][1] === "o" && playGrid[2][1] === "o";
    let col3Win = playGrid[0][2] === "o" && playGrid[1][2] === "o" && playGrid[2][2] === "o";

    let row1Win = playGrid[0][0] === "o" && playGrid[0][1] === "o" && playGrid[0][2] === "o";
    let row2Win = playGrid[1][0] === "o" && playGrid[1][1] === "o" && playGrid[1][2] === "o";
    let row3Win = playGrid[2][0] === "o" && playGrid[2][1] === "o" && playGrid[2][2] === "o";

    let diag1Win = playGrid[0][0] === "o" && playGrid[1][1] === "o" && playGrid[2][2] === "o";
    let diag2Win = playGrid[0][2] === "o" && playGrid[1][1] === "o" && playGrid[0][2] === "o";

    let col1Lose = playGrid[0][0] === "x" && playGrid[1][0] === "x" && playGrid[2][0] === "x";
    let col2Lose = playGrid[0][1] === "x" && playGrid[1][1] === "x" && playGrid[2][1] === "x";
    let col3Lose = playGrid[0][2] === "x" && playGrid[1][2] === "x" && playGrid[2][2] === "x";

    let row1Lose = playGrid[0][0] === "x" && playGrid[0][1] === "x" && playGrid[0][2] === "x";
    let row2Lose = playGrid[1][0] === "x" && playGrid[1][1] === "x" && playGrid[1][2] === "x";
    let row3Lose = playGrid[2][0] === "x" && playGrid[2][1] === "x" && playGrid[2][2] === "x";

    let diag1Lose = playGrid[0][0] === "x" && playGrid[1][1] === "x" && playGrid[2][2] === "x";
    let diag2Lose = playGrid[0][2] === "x" && playGrid[1][1] === "x" && playGrid[0][2] === "x";

    if (col1Win || col2Win || col3Win || row1Win || row2Win || row3Win || diag1Win || diag2Win){
        player1.score++;
        player1.win = true;
        setScore();
        console.log("player 1 won");
   } if (col1Lose || col2Lose || col3Lose || row1Lose || row2Lose || row3Lose || diag1Lose || diag2Lose) {
        player2.score++;
        player2.win = true;
        setScore();
        console.log("player 2 won");
   } else {
       console.log("Keep playing");
   }
}

function setScore(){
    if (player1.win === true){
        playerScore1.textContent = player1.score;
    } if (player2.win === true){{
        playerScore2.textContent = player2.score;
    }}
}

for (let i = 0; i < gridItemsList.length; i++) {
    const element = gridItemsList[i]
    element.addEventListener("click",function(){
        if (gridValueChecker(element) === true){
            gridItemsList[i].src = currentSign();
            swapCurrentPlayer();
            conditionReviewer();
        } else {
            console.log("error")
        }
    });
};

restartButton.addEventListener("click",function(){
    for (let i = 0; i < playGrid.length; i++) {
        for (let e = 0; e < playGrid[i].length; e++) {
            playGrid[i][e] = "-";
        }
    }
    for (let e = 0; e < gridItemsList.length; e++) {
        const element = gridItemsList[e];
        element.src = "assets/empty_icon.svg";
    }
    player1.win = false;
    player2.win = false;
    console.log(playGrid.flat())
})