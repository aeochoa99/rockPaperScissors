function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = '';
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
            result = `You win! ${playerSelection} beats ${computerSelection}!`;
            userScore++;
        } else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
                   computerSelection == 'paper' && playerSelection == 'rock' ||
                   computerSelection == 'scissors' && playerSelection == 'paper') {
                    result = `You lose! ${computerSelection} beats ${playerSelection}`;
                    cpuScore++;
                   } else {
                    result = `It's a tie! You both selected ${computerSelection}`;
                   }
    if (userScore == 5 || cpuScore == 5) {
        resetScoreboard();
        disableButtons();
    }

    updateScoreboard();
    return result;
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
    const winner = document.querySelector('.winner');
    if (userScore == 5) {
        winner.textContent = `You won 5 to ${cpuScore}!`;
    } else if (cpuScore == 5) {
        winner.textContent = `You lost 5 to ${userScore}!`;
    }
}

const newGame = document.querySelector('#newGame');

newGame.addEventListener('click', () => {
    document.querySelector('.winner').textContent = '';
    div.textContent = '';
    userScore = 0;
    cpuScore = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    document.querySelector('.userScore').textContent = userScore;
    document.querySelector('.cpuScore').textContent = cpuScore;

});

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}