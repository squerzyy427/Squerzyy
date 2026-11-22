const AKUN_TERDAFTAR = [
  { id: "aull427", pass: "12345678", tujuan: "index1.html" },
  { id: "user02", pass: "rahasia2", tujuan: "index1.html" }
];

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const inputId = inputs[0] ? inputs[0].value.trim() : "";
    const inputPass = inputs[1] ? inputs[1].value : "";

    const akunCocok = AKUN_TERDAFTAR.find(
      (akun) => akun.id === inputId && akun.pass === inputPass
    );

    if (akunCocok) {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userId", akunCocok.id);
      window.location.href = akunCocok.tujuan;
    } else {
      alert("ID atau password salah!");
    }
  });
}
