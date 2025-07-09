let humanScore = 0;
let computerScore = 0;




let getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    let chosenOption;

    if(randomNumber === 0){
        chosenOption = "rock";
    } else if (randomNumber === 1){
        chosenOption = "paper";
    } else {
        chosenOption = "scizor";
    }
    
    return chosenOption;
}


let getHumanChoice = () => {
    let choice = prompt("Enter your choice! ");
    choice = choice.toLowerCase();
    return choice;
}

let playRound  = (humanChoice, computerChoice) => {
  if(humanChoice === "rock" && computerChoice === "paper"){
    console.log("You Lose! paper beats rock " + computerChoice);
    computerScore++;
  } else if(humanChoice === "rock" && computerChoice === "scizor"){
    console.log("You Win! rock beats scizor");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scizor"){
    console.log("You Lose! scizor beats paper");
    computerScore++;
  } else if(humanChoice === "paper" && computerChoice === "rock"){
    console.log("You Win! paper beats rock");
    humanScore++;
  } else if (humanChoice === "scizor" && computerChoice === "rock"){
    console.log("You Lose! rock beat scizor");
    computerScore++;
  } else if(humanChoice === "scizor" && computerChoice === "paper"){
     console.log("You Win! scizor beats paper")
      humanScore++;
  } else {
    console.log("DRAW");
  }
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

