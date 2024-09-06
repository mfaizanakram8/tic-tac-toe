let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-game");
let message = document.querySelector(".message");
let win = document.querySelector("#win");

let turnO = true; //player1 ,player2

const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5],  
    [6, 7, 8],  
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6],  
];

const resetGame = () => {
    turnO = true;
    enabledBoxes ();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        message.classList.add("hide");
    }
}
const showWinner = (winner) => {
    win.innerText = `Congratulation, Winner is ${winner}`;
    message.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for( let  pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
;}
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);