class Player {
  constructor(nama, role, power) {
    this.nama = nama;
    this.role = role;
    this.power = power;
  }
  powerUp(buff) {
    this.power += buff;
    console.log(
      `pemain ${this.nama} ini telah mendapatkan buff power sebesar ${buff}`
    );
  }
  aksi(cost) {
    this.power -= cost;
    console.log(
      `pemain ${this.nama} ini telah melakukan aksi yang menguras power sebesar ${cost}`
    );
  }
}

let player1 = new Player("Zhiend", "Assassin", 70);
