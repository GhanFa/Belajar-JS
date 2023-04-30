function segitigasiku1(baris) {
  var pola = "";
  for (let i = 0; i < baris; i++) {
    for (let j = 0; j <= i; j++) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}
console.log(segitigasiku1(5));

function segitigasiku2(baris) {
  var pola = "";
  for (let i = 0; i < baris; i++) {
    for (let j = baris; j > i; j--) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}
console.log(segitigasiku2(5));

function segitigasiku3(baris) {
  var pola = "";
  for (let i = 0; i < baris; i++) {
    for (let j = 1; j < baris - i; j++) {
      pola += " ";
    }
    for (let k = 0; k <= i; k++) {
      pola += "*";
    }

    pola += "\n";
  }
  return pola;
}
console.log(segitigasiku3(5));

function segitigasiku4(baris) {
  var pola = "";
  for (let i = 0; i < baris; i++) {
    for (let j = baris; j > baris - i; j--) {
      pola += " ";
    }
    for (let k = baris; k > i; k--) {
      pola += "*";
    }

    pola += "\n";
  }
  return pola;
}
console.log(segitigasiku4(5));

function segitigasiku5(baris) {
  var pola = "";
  let i, j, k;

  for (i = 0; i <= baris; i++) {
    for (j = baris / 2; j > i; j--) {
      pola += "*";
    }
    for (k = j; k <= i; k++) {
      pola += "*";
    }
    pola += "\n";
  }

  return pola;
}
console.log(segitigasiku5(10));

function segitiga(baris) {
  var pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = baris; j > i; j--) {
      pola += " ";
    }
    for (let k = 0; k < i + i - 1; k++) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}
console.log(segitiga(5));

function segitiga2(baris) {
  var pola = "";
  for (let i = 0; i < baris; i++) {
    for (let j = 0; j < i; j++) {
      pola += " ";
    }
    for (let k = baris + baris - i - 1; k > i; k--) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}
console.log(segitiga2(5));

function segitigaborder(baris) {
  var s = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = baris; j > i; j--) {
      s += " ";
    }
    for (let k = 1; k <= i + i - 1; k++) {
      if (i == baris || k == 1 || k == i + i - 1) {
        s += "1";
      } else {
        s += " ";
      }
    }
    s += "\n";
  }
  return s;
}
console.log(segitigaborder(5));

function ganjil(baris) {
  var pola = "";
  for (let i = 0; i < baris; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < baris; j++) {
        if (j % 2 == 0) {
          pola += "#";
        } else {
          pola += " ";
        }
      }
    } else {
      for (let j = 0; j < baris; j++) {
        if (j % 2 == 0) {
          pola += " ";
        } else {
          pola += "&";
        }
      }
    }
    pola += "\n";
  }
  return pola;
}
console.log(ganjil(8));

function segitigavalue1(baris) {
  var pola = "";
  var value = 1;
  for (let i = 0; i <= baris; i++) {
    for (let j = 0; j < i; j++) {
      pola += value++ + " ";
    }
    pola += "\n";
  }
  return pola;
}
console.log(segitigavalue1(5));

function segitigavalue2(baris) {
  var pola = "";
  var value = 1;
  for (let i = 0; i < baris; i++) {
    for (let j = 0; j < baris - i; j++) {
      pola += j + i + 1 + " ";
    }
    pola += "\n";
  }
  return pola;
}
console.log(segitigavalue2(5));

function segitigavalue3(baris) {
  for (let i = 0; i < baris; i++) {
    let value = i + 1;
    let s = value + " ";
    for (let j = 1; j <= i; j++) {
      value += baris - j;
      s += value + " ";
    }
    console.log(s);
  }
}
segitigavalue3(5);

function test(baris) {
  var pola = "";
  for (let i = 1; i <= baris; i++) {
    for (j = 0; j < baris - i; j++) {
      pola += " ";
    }

    var l = 1;
    for (let k = 1; k <= i + i - 1; k++) {
      if (k < i) {
        pola += l++;
      } else {
        pola += l--;
      }
    }
    pola += "\n";
  }
  return pola;
}
console.log(test(5));
