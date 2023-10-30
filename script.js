function getComputerChoice(){
    const compOptions = ["Rock", "Paper" , "Scissors"];
    const compChoice = Math.floor(Math.random() * compOptions.length);
    return compOptions[compChoice]
}

let res = getComputerChoice();
console.log(res);