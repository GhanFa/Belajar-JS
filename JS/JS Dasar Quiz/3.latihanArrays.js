var penumpang = ["abdul", undefined, "ghani", "fauzan"];
function tambahPenumpang(nama, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(nama);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = nama;
        return penumpang;
      } else if (penumpang[i] === nama) {
        console.log(penumpang[i] + " sudah ada di dalam angkot");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
}

function hapusPenumpang(nama, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (nama === penumpang[i]) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(nama + " tidak tersedia dalam angkot");
        return penumpang;
      }
    }
  }
}
