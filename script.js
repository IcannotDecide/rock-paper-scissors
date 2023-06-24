const getComputerChoice =
    (Math.floor(Math.random() * 3) + 1) === 1 ? "rock"
    : (Math.floor(Math.random() * 3) + 1) === 2 ? "paper"
    : "scissors";


const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("You tie, computer chose rock")
        } else if (computerSelection === "paper") {
            console.log("You lose, computer chose paper")
        } else {
            console.log("You win, computer chose scissors")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win, computer chose rock")
        } else if (computerSelection === "paper") {
            console.log("You tie, computer chose paper")
        } else {
            console.log("You lose, computer chose scissors")
        }  
    } else {
    if (computerSelection === "rock") {
        console.log("You lose, computer chose rock")
    } else if (computerSelection === "paper") {
        console.log("You win, computer chose paper")
    } else {
        console.log("You tie, computer chose scissors")
    }
}
    
};

playRound(playerSelection, getComputerChoice)