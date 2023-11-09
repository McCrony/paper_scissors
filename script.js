
let playerScore = 0;
let computerScore =0;
const rockVariations = ["Rock", "rock", "ROCK", "RoCK", "rocK", "rOck"];
const scissorsVariatons = ["Scissors", "scissors", "SCISSORS"];
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
   
    if (rockVariations.includes(playerSelection) && computerSelection === "Scissors") {
        alert("You Win! Rock beats Scissors" + "Com: " + computerSelection);
        alert("Your score: " + playerScore++ + "Com Score: " + computerScore);  
    }else if(computerSelection === "Rock" && scissorsVariatons.includes(playerSelection)){
        alert("Computer wins! Rock beats Scissors " + "Com: " + computerSelection);
        alert("Your score: " + playerScore + "Com Score: " + computerScore++);
    } 
    
    else if (scissorsVariatons.includes(playerSelection) && computerSelection === "Paper"){
       alert("You Win! Scissors beats Paper" + "Com: " + computerSelection);
       alert("Your score: " + playerScore++ + "Com Score: " + computerScore);  
    }else if(computerSelection === "Scissors" && paperVariations.includes(playerSelection)){
        alert("Computer wins! Scissors beats Paper " + " Com: " + computerSelection);
        alert("Your score: " + playerScore + "Com Score: " + computerScore++);  
    } 
    
    else if(paperVariations.includes(playerSelection) && computerSelection === "Rock"){
        alert("You Win! Paper beats Rock" + "Com: " + computerSelection);
        alert("Your score: " + playerScore++ + "Com Score: " + computerScore);  
    }else if(computerSelection === "Paper" && rockVariations.includes(playerSelection)){
        alert("Computer wins! Paper beats Rock " + "Com: " + computerSelection);
        alert("Your score: " + playerScore + "Com Score: " + computerScore++);  
    }

    else{
        alert("It's a fair game" + "Com: " + computerSelection);
        alert("Your score: " + playerScore + "Com Score: " + computerScore);  
    }
    // alert("Your score: " + playerScore + " : " + "Computer Score: " + computerScore);

}


function game(){

    let playerSelection = prompt("Enter your choice");

    playRound(playerSelection, computerSelection);
}

function getResults(){
    if(playerScore>computerScore){
        alert("You won the game with " + playerScore + "Score")
    }else{
        alert("You lose! ")
    }
}
