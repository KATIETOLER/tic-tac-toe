class Player {
  constructor(token, turn) {
    this.id = Date.now()
    this.wins = 0;
    this.turn = turn;
    this.token = token;
  }
}
