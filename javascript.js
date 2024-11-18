
function getHumanChoice () {
    eleccion = prompt("Ingresa tu elección");
    if (eleccion.toLowerCase() === "rock") {
        return "rock";
    }
    else if (eleccion.toLowerCase() === "paper") {
        return "paper";
    }
    else if (eleccion.toLowerCase() === "scissors") {
        return "scissors";
    }

}


function getComputerChoice () {
    result = Math.floor(Math.random() * 3) +1;
    if (result == 1) {
        console.log("rock");
    }
    else if (result == 2) {
        console.log("paper");
    }
    else {
        console.log("scissors");
    }
    return result;
}

console.log();


let humanScore = 0;
let computerScore = 0; 

function playRound() {

    let eleccion = getHumanChoice();
    let result = getComputerChoice(); 

    if (
        (eleccion === "rock" && result === 1) ||
        (eleccion === "paper" && result === 2) ||
        (eleccion === "scissors" && result === 3)
    ) {
        console.log("Draw!");
    }
    else if (eleccion === "rock" && result === 2) {
        
        console.log("You lose! the paper beats the stone");
        computerScore++;  
    }
    else if (eleccion === "paper" && result === 3) {
        
        console.log("You lose! the scissors beat the paper")
        computerScore++;
    }
    else if (eleccion === "scissors" && result === 1) {
        
        console.log ("You lose! the stone beats scissors")
        computerScore++;
    }
    else if (eleccion === "rock" && result === 3) {
        
        console.log ("You win! stone beats scissors")
        humanScore++;
    }
    else if (eleccion === "paper" && result === 1) {
        
        console.log ("You win! Paper beats stone")
        humanScore++;
    }
    else if (eleccion === "scissors" && result === 2) {

        console.log ("You win! Scissors beat paper")
        humanScore++;

    }else {
        console.log("Entry no valid");
    }
}
        

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound();       
    }
}

playGame();

console.log("Your score is " + humanScore + " Machine's score is " + computerScore);


function score() {
    if (humanScore === computerScore) {
        console.log ("Draw! Your score: " + humanScore + " Opponent score: " + computerScore);
    }
    
    if (humanScore > computerScore) {
        console.log("Win! Your score: " + humanScore + " Opponent score: " + computerScore);
    }
    
    if (humanScore < computerScore) {
        console.log("You lose! Your score: " + humanScore + " Opponent score " + computerScore);
    }
}

score()

