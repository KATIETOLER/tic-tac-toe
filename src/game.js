class Game {
  constructor(winner){
    this.playerOne = new Player("plant");
    this.playerTwo = new Player("moth");
    this.winner = winner;
    this.turnCount = 0;
  }
  resetGame() {
    this.turnCount = 0;
    playerOnePlays = []
    playerTwoPlays = []
  }
}
