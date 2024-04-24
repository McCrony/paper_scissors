
let playerScore = 0;
let computerScore =0;
let playerSelection;
let computerSelection;


const rock = document.querySelector(".rockBtn");
rock.addEventListener('click', () => {
    playerSelection = "ROCK"
    game();
});

const paper = document.querySelector('.paperBtn');
paper.addEventListener('click', () => {
    playerSelection = "PAPER";
    game();
})

const scissors = document.querySelector('.scissorsBtn');
scissors.addEventListener('click', () => {
    playerSelection = "SCISSORS";
    game();
})

// function start(){
//     for(let a =0; a<=4; a++){
//         computerSelection
//         game();
//     };
    
//     getResults();
// }

function getComputerChoice(){
    const compOptions = ["Rock", "Scissors" , "Paper"];
    const compChoice = Math.floor(Math.random() * compOptions.length);
    return compOptions[compChoice]
}


function playRound(playerSelection, computerSelection){
   
    // ROCK BEATS SCISSORS
    if (playerSelection == "ROCK" && computerSelection === "Scissors") {
            userWinAlert();
    }else if(computerSelection === "Rock" && playerSelection == "SCISSORS"){
            computerWinAlert();
    } 
    
    // SCISSORS BEAT PAPER
    else if (playerSelection== "SCISSORS" && computerSelection === "Paper"){
            userWinAlert();
    }else if(computerSelection === "Scissors" && playerSelection == "PAPER"){
        computerWinAlert();
    } 
    
    // PAPER BEAT ROCK
    else if(playerSelection== "PAPER" && computerSelection === "Rock"){
        userWinAlert();
    }else if(computerSelection === "Paper" && playerSelection== "ROCK"){
        computerWinAlert();
    }

    else{
        alert("It's a fair game " + "Com: " + computerSelection);
        alert("Your score: " + playerScore + " Com Score: " + computerScore);  
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
    alert("You Won! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + " Com: " + computerSelection);
    alert("Your score: " + playerScore + " Com Score: " + computerScore);  
}

//COMPUTER WIN ALERT
function computerWinAlert(){
    computerScore++;
    alert("Computer Won! " + computerSelection.toUpperCase() +  " beats " + playerSelection.toUpperCase() + " Com: " + computerSelection);
    alert("Your score: " + playerScore + " Com Score: " + computerScore);
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