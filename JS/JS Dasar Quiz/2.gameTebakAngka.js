var kesempatan = 3;
var tanya = true;

while (tanya) {
  var p = prompt(" silahkan tebak angka dari 1 - 10");
  var comp = Math.floor(Math.random() * 10) + 1;
  var text = "";
  var hasil = "";

  if (p == comp) {
    hasil = "tepat";
    text = "selamat anda menang! pilihan anda tepat";
  } else if (p < comp) {
    hasil = "terlalu rendah";
    text = "angka yang anda masukkan terlalu rendah";
    kesempatan -= 1;
  } else if (p > comp) {
    hasil = "terlalu tinggi";
    text = "angka yang anda masukkan terlalu tinggi";
    kesempatan -= 1;
  } else {
    hasil = "angka yang anda masukkan tidak sesuai!";
  }
  alert("angka anda " + hasil + "\n" + text);
  if (kesempatan == 0) {
    alert("anda telah gagal");
    tanya == false;
    tanya = confirm("mau main lagi?");
  } else if (hasil == "tepat") {
    tanya = confirm("mau main lagi?");
  } else if (hasil == "terlalu rendah") {
    alert("kesempatan anda tinggal " + kesempatan + "x lagi");
  } else if (hasil == "terlalu tinggi") {
    alert("kesempatan anda tinggal " + kesempatan + "x lagi");
  }
}
alert("terima kasih telah bermain");
