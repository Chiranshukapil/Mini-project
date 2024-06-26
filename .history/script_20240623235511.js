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
    else if(guess<1){
        alert("Please enter number greater than 0")
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        Prevguesses.push(guess)
        if(numguesses===11){
            displayguess(guess)
            displaymessage(`Game Over. Random number was ${randomnumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess===randomnumber){
        displaymessage("You Guessed it right")
        endgame()
    }else if(guess<randomnumber){
        displaymessage("Your guess is tooooooooo low")
    }else if(guess>randomnumber){
        displaymessage("Your guess is tooooooooo high")
    }
}

function displayguess(guess){
    userinput.value=''
    if()
    guessslot.innerHTML += `${guess}, `
    numguesses++
    remaining.innerHTML = `${11-numguesses}`
}

function displaymessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new game</h2>'
    startover.appendChild(p)
    playgame = false
    newgame()
}

function newgame(){

}