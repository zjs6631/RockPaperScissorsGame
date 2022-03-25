
//created variables to represent the buttons and players selection
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
let pSelection = "Default";
let pChoice = document.getElementById("weapon");

//add event listener to each button to wait on players choice
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
    const choices = ["rock", "paper", "scissors"] //array of computer options
    
    console.log(getRandomIntInclusive()); // checking to make sure random int worked
    let cSelection = choices[getRandomIntInclusive()] //rolls random int a second time
    //displays the choice of the computer
    let compChoice = document.getElementById("compWeapon");
    if (cSelection == "rock"){
        compChoice.textContent = "Rock!"
    } else if (cSelection == "paper"){
        compChoice.textContent = "Paper!"
    } else if (cSelection == "scissors"){
        compChoice.textContent = "Scissors!"
    }
    //returns the choice of the computer
    return cSelection
}

//create counters to keep tracks of W/L during session
let pWin = 0;
let pDisplay = document.getElementById("winCounter");
let cWin =  0;
let cDisplay = document.getElementById("lossCounter");


//define playRound function that determines the winner based of comp choice and player choice
function playRound(pSelection, cSelection){
    
    //logged the selections to make sure the data was being passed in correctly
    console.log(pSelection)
    console.log(cSelection)

    //variable to display results
    let results = document.getElementById("WL");

    //if/elseif to determine winner and add to counters
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
    
    //update the counters
    pDisplay.textContent = pWin;
    cDisplay.textContent = cWin;
}

//console.log(playRound(playerSelection(), computerSelection()))
function game(){
    //make the play button a variable
    const playbtn = document.getElementById("play");

    //when clicked it takes in the current pSelection and calls computerSelection()
    playbtn.addEventListener('click',()=>{
        playRound(pSelection, computerSelection())
    })
   
    //was a 5 round function, but didnt need after adding UI
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

//was logging the winner of the game
console.log(game());