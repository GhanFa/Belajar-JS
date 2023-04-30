// membuat object literal
var player1 = {
  nama: "Ghani",
  role: "mage",
  usia: "25",
};

var player2 = {
  nama: "Fauzan",
  role: "assasin",
  usia: "22",
};

// membuat object dengan function declaration

function tambahPlayer(nama, role, usia) {
  var player = {};
  player.nama = nama;
  player.role = role;
  player.usia = usia;
  return player;
}
var player3 = tambahPlayer("Abdul", "warrior", "18");
player3;

// membuat object dengan function constructor
function Playerbaru(nama, role, usia) {
    this.nama = nama;
    this.role = role;
    this.usia = usia;
}

var player4 = new Playerbaru("Dasilva", "Archer", "23");
player4;