const btnApa = document.getElementById("btnApa");
const btnTidaktau = document.getElementById("btnTidaktau");
const boxPertanyaan = document.getElementById("boxPertanyaan");
const boxHasil = document.getElementById("boxHasil");
const judulHasil = document.getElementById("judulHasil");
const pesanHasil = document.getElementById("pesanHasil");

function pindahkanTombol() {
  const x = Math.floor(Math.random() * 140) - 70;
  const y = Math.floor(Math.random() * 120) - 60;
  btnTidaktau.style.transform = `translate(${x}px, ${y}px)`;
}

btnTidaktau.addEventListener("mouseenter", pindahkanTombol);
btnTidaktau.addEventListener("touchstart", function (e) {
  e.preventDefault();
  pindahkanTombol();
});

btnApa.addEventListener("click", function () {
  boxPertanyaan.style.display = "none";
  boxHasil.style.display = "block";

  let detik = 5;
  pesanHasil.textContent = `apa yah: ${detik}`;

  const timer = setInterval(() => {
    detik--;
    if (detik > 0) {
      pesanHasil.textContent = `apa yah: ${detik}`;
    } else {
      clearInterval(timer);
      judulHasil.textContent = "kaos warna putih,";
      pesanHasil.textContent = "bertuliskan I love you cantik";
    }
  }, 1000);
});