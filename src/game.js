class Game {
  constructor(winner){
    this.playerOne = new Player("plant", true);
    this.playerTwo = new Player("moth", false);
    this.winner = winner;
    this.turnCount = 0;
  }
  resetGame() {
    this.turnCount = 0;
    playerOnePlays = []
    playerTwoPlays = []
  }
}
