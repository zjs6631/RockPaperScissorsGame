

function playerSelection(){
    let pSelection = (prompt("Rock Paper or Scissors? : "));
    return pSelection
}

function getRandomIntInclusive(){ //found online to get randint
    let min = Math.ceil(0);
    let max = Math.floor(2);

    return Math.floor(Math.random()* (max - min + 1) + min);
}

function computerSelection(){
    const choices = ["rock", "paper", "scissors"]
    
    console.log(getRandomIntInclusive()); // checking to make sure random int worked
    let cSelection = choices[getRandomIntInclusive()]
    return cSelection
}

let pWin = 0;
let cWin = 0;

function playRound(pSelection, cSelection){
    pSelection = pSelection.toLowerCase()
    console.log(pSelection)
    console.log(cSelection)

    if (pSelection == cSelection){
        console.log("It's a tie!")
    } else if ((pSelection == "rock")&&(cSelection == "scissors")){
        console.log("You win! rock beats scissors!")
        pWin++;
    } else if ((pSelection == "paper")&&(cSelection == "rock")){
        console.log("You win! paper beats rock!")
        pWin++
    } else if ((pSelection == "scissors")&&(cSelection == "paper")){
        console.log("You win! scissors beats paper!")
        pWin++
    } else {
        console.log("You lose! try again!")
        cWin++
    }
    
}

//console.log(playRound(playerSelection(), computerSelection()))

for (let i = 0; i < 5; i++){
    playRound(playerSelection(), computerSelection())
}

console.log(pWin);
console.log(cWin);

if (pWin > cWin){
    console.log("You've won the game!")
} else{
    console.log("The computer won the game!")
}