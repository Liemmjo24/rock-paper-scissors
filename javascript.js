let playerScore;
let computerScore;

function getComputerChoice(){
    // generate random between rock paper scissors
    let words = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() *words.length);
    return words[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ('It\'s a tie!');
    }
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors'),
        (playerSelection === 'scissors' && computerSelection === 'paper'),
        (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        playerScore++;
        return('You win!');
    }
    if(
        (computerSelection === 'rock' && playerSelection === 'scissors'),
        (computerSelection === 'scissors' && playerSelection === 'paper'),
        (computerSelection === 'paper' && playerSelection === 'rock')
    ){
        computerScore++
        return('Computer win!')
    }
}

function game(playerChoice){
    console.log("Best of 5 game!");
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log('Computer chose ' + computerChoice);
    console.log(playRound(playerChoice, computerChoice));

    if(playRound(playerChoice, computerChoice) === 'You'){
        alert("Player won the round!");
        playerScore++;
    }
    else if (playRound(playerChoice, computerChoice) ==='Computer'){
        alert('Computer won the round');
        computerScore++;
    }

    if(playerScore === 5 || computerScore === 5){
        if(playerScore > computerScore){
            console.log('Player won best of five!');
            alert('Player won best of five!')
        }
        else if (computerChoice > playerScore)
        {
            console.log('Computer won the best of five!');
            alert('Computer won best of Five!')
        }
        else{
            console.log('It\'s a tie!');
            alert('It\'s a tie!');
        }
        return;
    }
    
    let playAgain = prompt('Want to try again? (yes or no)').toLowerCase();
    if (playAgain === 'yes'){
        let newUserChoice = prompt('rock, paper, scissors');
        game(newUserChoice);
    }
    else{
        alert('Thanks for playing!');
    }
}

function bestOfFive(){
    playerScore = 0;
    computerScore = 0;
    let playerChoice = prompt('rock, paper, scissors');
    game(playerChoice);
}

function showScores(){
    alert(`Player score: ${playerScore}\n Computer Score:${computerScore}`);
}

bestOfFive();
showScores();