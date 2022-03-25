

const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
let pSelection = "Default";
let pChoice = document.getElementById("weapon");

rockbtn.addEventListener('click', ()=>{
    pChoice.textContent = ("Rock!");
    pSelection = "rock";
        
})

paperbtn.addEventListener('click', ()=>{
    pChoice.textContent = ("Paper!");
    pSelection = "paper";
        
})

scissorsbtn.addEventListener('click', ()=>{
    pChoice.textContent = ("Scissors!");
    pSelection = "scissors";
        
})



    





function getRandomIntInclusive(){ //found online to get randint
    let min = Math.ceil(0);
    let max = Math.floor(2);

    return Math.floor(Math.random()* (max - min + 1) + min);
}

function computerSelection(){
    const choices = ["rock", "paper", "scissors"]
    
    console.log(getRandomIntInclusive()); // checking to make sure random int worked
    let cSelection = choices[getRandomIntInclusive()] //rolls random int a second time
    let compChoice = document.getElementById("compWeapon");
    if (cSelection == "rock"){
        compChoice.textContent = "Rock!"
    } else if (cSelection == "paper"){
        compChoice.textContent = "Paper!"
    } else if (cSelection == "scissors"){
        compChoice.textContent = "Scissors!"
    }

    return cSelection
}

let pWin = 0;
let pDisplay = document.getElementById("winCounter");
let cWin =  0;
let cDisplay = document.getElementById("lossCounter");

function playRound(pSelection, cSelection){
    
    console.log(pSelection)
    console.log(cSelection)
    let results = document.getElementById("WL");

    if (pSelection === cSelection){
        results.textContent = "It's a tie!"
        results.style.backgroundColor = "yellow";
    } else if ((pSelection == "rock")&&(cSelection == "scissors")){
        results.textContent = "You win!"
        results.style.backgroundColor = "green";
        pWin++;
    } else if ((pSelection == "paper")&&(cSelection == "rock")){
        results.textContent = "You win!"
        results.style.backgroundColor = "green";
        pWin++
    } else if ((pSelection == "scissors")&&(cSelection == "paper")){
        results.textContent = "You win!"
        results.style.backgroundColor = "green";
        pWin++
    } else {
        console.log("You lose! try again!")
        results.textContent = "You lose!"
        results.style.backgroundColor = "red";
        cWin++
    }
    
    pDisplay.textContent = pWin;
    cDisplay.textContent = cWin;
}

//console.log(playRound(playerSelection(), computerSelection()))
function game(){
    
    const playbtn = document.getElementById("play");

    playbtn.addEventListener('click',()=>{
        playRound(pSelection, computerSelection())
    })
    /*for (let i = 0; i < 5; i++){
    playRound(playerSelection(), computerSelection())
    }
    console.log(pWin);
    console.log(cWin);
    
    if (pWin > cWin){
        console.log("You've won the game!")
    } else{
    console.log("The computer won the game!")
    }
    */
}

console.log(game());