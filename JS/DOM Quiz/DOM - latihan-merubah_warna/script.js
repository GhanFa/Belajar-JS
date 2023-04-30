const btnColor = document.getElementsByClassName("btn-color")[0];

btnColor.addEventListener("click", function () {
  if (btnColor) {
    document.body.classList.toggle("active");
    document.body.removeAttribute("style");
  }
});

const tRandColor = document.createElement("button");
const tBtn = document.createTextNode("Random Color");
tRandColor.appendChild(tBtn);
tRandColor.setAttribute("type", "button");
btnColor.after(tRandColor);

tRandColor.addEventListener("click", function () {
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

let currColor = document.body.style.backgroundColor;
console.log(currColor);

// const slider = document.querySelectorAll("input");
// slider[0].value = r;
// slider[1].value = g;
// slider[2].value = b;
// for (let i = 0; i < slider.length; i++) {
//   slider[i].addEventListener("input", function () {
//     r = slider[0].value;
//     g = slider[1].value;
//     b = slider[2].value;

//     document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
//   });
// }

// const sMerah = document.querySelector("input[type=range]");

// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   document.body.style.backgroundColor = "rgb(" + r + ",100, 100)";
// });
