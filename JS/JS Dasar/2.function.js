function kubus(s1, s2) {
  let kubus1 = s1 * s1 * s1;
  let kubus2 = s2 * s2 * s2;
  return kubus1 + kubus2;
}
console.log(kubus(8, 3));


function tambah() {
hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
console.log(tambah(6, 4, 5, 10));


function perkalian(){
   var hasilkali = hasil * hasil
   return hasilkali;
}
console.log(perkalian());

function faktorial(n){
    if(n===0)return 1;
    return n * faktorial(n-1);
}
console.log(faktorial(5))