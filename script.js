function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
                   computerSelection == 'paper' && playerSelection == 'rock' ||
                   computerSelection == 'scissors' && playerSelection == 'paper') {
                    return `You lose! ${computerSelection} beats ${playerSelection}`;
                   } else {
                    return `It's a tie! You both selected ${playerSelection}`;
                   }
}
let userScore = 0;
let cpuScore = 0;

const div = document.querySelector('.results');


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    div.textContent = '';
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    div.append(result);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    div.textContent = '';
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection,computerSelection);
    div.append(result);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    div.textContent = '';
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection,computerSelection);
    div.append(result);
});