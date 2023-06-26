let playerWins = 0;
let computerWins = 0;
let ties = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]; 
};

function playRound(playerSelection, computerSelection) {

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



function game(buttonPressed) {
    console.log(playRound(buttonPressed, getComputerChoice()));

    if (playerWins > computerWins) {
        return `You win! ${playerWins}-${computerWins}`
    } else if (playerWins < computerWins) {
        return `You lose ${computerWins}-${playerWins}`
    } else {
        return `You tie ${playerWins}-${computerWins}`
    }
};

const rock = document.querySelector('button[data-choice="rock"]');
rock.addEventListener("click", () => game("rock"));

const paper = document.querySelector('button[data-choice="paper"]');
paper.addEventListener("click", () => game("paper"));

const scissors = document.querySelector('button[data-choice="scissors"]');
scissors.addEventListener("click", () => game("scissors"));