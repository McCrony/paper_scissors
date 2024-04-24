
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
const compScore = document.querySelector('.computerScore');
const playScore = document.querySelector(".playerScore");


infoDiv.appendChild(displayParagraph);


//BUTTONS EVENT LISTNERS 
rock.addEventListener('click', () => {
    playerSelection = "ROCK"
    game();
    // playCounter++;
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
       // alert("It's a fair game " + "Com: " + computerSelection);
        displayParagraph.textContent= `Fair Game! ${playerSelection} matches ${computerSelection}`;
        playScore.textContent = ` ${playerScore}`;
        compScore.textContent = `${computerScore}`;

        //alert("Your score: " + playerScore + " Com Score: " + computerScore);  
    }
}

//GAME PLAY
function game(){
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

//USER WIN ALERT 
function userWinAlert(){
    playerScore++ ;
    displayParagraph.textContent= `You Won! ${playerSelection} beats ${computerSelection}`;
    //alert("Your score: " + playerScore + " Com Score: " + computerScore);  
    playScore.textContent = ` ${playerScore}`;
}

//COMPUTER WIN ALERT
function computerWinAlert(){
    computerScore++;
    displayParagraph.textContent= `Computer Won! ${computerSelection} beats ${playerSelection}`;
    //alert("Your score: " + playerScore + " Com Score: " + computerScore);
    compScore.textContent = `${computerScore}`;
}

//FINAL RESULTS 
function getResults(){
    if(playerScore>computerScore){
        alert("You won the game with " + playerScore + " Score")
    }else if (playerScore==computerScore){
        alert("No winner declared")
    }else{
        alert("You lose! Computer won with " + computerScore);
    }
}