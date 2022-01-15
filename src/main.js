/// Query Selectors ///
var gameBoard = document.querySelector('.game-board')
var playerWins = document.querySelector('.player-wins')
var computerWins = document.querySelector('.computer-wins')
var turn = document.querySelector('.turn')
/// Event Listeners ///

gameBoard.addEventListener('click', function(event) {
  var id = event.target
  showIcon(id)
  computerMove()
})

function computerMove() {
  var id = getRandomIndex(availablePlays)
  console.log(id)
  id.innerHTML = `<img src="./assets/spider-plant.png" alt="plant" class="game-pieces computer-piece"/>`
}


// every time a player clicks, remove that number from the ids array
// add that number to the player-plays array
// the computer then plays a randomized computerMove
// that number is added to the computer-plays array
// if either array contains one of the winning combinations that player Wins
// when the number is removed from the ids array that id is no longer playable

/// Global Variables ///

var availablePlays = [1,2,3,4,5,6,7,8,9]
var playerPlays = []
var computerPlays = []

/// Functions ///


function showIcon(id) {
  id.innerHTML = `<img src="./assets/spider-plant.png" alt="plant" class="game-pieces"/>`
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
