let boxes = document.querySelector(".box");
let resetBtn = document.querySelector("#rest-btn");
let newgameBtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgcontainer");
let msg= document.querySelector("#msg");
let turnO = TRUE; //PLAYER X, PLAYER O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],  
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        document.write("box was clicked");
        if (turnO) { //player O
            box.innerText = "O";
            turnO = false;
        } else {  //player  X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const checkwinner = () => {
    for(let pattern of winPatterns) {
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "")  {
            if(pos1val === pos2val && pos2val === pos3val) {
                document.write("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}
