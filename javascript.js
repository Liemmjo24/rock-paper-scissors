let playerScore = 0;
let computerScore = 0;
let tieScore = "It's a tie!";
const buttons = document.querySelectorAll('input');


function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
// generate random between rock paper scissors
function getComputerChoice(){
    let words = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}


// determines whether the player or computer won
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = ""

    // if both used the same hand, its a tie
    if (playerSelection === computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    // if the player won, adds a point to player
    if(
        (playerSelection == 'rock' && computerSelection == 'scissors'),
        (playerSelection == 'scissors' && computerSelection == 'paper'),
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        playerScore++
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }

    if (playerScore === 5){
        result += 'You won the game!'
        disableButtons()
    }
    //if the computer won, add a point to computer
    if(
        (computerSelection == 'rock' && playerSelection == 'scissors'),
        (computerSelection == 'scissors' && playerSelection == 'paper'),
        (computerSelection == 'paper' && playerSelection == 'rock')
    ){
        computerScore++
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    if (computerScore === 5)
    {
        result += '<br><br>I won the game! Reload the page to play again'
        disableButtons()
    }
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
