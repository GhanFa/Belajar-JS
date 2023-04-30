const container = document.querySelector(".container");
const card = document.querySelectorAll(".container .card");
const closeX = document.querySelectorAll(".card .close");

// closeX.forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); //menghentikan sifat default dari suatu elemen
//     e.stopPropagation(); //menghentikan aksi bubbling dari parent
//   });
// });

// card.forEach(function (el) {
//   el.addEventListener("click", function () {
//     alert("ok");
//   });
// });

//agar bisa menjalankan aksi secara realtime
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
