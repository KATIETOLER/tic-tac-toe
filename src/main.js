/// Query Selectors ///

var gameBoard = document.querySelector('.game-board')
var playerWins = document.querySelector('.player-wins')
var computerWins = document.querySelector('.computer-wins')
var turnIcon = document.querySelector('.turn')

/// Event Listeners ///

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
var playerPlays = []
var computerPlays = []
var playerOne = new Player(true)
var playerTwo = new Player(false)

/// Functions ///


function showIcon(id) {
  if(playerOne.turn === true) {
    id.innerHTML = `<img src="./assets/spider-plant.png" alt="plant" class="game-pieces"/>`
    playerOne = new Player(false)
    playerTwo = new Player(true)
  } else if(playerTwo.turn === true){
    id.innerHTML = `<img src="./assets/moth.png" alt="moth" class="game-pieces"/>`
    playerOne = new Player(true)
    playerTwo = new Player(false)
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
    playerPlays.push(ids)
    // console.log(playerPlays)
  } else if (playerTwo.turn === true) {
    computerPlays.push(ids)
    console.log(computerPlays)
  }
  checkForWin(computerPlays)
  checkForWin(playerPlays)
}


function checkForWin(plays) {
  for(var i = 0; i < plays.length; i ++){
    if(plays[i] ){

    }
      }
    }

///  1. 123
  // 2. 456
  // 3. 789
  // 4. 147
  // 5. 258
  // 6. 369
  // 7. 159
  // 8. 753



function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length + 1);
};
