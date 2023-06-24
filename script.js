const getComputerChoice =
    (Math.floor(Math.random() * 3) + 1) === 1 ? "rock"
        : (Math.floor(Math.random() * 3) + 1) === 2 ? "paper"
            : "scissors";


const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);


// Looks at player selection and computer selection and finds out who one and console logs it
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "You tie"
        } else if (computerSelection === "paper") {
            return "You lose, Paper beats Rock"
        } else {
            return "You win, Rock beats Scissors"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win, Paper beats Rock"
        } else if (computerSelection === "paper") {
            return "You tie"
        } else {
            return "You lose, Scissors beats Paper"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose, Rock beats Scissors"
        } else if (computerSelection === "paper") {
            return "You win, Scissors beats Paper"
        } else {
            return "You tie"
        }
    } else {
        return "Please choose between rock, paper or scissors"
    }

};

console.log(playRound(playerSelection, getComputerChoice));

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let i = 0;
    while (i < 5) {
        console.log(i)
        i++
    };
};

game();