const div = document.querySelector('div');
const buttons = document.querySelectorAll('buttons');

let playerWins = 0;
let computerWins = 0;
let ties = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {

        if (computerSelection === "rock") {
            ties++
            div.textContent = "You tie"
        } else if (computerSelection === "paper") {
            computerWins++
            div.textContent = "You lose, Paper beats Rock"
        } else {
            playerWins++
            div.textContent = "You win, Rock beats Scissors"
        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            playerWins++
            div.textContent = "You win, Paper beats Rock"
        } else if (computerSelection === "paper") {
            ties++
            div.textContent = "You tie"
        } else {
            computerWins++
            div.textContent = "You lose, Scissors beats Paper"
        }

    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock") {
            computerWins++
            div.textContent = "You lose, Rock beats Scissors"
        } else if (computerSelection === "paper") {
            playerWins++
            div.textContent = "You win, Scissors beats Paper"
        } else {
            ties++
            div.textContent = "You tie"
        }

    } else {
        return "Please choose between rock, paper or scissors"
    }
};




function game(buttonPressed) {


    if (playerWins === 5 || computerWins === 5) {
        

        if (playerWins > computerWins) { 
            return div.textContent = `You win! ${playerWins}-${computerWins}`
        } else if (playerWins < computerWins) {
        return div.textContent = `You lose ${computerWins}-${playerWins}`;
        }
    }

    playRound(buttonPressed, getComputerChoice());
};


const rock = document.querySelector('button[data-choice="rock"]');
rock.addEventListener("click", () => game("rock"));

const paper = document.querySelector('button[data-choice="paper"]');
paper.addEventListener("click", () => game("paper"));

const scissors = document.querySelector('button[data-choice="scissors"]');
scissors.addEventListener("click", () => game("scissors"));


