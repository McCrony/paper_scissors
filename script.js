
let playerScore = 0;
let computerScore =0;
let playCounter=0;
let playerSelection;
let computerSelection;

const rock = document.querySelector(".rockBtn");
const paper = document.querySelector('.paperBtn');
const scissors = document.querySelector('.scissorsBtn');
const infoDiv = document.querySelector('.info');
const displayParagraph = document.createElement('p');
const compScore = document.querySelector('#computerScore');
const playScore = document.querySelector("#playerScore");

infoDiv.appendChild(displayParagraph);


//BUTTONS EVENT LISTNERS 
rock.addEventListener('click', () => {
    playerSelection = "ROCK"
    // getResults();
    game();
    playCounter++;
});

paper.addEventListener('click', () => {
    playerSelection = "PAPER";
    game();
    playCounter++;
})

scissors.addEventListener('click', () => {
    playerSelection = "SCISSORS";
    game();
    playCounter++;
})

function getComputerChoice(){
    const compOptions = ["ROCK", "SCISSORS" , "PAPER"];
    const compChoice = Math.floor(Math.random() * compOptions.length);
    return compOptions[compChoice]
}


function playRound(playerSelection, computerSelection){
   
    // ROCK BEATS SCISSORS
    if (playerSelection == "ROCK" && computerSelection === "SCISSORS") {
            userWinAlert();
    }else if(computerSelection === "ROCK" && playerSelection == "SCISSORS"){
            computerWinAlert();
    } 
    
    // SCISSORS BEAT PAPER
    else if (playerSelection== "SCISSORS" && computerSelection === "PAPER"){
            userWinAlert();
    }else if(computerSelection === "SCISSORS" && playerSelection == "PAPER"){
        computerWinAlert();
    } 
    
    // PAPER BEAT ROCK
    else if(playerSelection== "PAPER" && computerSelection === "ROCK"){
        userWinAlert();
    }else if(computerSelection === "PAPER" && playerSelection== "ROCK"){
        computerWinAlert();
    }
    
    else{
        displayParagraph.textContent= `Fair Game! ${playerSelection} matches ${computerSelection}`;
        compScore.textContent = `Computer Score: ${computerScore}`;
        playScore.textContent = ` Your score: ${playerScore}`; 
    }
}

//GAME PLAY
function game(){
    if (computerScore == 5 ) {
        alert("COMPUTER WINS THIS ROUND");
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore == 5){
        alert("YOU WON THIS ROUND");
        computerScore = 0;
        playerScore = 0;

    } else{
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

//USER WIN ALERT 
function userWinAlert(){
    playerScore++ ;
    displayParagraph.textContent= `You Won! ${playerSelection} beats ${computerSelection}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    playScore.textContent = ` Your score: ${playerScore}`;
}

//COMPUTER WIN ALERT
function computerWinAlert(){
    computerScore++;
    displayParagraph.textContent= `Computer Won! ${computerSelection} beats ${playerSelection}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    playScore.textContent = ` Your score: ${playerScore}`;
}

//FINAL RESULTS 
function getResults(){
    if(playerScore == 5){
        alert("You won the game with " + playerScore + " Score")
    }else if (computerScore == 5){
        alert("Computer won the game with " + computerScore + " Score")
    }else  {
        game();
    }
}