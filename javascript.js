const rock = document.querySelector(".rockBtn");
rock.addEventListener("click", playRound);


const paper = document.querySelector(".paperBtn");
paper.addEventListener("click", playRound);

const scissors = document.querySelector(".scissorsBtn");
scissors.addEventListener("click", playRound);

       
function getComputerChoice () {
    result = Math.floor(Math.random() * 3) +1;
    if (result == 1) {
        alert("Rock");
    }
    else if (result == 2) {
        alert("Paper");
    }
    else if (result == 3) {
        alert("Scissors");
    }
    return result;
}

let humanScore = 0;
let computerScore = 0; 


function playRound(e) {
    let result = getComputerChoice(); 
    let eleccion = e.currentTarget.id;
    

    if ((eleccion === "rBtn" && result === 3) || 
        (eleccion === "pBtn" && result === 1) ||
        (eleccion === "sBtn" && result === 2)) {
        userWin();
    } 
    else if ((eleccion === "rBtn" && result === 2) || 
            (eleccion === "pBtn" && result === 3) ||
            (eleccion === "sBtn" && result === 1)) {
        pcWin();
    }
    else {
        draw();
    }

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore === 5) {
            notice.textContent = "Whhhhooooaaaa! You Win!";
        }
    
        if (computerScore === 5) {
            notice.textContent = "Sorry about that...You lose!"
        }
    
    }
}
       
let divUsuario = document.querySelector("#userPoints");

function userWin () {
    humanScore++;
    divUsuario.textContent = humanScore;
    divscoreUser.textContent = "You Win 1 point!";
}

let divPc = document.querySelector("#pcPoints");
let divscoreUser = document.querySelector("#contUser");

let divcontPc = document.querySelector("#contPc");

function pcWin () {
    computerScore++;
    divPc.textContent = computerScore;
    divcontPc.textContent = "Pc win 1 point";
}

function draw () {
    alert("DRAW!");
}

let notice = document.querySelector("#textNotice");


