
const playerScore = 0;
const computerScore =0;
const rockVariations = ["Rock", "rock", "ROCK", "RoCK", "rocK", "rOck"];
const scissorsVariatons = ["Scissors", "scissors", "SCISSORS"];
const paperVariations = ["Paper", "paper", "PAPER"];
const computerSelection = getComputerChoice();



game();

function getComputerChoice(){
    const compOptions = ["Rock", "Paper" , "Scissors"];
    const compChoice = Math.floor(Math.random() * compOptions.length);
    return compOptions[compChoice]
}

function playRound(playerSelection, computerSelection){

    let playerSelection = prompt("Enter your choice");

    if (rockVariations.includes(playerSelection) && computerSelection === "Scissors") {
        alert("You Win! Rock beats Scissors" + "Com: " + computerSelection);   
        alert( "Your score: " + playerScore++);
    }else if(computerSelection === "Rock" && scissorsVariatons.includes(playerSelection)){
        alert("Computer wins! Rock beats Scissors " + "Com: " + computerSelection);
        computerScore++;
    } 
    
    else if (scissorsVariatons.includes(playerSelection) && computerSelection === "Paper"){
       alert("You Win! Scissors beats Paper" + "Com: " + computerSelection);
       playerScore++;
    }else if(computerSelection === "Scissors" && paperVariations.includes(playerSelection)){
        alert("Computer wins! Scissors beats Paper " + " Com: " + computerSelection);
        computerScore++;
    } 
    
    else if(paperVariations.includes(playerSelection) && computerSelection === "Rock"){
        alert("You Win! Paper beats Rock" + "Com: " + computerSelection);
        playerScore++;
    }else if(computerSelection === "Paper" && rockVariations.includes(playerSelection)){
        alert("Computer wins! Paper beats Rock " + "Com: " + computerSelection);
        computerScore++;
    }

    else{
        alert("It's a fair game" + "Com: " + computerSelection);
    }

    alert("Your score: " + playerScore + " : " + "Computer Score: " + computerScore);

}


function game(){
    playRound(playerSelection, computerSelection);
}
