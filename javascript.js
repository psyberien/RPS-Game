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


console.log(getComputerChoice());