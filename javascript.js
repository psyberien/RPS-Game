let humanScore = 0;
let computerScore = 0;


let playGame = () => {

let choice = ["rock", "paper", "scissors"];
const body = document.querySelector("#body");

const div = document.createElement("div");
div.classList.add("divResults");
body.appendChild(div);
const divResults = document.querySelector(".divResults");
 
let paraPlayer = document.createElement("p");
paraPlayer.classList.add("paraPlayer");
paraPlayer.textContent = "Player Score: " + humanScore;
paraPlayer.style.margin = 0;
divResults.appendChild(paraPlayer);

let paraComp = document.createElement("p");
paraComp.classList.add("paraComp");
paraComp.textContent = "Computer Score: " + computerScore;
paraComp.style.margin = 0;
divResults.appendChild(paraComp);

let paraResult = document.createElement("p");
paraResult.classList.add("paraResult");
paraResult.textContent = "";
divResults.appendChild(paraResult);

let gameResult = document.createElement("p");
gameResult.textContent = "";
divResults.appendChild(gameResult);

  
let menuBtns = document.querySelector("#menuBtns");
menuBtns.addEventListener("click", (e) => {
  let target = e.target;

  switch(target.id){
    case "btnRock":
      playRound("rock");
      break;
    case "btnPaper":
      playRound("paper");
      break;
    case "btnScissors":
      playRound("scissors");
      break;
  }
})


function playRound(playerSelection){
  
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];

  if(playerSelection === computerChoice){
    paraResult.textContent = "DRAW!";
    paraPlayer.textContent = "Player Score: " + humanScore;
    paraComp.textContent = "Computer Score: " + computerScore;
    gameResult.textContent = "";
  } else {
      switch(playerSelection){
        case "rock":
          if(computerChoice === "scissors") {
            paraResult.textContent = "You win!";
            humanScore++;
            paraPlayer.textContent = "Player Score: " + humanScore;
            paraComp.textContent = "Computer Score: " + computerScore;
            gameResult.textContent = "";
          } else {
            paraResult.textContent = "You lose!";
            computerScore++;
            paraPlayer.textContent = "Player Score: " + humanScore;
            paraComp.textContent = "Computer Score: " + computerScore;
            gameResult.textContent = "";
          }
          break;
        case "paper":
          if(computerChoice === "rock"){
            paraResult.textContent = "You win!";
            humanScore++;
            paraPlayer.textContent = "Player Score: " + humanScore;
            paraComp.textContent = "Computer Score: " + computerScore;
            gameResult.textContent = "";
          } else {
            paraResult.textContent = "You lose!";
            computerScore++;
            paraPlayer.textContent = "Player Score: " + humanScore;
            paraComp.textContent = "Computer Score: " + computerScore;
            gameResult.textContent = "";
          }
          break;
        case "scissors":
          if(computerChoice === "paper"){
            paraResult.textContent = "You win!";
            humanScore++;
            paraPlayer.textContent = "Player Score: " + humanScore;
            paraComp.textContent = "Computer Score: " + computerScore;
            gameResult.textContent = "";
          } else {
            paraResult.textContent = "You lose!";
            computerScore++;
            paraPlayer.textContent = "Player Score: " + humanScore;
            paraComp.textContent = "Computer Score: " + computerScore;
            gameResult.textContent = "";
          }
          break;
      }
  }

  if(humanScore === 5){
  gameResult.textContent = "CONGRATULATIONS!! YOU WON THE GAME!";
  gameResult.style.color = "green";
  gameResult.style.fontSize = "50px";
  humanScore = 0;
  computerScore = 0;
} else if(computerScore === 5){
  gameResult.textContent =  "YOU SUCK!! COMPUTER WON THE GAME!";
  gameResult.style.color = "red";
  gameResult.style.fontSize = "50px";
  humanScore = 0;
  computerScore = 0;
  
}
}

}


playGame();