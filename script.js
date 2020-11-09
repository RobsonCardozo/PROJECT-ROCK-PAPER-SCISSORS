// Variables
let userInput
let compInput
const displayResult = document.getElementById('result')
const userChoice = document.getElementById('user-choice')
var result = results()
const possibleChoices = document.querySelectorAll('.choices')
const computerChoice = document.getElementById('comp-choice')
const randomNumber = Math.round(Math.random() * (3))

// User choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userInput = e.target.id
  generatedComputerChoice()
  results()
  userChoice.innerHTML = userInput
  computerChoice.innerHTML = compInput
  displayResult.innerHTML = result
}))

//Computer choice (random)
function generatedComputerChoice() {
  const randomNumber = Math.round(Math.random() * (3))
  if (randomNumber === 1) {
    return compInput = 'Rock'
  } else if (randomNumber === 2) {
    return compInput = 'Paper'
  } else if (randomNumber === 3) {
    return compInput = 'Scissors'
  }
}

//Conditionals
function results() {
  if (compInput == userInput) {
    return result = 'Draw...'
  } else if (compInput === 'Rock' && userInput === 'Paper') {
    return result = 'You Lose...'
  } else if (compInput === 'Rock' && userInput === 'Scissors') {
    return result = 'You WIN!'
  } else if (compInput === 'Paper' && userInput === 'Rock') {
    return result = 'You Lose...'
  } else if (compInput === 'Paper' && userInput === 'Scissors') {
    return result = 'You WIN!'
  } else if (compInput === 'Scissors' && userInput === 'Rock') {
    return result = 'You WIN!'
  } else if (compInput === 'Scissors' && userInput === 'Paper') {
    return result = 'You Lose...'
  }
}