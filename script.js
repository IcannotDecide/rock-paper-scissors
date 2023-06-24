function getComputerChoice() {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
        return "rock"
    } else if ((Math.floor(Math.random() * 3) + 1) === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};


let playerWins = 0;
let computerWins = 0;
let ties = 0;

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);


// Looks at player selection and computer selection and finds out who one and console logs it
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            ties++
            return "You tie"
        } else if (computerSelection === "paper") {
            computerWins++
            return "You lose, Paper beats Rock"
        } else {
            playerWins++
            return "You win, Rock beats Scissors"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWins++
            return "You win, Paper beats Rock"
        } else if (computerSelection === "paper") {
            ties++
            return "You tie"
        } else {
            computerWins++
            return "You lose, Scissors beats Paper"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWins++
            return "You lose, Rock beats Scissors"
        } else if (computerSelection === "paper") {
            playerWins++
            return "You win, Scissors beats Paper"
        } else {
            ties++
            return "You tie"
        }
    } else {
        return "Please choose between rock, paper or scissors"
    }

};



function game() {
    let i = 0;
    while (i < 5) {
        playRound(prompt("Choose rock, paper or scissors").toLowerCase(), getComputerChoice())
        console.log(playerWins, computerWins, ties)
        i++
    };
};

game();