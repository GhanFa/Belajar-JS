// membuat object javascript

// 1. Object literal
const player1 = {
  nama: "Ghani",
  Role: "mage",
  power: 100,

  powerUp: function (buff) {
    this.power += buff;
    console.log(
      `pemain ${this.nama} ini telah mendapatkan buff power sebesar ${buff}`
    );
  },
};

const player2 = {
  nama: "Fauzan",
  Role: "Fighter",
  power: 100,

  powerUp: function (buff) {
    this.power += buff;
    console.log(
      `pemain ${this.nama} ini telah mendapatkan buff power sebesar ${buff}`
    );
  },
};

// 2. Object dengan function declaration
function buatPlayer(nama, role, power) {
  let player = {};
  player.nama = nama;
  player.role = role;
  player.power = power;

  player.powerUp = function (buff) {
    player.power += buff;
    console.log(
      `pemain ${this.nama} ini telah mendapatkan buff power sebesar ${buff}`
    );
  };
  return player;
}

let player3 = buatPlayer("Abdul", "Tank", 80);
let player4 = buatPlayer("Dasilva", "Archer", 90);

// 3. Object dengan function Constructor
function Player(nama, role, power) {
  this.nama = nama;
  this.role = role;
  this.power = power;

  this.powerUp = function (buff) {
    this.power += buff;
    console.log(
      `pemain ${this.nama} ini telah mendapatkan buff power sebesar ${buff}`
    );
  };
}

let player5 = new Player("Junior", "Support", 70);
let player6 = new Player("Zhiend", "Assassin", 70);

// 4. function declaration + Object.create()
const methodPlayer = {
  powerUp: function (buff) {
    this.power += buff;
    console.log(
      `pemain ${this.nama} ini telah mendapatkan buff power sebesar ${buff}`
    );
  },
  aksi: function (cost) {
    this.power -= cost;
    console.log(
      `pemain ${this.nama} ini telah melakukan aksi yang menguras power sebesar ${cost}`
    );
  },
};

function tambahPlayer(nama, role, power) {
  let player = Object.create(methodPlayer); //untuk menghubungkan dengan method2 yg berada di object lain
  player.nama = nama;
  player.role = role;
  player.power = power;

  return player;
}

let player7 = tambahPlayer("Zexceed", "Archer", 90);

// 5. function constructor + prototype
function Player2(nama, role, power) {
  this.nama = nama;
  this.role = role;
  this.power = power;

  (Player2.prototype.powerUp = function (buff) {
    this.power += buff;
    console.log(
      `pemain ${this.nama} ini telah mendapatkan buff power sebesar ${buff}`
    );
  }),
    (Player2.prototype.aksi = function (cost) {
      this.power -= cost;
      console.log(
        `pemain ${this.nama} ini telah melakukan aksi yang menguras power sebesar ${cost}`
      );
    });
}

let player8 = new Player2("Gremoire", "Mage", 70);
