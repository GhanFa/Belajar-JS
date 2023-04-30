function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (penumpang.length == 0) {
      console.log("angkot masih kosong");
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    }
  };
}
var angkot1 = new Angkot("Ghani", "wanaraja-Garut", [], 0);
var angkot2 = new Angkot("Fauzan", "Cibatu-Garut", [], 0);
