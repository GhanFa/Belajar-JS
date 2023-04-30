// memanipulasi DOM

// A). Memanipulasi element

// 1. dengan element.innerHTML -> untuk merubah isi dari tag HTML yang dipilih

const judul = document.getElementById("judul");

judul.innerHTML = "mengubah judul dengan innerHTML";

// 2. dengan element.style.propertycss
const p1 = document.getElementsByClassName("p1")[0];
p1.style.fontSize = "30px";
p1.style.color = "cyan";

// 3. dengan element.setAttribute()
const p2 = document.getElementsByClassName("p2")[0];

// menambahkan attribute name
p2.setAttribute("name", "label");
// menambahkan attribute id
p2.setAttribute("id", "paragraf");

// 4. dengan element.classList()
const p3 = document.getElementsByClassName("p3")[0];

// element.classList.add() -> menambahkan suatu class
p3.classList.add("class-baru");
p3.classList.add("class-kedua");
p3.classList.add("class-ketiga");

// element.classList.remove() -> menghilangkan suatu class
p3.classList.remove("class-kedua");

// element.classList.toggle() -> mengatifkan/mematikan tambahan class baru
p3.classList.toggle("aktif");

// element.classList.item() -> untuk mengetahui nama class dari suatu item
p3.classList.item(2);

// element.classList.contains() -> untuk mengetahui ada atau tidaknya nama class
p3.classList.contains("class-ketiga");

// element.classList.replace() -> untuk mengganti nama class lama dengan class baru
p3.classList.replace("class-ketiga", "class-keempat");

// B). Memanipulasi Node

// document.createElement()         -> untuk membuat elemen baru
// document.createTextNode()        -> untuk membuat text pada suatu node
// node.appendChild() atau append() -> menambahkan elemen di akhir pada sebuah parent
// parentNode.prepend()             -> menambahkan elemen di awal pada sebuah parent
// node.insertBefore()              -> menambahkan node di antara node lain pada parent
// parentNode.removeChild()         -> untuk menghapus elemen/node pada parent
// parentNode.replaceChild()        -> untuk mengganti/menimpa elemen/node pada parent

// Contoh 1:
// membuat elemen baru berupa paragraf pada section a

// identifikasi dan ambil elemen section a
const sectionA = document.getElementById("a");

// membuat elemen baru berupa p
const pBaru = document.createElement("p");

//  membuat text baru pada suatu node
const textP = document.createTextNode("paragraf baru");

// memasukkan text pada elemen p
pBaru.append(textP);

// memasukkan elemen p pada section a
sectionA.append(pBaru);

// Contoh 2:
// membuat elemen baru berupa list di urutan kedua pada ul di section b

// identifikasi letak ul dan li-kedua di section b
const ul = document.querySelector("#b ul");
const li2 = ul.querySelector("li:nth-Child(2)");

// membuat elemen baru
const liBaru = document.createElement("li");
const textLi = document.createTextNode("Li baru");

// memasukkan text pada liBaru
liBaru.append(textLi);

// memasukan LiBaru pada ul sebelum li-kedua
ul.insertBefore(liBaru, li2);

// contoh 3:
// menghapus link pada section a

// ambil & identifikasi letak elemen link
const link = document.querySelector("#a a");

// hapus link pada section
sectionA.removeChild(link);

// contoh 4:
// mengganti elemen paragraf 4 menjadi h2 pada section b

// ambil dan identifikasi letak elemen p4 dan section b
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

// membuat elemen baru
const h2Baru = document.createElement("h2");
const textH2 = document.createTextNode("Ini judul baru");

// memasukkan text pada H2Baru
h2Baru.append(textH2);

// mengganti elemen paragraf 4 menjadi h2 pada section b
sectionB.replaceChild(h2Baru, p4);
