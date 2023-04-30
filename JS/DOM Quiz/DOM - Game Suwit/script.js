function getPilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

const imgComputer = document.querySelector(".img-komputer");
function loadingGambar() {
  const img = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      return;
    }
    imgComputer.setAttribute("src", "img/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

const pilihGambar = document.querySelectorAll("ul li img");
pilihGambar.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);
    loadingGambar();
    setTimeout(function () {
      imgComputer.setAttribute("src", "img/" + pilihanComp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
