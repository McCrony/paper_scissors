
const userScore = 0;
const computerScore =0;
const rockVariations = ["Rock", "rock", "ROCK", "RoCK", "rocK", "rOck"];
const scissorsVariatons = ["Scissors", "scissors", "SCISSORS"];
const paperVariations = ["Paper", "paper", "PAPER"];
const computerSelection = getComputerChoice();

let playerSelection = prompt("Enter your choice");

alert(computerSelection + " " + playerSelection);


function getComputerChoice(){
    const compOptions = ["Rock", "Paper" , "Scissors"];
    const compChoice = Math.floor(Math.random() * compOptions.length);
    return compOptions[compChoice]
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors" + "Com: " + computerSelection);
        
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
       console.log("You lose! Rock beats Scissors")
    } else{
        console.log("Nothing happens");
    }
}


function game(){
    playRound(playerSelection, computerSelection);
}

for(let a = 0; a <=4; a++){
    game();
}
