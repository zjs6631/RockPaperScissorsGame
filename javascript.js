

function playerSelection(){
    let pSelection = (prompt("Rock Paper or Scissors? : "));
    return pSelection
}

function getRandomIntInclusive(){
    let min = Math.ceil(0);
    let max = Math.floor(2);

    return Math.floor(Math.random()* (max - min + 1) + min);
}

function computerSelection(){
    const choices = ["rock", "paper", "scissors"]
    
    console.log(getRandomIntInclusive());
    let cSelection = choices[getRandomIntInclusive()]
    return cSelection
}

function playRound(pSelection, cSelection){
    
    console.log(pSelection)
    console.log(cSelection)

    if (pSelection == cSelection){
        console.log("It's a tie!")
    } else if ((pSelection == "rock")&&(cSelection == "scissors")){
        console.log("You win! rock beats scissors!")
    } else if ((pSelection == "paper")&&(cSelection == "rock")){
        console.log("You win! paper beats rock!")
    } else if ((pSelection == "scissors")&&(cSelection == "paper")){
        console.log("You win! scissors beats paper!")
    } else {
        console.log("You lose! try again!")
    }
    
}

console.log(playRound(playerSelection(), computerSelection()))