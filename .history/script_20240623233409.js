const randomnumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let Prevguesses = []
let numguesses = 1

let playgame = true

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateguess(guess)
    })
}
function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1)
}

function checkGuess(guess){

}

function displayguess(guess){

}

function displaymessage(message){

}

function endgame(){

}

function newgame(){

}