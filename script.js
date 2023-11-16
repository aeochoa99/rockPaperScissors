function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
                   computerSelection == 'paper' && playerSelection == 'rock' ||
                   computerSelection == 'scissors' && playerSelection == 'paper') {
                    return `You lose! ${computerSelection} beats ${playerSelection}`;
                   } else {
                    return `It's a tie! You both selected ${computerSelection}`;
                   }
}
let userScore = 0;
let cpuScore = 0;

const div = document.querySelector('.results');


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    div.textContent = '';
    const playerSelection = 'rock';
    const result = playRound(playerSelection);
    div.append(result);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    div.textContent = '';
    const playerSelection = 'paper';
    const result = playRound(playerSelection);
    div.append(result);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    div.textContent = '';
    const playerSelection = 'scissors';
    const result = playRound(playerSelection);
    div.append(result);
});

function updateScoreboard() {
    const user = document.querySelector('.userScore');
    const cpu = document.querySelector('.cpuScore');

    user.textContent = userScore;
    cpu.textContent = cpuScore;
}

function resetScoreboard() {
    userScore = 0;
    cpuScore = 0;
}