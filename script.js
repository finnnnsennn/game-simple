// Inisialisasi angka random
let targetNumber = Math.floor(Math.random() * 100) + 1;

// Ambil elemen dari HTML
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const resetButton = document.getElementById('resetButton');

// Tambahkan event listener pada tombol Tebak
guessButton.addEventListener('click', function () {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    feedback.textContent = 'Masukkan angka yang valid!';
    return;
  }

  if (userGuess < targetNumber) {
    feedback.textContent = 'Terlalu kecil! Coba angka yang lebih besar.';
  } else if (userGuess > targetNumber) {
    feedback.textContent = 'Terlalu besar! Coba angka yang lebih kecil.';
  } else {
    feedback.textContent = `Selamat! Anda menebak angka ${targetNumber}!`;
    guessButton.style.display = 'none';
    resetButton.style.display = 'inline-block';
  }
});

// Tombol Reset Game
resetButton.addEventListener('click', function () {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  feedback.textContent = '';
  guessInput.value = '';
  guessButton.style.display = 'inline-block';
  resetButton.style.display = 'none';
});
