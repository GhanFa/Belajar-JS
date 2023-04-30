// DOM selection
// menggunakan document.getElementById() -> mengembalikan berupa element

const judul = document.getElementById("judul");

judul.style.color = "red";

// menggunakan document.getElementsByTagName() -> mengembalikan HTML collection berupa Array

const p = document.getElementsByTagName("p");

p[1].style.backgroundColor = "cyan";

// menggunakan document.getElementsByClassName() -> mengembalikan HTML collection berupa Array

const p3 = document.getElementsByClassName("p3");
p3[0].style.backgroundColor = "red";
p3[0].innerHTML = "dirubah dari javascript";

// menggunakan document.querySelector() -> mengembalikan berupa element
const p4 = document.querySelector("#b p");
p4.style.color = "blue";
p4.innerHTML = "diubah dari queryselector";

// menggunakan document.querySelectorAll() -> mengembalikan nodeList berupa array
const list = document.querySelectorAll("#b ul li");
for (let i = 0; i < 3; i++) {
  list[i].style.backgroundColor = "blue";
  list[i].style.color = "white";
  list[i].innerHTML = "diubah dengan queryselectorall";
}

list[2].style.backgroundColor = "orange";
