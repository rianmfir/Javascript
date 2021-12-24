console.log("Status: 200 Ok");

const nilai = prompt("Masukkan Nilai Anda : ");
if (nilai >= 80 && nilai <= 100) {
  alert("Anda Mendapat Grade A");
} else if (nilai >= 65 && nilai < 80) {
  alert("Anda Mendapat Grade B");
} else if (nilai >= 50 && nilai < 65) {
  alert("Anda Mendapat Grade C");
} else if (nilai >= 40 && nilai < 50) {
  alert("Anda Mendapat Grade D");
} else if (nilai < 40) {
  alert("Anda Mendapat Grade E");
} else {
  alert("Inputan salah, silahkan masukkan angka 1-100 !");
}
