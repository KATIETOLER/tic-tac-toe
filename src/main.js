/// Query Selectors ///

var gameBoard = document.querySelector('.game-board')
var playerOneWins = document.querySelector('.player-wins')
var playerTwoWins = document.querySelector('.player-two-wins')
var turnIcon = document.querySelector('.turn')
var newGameButton = document.querySelector('button')
/// Event Listeners ///
newGameButton.addEventListener('click', startOver)
gameBoard.addEventListener('click', function(event) {
  var id = event.target
  var ids = event.target.id
  showIcon(id)
  showTurn()
  addPlays(ids)
})




// every time a player clicks, remove that number from the ids array
// add that number to the player-plays array
// the computer then plays a randomized computerMove
// that number is added to the computer-plays array
// if either array contains one of the winning combinations that player Wins
// when the number is removed from the ids array that id is no longer playable
// each move should fire a function to check if win conditions have been met

/// Global Variables ///

var availablePlays = [1,2,3,4,5,6,7,8,9]
var playerOnePlays = []
var playerTwoPlays = []
var playerOne = new Player(true)
var playerTwo = new Player(false)
var game = new Game
var winningPlays = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]

/// Functions ///


function showIcon(id) {
  if(playerOne.turn === true) {
    id.innerHTML = `<img src="./assets/spider-plant.png" alt="plant" class="game-pieces"/>`
    playerOne = new Player(false)
    playerTwo = new Player(true)
  } else if(playerTwo.turn === true) {
    id.innerHTML = `<img src="./assets/moth.png" alt="moth" class="game-pieces"/>`
    playerOne = new Player(true)
    playerTwo = new Player(false)
  }
}

function checkSpace(event) {
  if(!playerOnePlays.includes(event.target.id)){
console.log('bitchin')
  }
}

function showTurn() {
  if(playerOne.turn === true){
    turnIcon.innerHTML = `It's <img src="./assets/spider-plant.png" alt="plant" class="icon"/>'s Turn!`
  } else if (playerTwo.turn === true) {
    turnIcon.innerHTML = `It's <img src="./assets/moth.png" alt="moth" class="icon"/>'s Turn!`
  }
}

function addPlays(ids){
  if(playerOne.turn === true) {
    playerOnePlays.push(ids)
    console.log("player one:", playerOnePlays)
  } else if (playerTwo.turn === true) {
    playerTwoPlays.push(ids)
    console.log("player two:", playerTwoPlays)
  }
  // checkForWin(playerTwoPlays, game.winningPlays)
  // checkForWin(playerOnePlays, game.winningPlays)
}

// function checkForWin(plays, winSet) {
//   return winSet.every(function(element) {
//     return plays.includes(element);
//   });
// };


function startOver() {
  gameBoard.innerHTML= `<div class="square top left" id="1"></div>
  <div class="square top" id="2"></div>
  <div class="square top right" id="3"></div>
  <div class="square left" id="4"></div>
  <div class="square" id="5"></div>
  <div class="square right" id="6"></div>
  <div class="square bottom left" id="7"></div>
  <div class="square bottom" id="8"></div>
  <div class="square bottom right" id="9"></div>`
  game.resetGame()
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length + 1);
};
