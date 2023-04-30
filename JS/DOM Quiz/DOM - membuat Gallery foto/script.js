const container = document.querySelector(".container");
const preview = document.querySelector(".container img");
const thumbs = document.querySelectorAll(".thumbnail .thumb");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    // preview.setAttribute("src", e.target.src);
    preview.src = e.target.src;
    preview.classList.add("effect");
    setTimeout(function () {
      preview.classList.remove("effect");
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
