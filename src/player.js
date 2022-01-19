class Player {
  constructor(id) {
    this.id = id
    this.wins = 0;
    this.turn = false;
  }
  saveWinsToStorage() {
    localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
  }
  retrieveWinsFromStorage() {
    if (JSON.parse(localStorage.getItem(`${this.id}`))) {
      this.wins = JSON.parse(localStorage.getItem(`${this.id}`));
    } else {
      this.wins = 0;
    }
    return this.wins;
  }
}
