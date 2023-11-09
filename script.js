
let playerScore = 0;
let computerScore =0;
const rockVariations = ["Rock", "rock", "ROCK", "RoCK", "rocK", "rOck"];
const scissorsVariatons = ["Scissors", "scissors", "SCISSORS", "scissor", "Scissor", "SCISSOR"];
const paperVariations = ["Paper", "paper", "PAPER"];
let computerSelection = getComputerChoice();

for(let a =0; a<=4; a++){
    game();
};

getResults();



function getComputerChoice(){
    const compOptions = ["Rock", "Paper" , "Scissors"];
    const compChoice = Math.floor(Math.random() * compOptions.length);
    return compOptions[compChoice]
}
function playRound(playerSelection, computerSelection){
   
    // ROCK BEATS SCISSORS
    if (rockVariations.includes(playerSelection) && computerSelection === "Scissors") {
            userWinAlert();
    }else if(computerSelection === "Rock" && scissorsVariatons.includes(playerSelection)){
            computerWinAlert();
    } 
    
    // SCISSORS BEAT PAPER
    else if (scissorsVariatons.includes(playerSelection) && computerSelection === "Paper"){
            userWinAlert();
    }else if(computerSelection === "Scissors" && paperVariations.includes(playerSelection)){
        computerWinAlert();
    } 
    
    // PAPER BEAT ROCK
    else if(paperVariations.includes(playerSelection) && computerSelection === "Rock"){
        userWinAlert();
    }else if(computerSelection === "Paper" && rockVariations.includes(playerSelection)){
        computerWinAlert();
    }

    else{
        alert("It's a fair game " + "Com: " + computerSelection);
        alert("Your score: " + playerScore + " Com Score: " + computerScore);  
    }
}


function game(){
    let playerSelection = prompt("Enter your choice");
    playRound(playerSelection, computerSelection);
}

function getResults(){
    if(playerScore>computerScore){
        alert("You won the game with " + playerScore + " Score")
    }else if (playerScore==computerScore){
        alert("No winner declared")
    }else{
        alert("You lose! Computer won with " + computerScore);
    }
}

function userWinAlert(){
    playerScore++ ;
    alert("You Win!" + playerSelection + " beats" + computerSelection + "Com: " + computerSelection);
    alert("Your score: " + playerScore + " Com Score: " + computerScore);  
}

function computerWinAlert(){
    computerScore++;
    alert("Computer wins!" + computerSelection +  "beats " + playerSelection + "Com: " + computerSelection);
    alert("Your score: " + playerScore + " Com Score: " + computerScore);
}
