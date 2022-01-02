const randomNumber = Math.floor(Math.random() * 3 + 1); // Acak angka 1-3

let score_1 = 0;
let score_2 = 0;
let round = 5;

// Function tebakan player
const tebak = (play_1, play_2) => {
  if (play_1 == randomNumber) {
    score_1++;
    alert(`Player 1 MENANG!\n---------------------------------------------\nNilai yang dicari : ${randomNumber}\nTebakan Player 1 : ${play_1}\nTebakan Player 2 : ${play_2}`);
  } else if (play_2 == randomNumber) {
    score_2++;
    alert(`Player 2 MENANG!\n---------------------------------------------\nNilai yang dicari : ${randomNumber}\nTebakan Player 1 : ${play_1}\nTebakan Player 2 : ${play_2}`);
  } else {
    alert(`Tidak ada tebakan yang benar, hasil SERI!\n---------------------------------------------\nNilai yang dicari : ${randomNumber}\nTebakan Player 1 : ${play_1}\nTebakan Player 2 : ${play_2}`);
  }
};

// Function Konfirmasi Main Kembali
const ulangi = () => {
  if (confirm("Apakan Kamu Ingin Bermain Kembali ?")) {
    score_1 = 0;
    score_2 = 0;
    playGame();
  } else {
    alert("Terima Kasih !");
  }
};

// Play Game
const playGame = () => {
  for (let index = 1; index <= round; index++) {
    // Input Nomer
    let nPlayer_1 = parseInt(prompt(`Round ${index} ~ Player 1 - Masukkan angka 1-3 : `));
    let nPlayer_2 = parseInt(prompt(`Round ${index} ~ Player 2 - Masukkan angka 1-3 : `));

    // Validasi Inputan
    if (nPlayer_1 < 1 || nPlayer_1 > 3 || nPlayer_2 < 1 || nPlayer_2 > 3 || isNaN(nPlayer_1) || isNaN(nPlayer_2)) {
      alert("Inputan hanya boleh berupa angka 1-3");
      index--;
    } else if (nPlayer_1 == nPlayer_2) {
      alert("Angka sudah dipilih, pilihan tidak boleh sama");
      index--;
    } else {
      tebak(nPlayer_1, nPlayer_2);
      alert(`Score\n-----------------\nPlayer 1 : ${score_1}\nPlayer 2 : ${score_2}`);
    }
  }

  if (score_1 > score_2) {
    alert(`Pemenang Games Adalah Player 1`);
  } else if (score_1 < score_2) {
    alert(`Pemenang Games Adalah Player 2`);
  } else {
    alert(`-----------------Hasil Seri-----------------\n
           -------------Tidak Ada Pemenang-------------`);
  }

  ulangi();
};

// Main Games
playGame();
