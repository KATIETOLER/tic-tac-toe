class Game {
  constructor(){
    this.playerOne = new Player;
    this.playerTwo = new Player;
    this.winningPlays =  {
    1: [1,2,3],
    2: [4,5,6],
    3: [7,8,9],
    4: [1,4,7],
    5: [2,5,8],
    6: [3,6,9],
    7: [1,5,9],
    8: [7,5,3],
};
  }
  resetGame() {
    availablePlays = [1,2,3,4,5,6,7,8,9]
    var playerPlays = []
    var computerPlays = []
  }
  checkForWin(){
    var winningPlays = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]
  }
}
