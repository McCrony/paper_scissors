
const userScore = 0;
const computerScore =0;
const rockVariations = ["Rock", "rock", "ROCK", "RoCK", "rocK", "rOck"];
const scissorsVariatons = ["Scissors", "scissors", "SCISSORS"];
const paperVariations = ["Paper", "paper", "PAPER"];
const computerSelection = getComputerChoice();

let playerSelection = prompt("Enter your choice");

// if(rockVariations.includes(playerSelection)){
// alert("Your input is " + playerSelection);
// }else{
//     alert("didn't work bro");
// };

game();

function getComputerChoice(){
    const compOptions = ["Rock", "Paper" , "Scissors"];
    const compChoice = Math.floor(Math.random() * compOptions.length);
    return compOptions[compChoice]
}

function playRound(playerSelection, computerSelection){

    if (rockVariations.includes(playerSelection) && computerSelection === "Scissors") {
        alert("You Win! Rock beats Scissors" + "Com: " + computerSelection);
        
    } else if (scissorsVariatons.includes(playerSelection) && computerSelection === "Paper"){
       alert("You lose! Rock beats Scissors" + "Com: " + computerSelection)
    } else if(paperVariations.includes(playerSelection) && computerSelection === "Rock"){
        alert("You Win! Paper beats Rock" + "Com: " + computerSelection);
    }else{
        alert("It's a fair game! " + "Com: " + computerSelection)
    }
}


function game(){
    playRound(playerSelection, computerSelection);
}

// for(let a = 0; a <=4; a++){
//     game();
// }
