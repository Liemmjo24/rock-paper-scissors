let playerScore;
let computerScore;

// generate random between rock paper scissors
function getComputerChoice(){
    let words = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() *words.length);
    return words[randomIndex];
}

// determines whether the player or computer won
function playRound(playerSelection, computerSelection) {

    // if both used the same hand, its a tie
    if (playerSelection === computerSelection) {
        return ('It\'s a tie!');
    }
    
    // if the player won, adds a point to player
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors'),
        (playerSelection === 'scissors' && computerSelection === 'paper'),
        (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        playerScore++;
        return('You win!');
    }

    //if the computer won, add a point to computer
    if(
        (computerSelection === 'rock' && playerSelection === 'scissors'),
        (computerSelection === 'scissors' && playerSelection === 'paper'),
        (computerSelection === 'paper' && playerSelection === 'rock')
    ){
        computerScore++
        return('Computer win!')
    }
}

// plays the game
function game(playerChoice){
    console.log("Best of 5 game!");

    // case-insensitive
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log('Computer chose ' + computerChoice);
    console.log(playRound(playerChoice, computerChoice));

    // shows the player won
    if(playRound(playerChoice, computerChoice) === 'You'){
        alert("Player won the round!");
    }
    // shows the computer won
    else if (playRound(playerChoice, computerChoice) ==='Computer'){
        alert('Computer won the round');
    }

    // 
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
// start of the game
function bestOfFive(){
    playerScore = 0;
    computerScore = 0;
    
    //allows the player to pick between rock paper scissors
    let playerChoice = prompt('rock, paper, scissors');
    game(playerChoice);
}

//shows the score at the end
function showScores(){
    alert(`Player score: ${playerScore}\n Computer Score:${computerScore}`);
}

bestOfFive();
showScores();