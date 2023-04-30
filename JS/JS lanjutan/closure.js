function salam(waktu) {
  return function (nama) {
    console.log(`halo ${nama}, selamat ${waktu} semoga harimu menyenangkan`);
  };
}
let pagi = salam("pagi");
let siang = salam("siang");
let malam = salam("malam");

pagi("ghani");
siang("fauzan");
