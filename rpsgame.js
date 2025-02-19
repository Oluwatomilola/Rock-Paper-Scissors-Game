let userScore = 0;
let computerScore = 0;

const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScores(winner);
    displayResult(winner, userChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function updateScores(winner) {
    if (winner === 'user') {
        userScore++;
        userScoreElement.textContent = userScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function displayResult(winner, userChoice, computerChoice) {
    if (winner === 'draw') {
        resultElement.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (winner === 'user') {
        resultElement.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultElement.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}

function pointsalert() {
    alert("Rock beats Scissors, Scissors beats Paper, Paper beats Rock.");
}


function readRules() {
     document.getElementById("rules").innerHTML = "if you win, you gain 1 point. If the computer wins, computer gains one point";
}


 function readRules() {
   alert( "if you win, you gain 1 point. If the computer wins, computer gains one point");
   
}