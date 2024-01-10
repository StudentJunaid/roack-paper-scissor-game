var computerChoiceDisplay = document.getElementById("Computer-Choise")
var yourChoiceDisplay  = document.getElementById("your-Choise")
var DisplayResult = document.getElementById("Result")
var possibleChoice = document.querySelectorAll("button");
let userChoice;
let ComputerChoice;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id 
    yourChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getresult()
}))


function generateComputerChoice(){
   const randomNum = Math.floor(Math.random()* 3 + 1)
   console.log(randomNum)
   if(randomNum === 1){
    ComputerChoice = 'rock'
   }
   if(randomNum === 2){
    ComputerChoice = 'paper'
   }
   if(randomNum === 3){
    ComputerChoice = 'scissors'
   }
   computerChoiceDisplay.innerHTML = ComputerChoice;
}

function getresult(){
    if(userChoice === ComputerChoice){
       result = 'match is draw'
    }
    if(userChoice === 'rock' && ComputerChoice === 'scissor'){
        result = 'you win'
    }
    if(userChoice === 'rock' && ComputerChoice === 'paper'){
        result = 'you lost'
    }
    if(userChoice === 'paper' && ComputerChoice === 'rock'){
        result = 'you win'
    }
    if(userChoice === 'paper' && ComputerChoice === 'scissors'){
        result = 'you lost'
    }
    if(userChoice === 'scissors' && ComputerChoice === 'paper'){
        result = 'you win'
    }
    if(userChoice === 'scissors' && ComputerChoice === 'rock'){
        result = 'you lost'
    }
    DisplayResult.innerHTML = result;
}