/// Query Selectors ///
var gameBoard = document.querySelector('.game-board')
var p2MothWins = document.querySelector('.player-two-wins')
var p1PlantWins = document.querySelector('.player-one-wins')
var turnIcon = document.querySelector('.turn')
var newGameButton = document.querySelector('button')
var mothWinMsg = document.querySelector('.moth-win-msg')
var plantWinMsg = document.querySelector('.plant-win-msg')

/// Event Listeners ///
window.addEventListener('load', updatePlayerWins)
newGameButton.addEventListener('click', startOver)
gameBoard.addEventListener('click', function(event) {
  var id = event.target
  var ids = event.target.id
  showIcon(id)
  checkForWin()
  showTurn()
})

/// Global Variables ///
var game = new Game()
var playerOnePlays = []
var playerTwoPlays = []
var playerOne = new Player("plant")
playerOne.turn = true;
playerOne.retrieveWinsFromStorage()
var playerTwo = new Player("moth")
playerTwo.retrieveWinsFromStorage()
var winningPlays = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]

/// Functions ///
function showIcon(id) {
  if(playerOne.turn === true && !id.alt && id.innerHTML === '') {
    id.innerHTML = `<img src="./assets/spider-plant.png" alt="plant" class="plant game-pieces"/>`
    addPlays(id.id)
    playerOne.turn = false
    playerTwo.turn = true
  } else if(playerTwo.turn === true && !id.alt && id.innerHTML === '') {
    id.innerHTML = `<img src="./assets/moth.png" alt="moth" class="moth game-pieces"/>`
    addPlays(id.id)
    playerOne.turn = true
    playerTwo.turn = false
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
    game.turnCount++
    playerOnePlays.push(parseInt(ids))
  } else if (playerTwo.turn === true) {
    game.turnCount++
    playerTwoPlays.push(parseInt(ids))
  }
}

function checkForWin() {
  for(var i = 0; i < winningPlays.length; i++)
    {
      if (winningPlays[i].every(play => (playerOnePlays.includes(play)))) {
        playerOne.wins+=1
        playerOne.saveWinsToStorage()
        updatePlayerWins()
        show(plantWinMsg)
        setTimeout(startOver, 1000)
        return;
      }
      if (winningPlays[i].every(play => (playerTwoPlays.includes(play)))) {
        playerTwo.wins+=1
        playerTwo.saveWinsToStorage()
        updatePlayerWins()
        show(mothWinMsg)
        setTimeout(startOver, 1000)
        return;
      } else if (game.turnCount === 9 && !winningPlays[i].every(play => (playerTwoPlays.includes(play))) && !winningPlays[i].every(play => (playerOnePlays.includes(play)))) {
        setTimeout(tie, 500)
    }
  }
};

function updatePlayerWins() {
  gameBoard.classList.remove('fade-in')
  p1PlantWins.innerHTML = `Wins: ${game.playerOne.retrieveWinsFromStorage()}`
  p2MothWins.innerHTML = `Wins: ${game.playerTwo.retrieveWinsFromStorage()}`
}

function tie() {
  if(game.turnCount === 9){
    gameBoard.classList.remove('fade-in')
    turnIcon.innerHTML = `It's a Tie!`
    startOver()
  }
}

function startOver() {
  gameBoard.innerHTML= `
  <div class="square top left" id="1"></div>
  <div class="square top" id="2"></div>
  <div class="square top right" id="3"></div>
  <div class="square left" id="4"></div>
  <div class="square" id="5"></div>
  <div class="square right" id="6"></div>
  <div class="square bottom left" id="7"></div>
  <div class="square bottom" id="8"></div>
  <div class="square bottom right" id="9"></div>
  `
  gameBoard.classList.add('fade-in')
  hide(mothWinMsg)
  hide(plantWinMsg)
  game.resetGame()
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
