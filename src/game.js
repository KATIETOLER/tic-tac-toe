class Game {
  constructor(winner){
    this.playerOne = new Player("plant", true);
    this.playerTwo = new Player("moth", false);
    this.winner = winner;
  }
  resetGame() {
    playerOnePlays = []
    playerTwoPlays = []
  }
}
