function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Make your choice");
    if (playerSelection !== null) {
        playerSelection = playerSelection.toLowerCase();
    } else {
        return "Maybe another time."
    }
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
