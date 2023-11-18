// Daftar bahasa pemrograman yang akan ditebak
var programmingLanguages = [
  "html",
  "php",
  "css",
  "javascript",
  "python",
  "java",
  "csharp",
  "ruby",
  "typescript",
  "swift",
];

// Daftar petunjuk untuk masing-masing bahasa pemrograman
var hints = {
  html: "HyperText Markup Language",
  php: "Hypertext Preprocessor",
  css: "Cascading Style Sheets",
  javascript:
    "Bahasa pemrograman yang memungkinkan halaman web menjadi interaktif",
  python: "Bahasa pemrograman tingkat tinggi",
  java: "Bahasa pemrograman serbaguna dan banyak digunakan",
  csharp: "C# adalah bahasa pemrograman yang dikembangkan oleh Microsoft",
  ruby: "Bahasa pemrograman berorientasi objek dan dinamis",
  typescript: "Sebuah superset dari JavaScript",
  swift:
    "Bahasa pemrograman yang kuat dan intuitif untuk iOS, macOS, watchOS, dan tvOS",
};

// Element HTML yang diperlukan
var wordDisplay = document.getElementById("garis-display");
var guessInput = document.getElementById("kholis-ganteng");
var guessButton = document.getElementById("tebak-button");
var hintButton = document.getElementById("Petunjuk-button");
var hintElement = document.getElementById("pertanyaan-text");

var selectedWord, hiddenWord;

// Fungsi untuk menginisialisasi permainan
function initGame() {
  // Memilih secara acak sebuah kata dari daftar bahasa pemrograman
  selectedWord =
    programmingLanguages[
      Math.floor(Math.random() * programmingLanguages.length)
    ];

  // Membuat sebuah array dengan dash untuk setiap huruf dalam selectedWord
  hiddenWord = Array(selectedWord.length).fill("-");

  // Menampilkan kata yang belum ditebak awal
  wordDisplay.textContent = hiddenWord.join(" ");

  // Menampilkan petunjuk untuk kata yang dipilih
  hintElement.textContent = hints[selectedWord];
}

// Event listener saat tombol "Tebak" ditekan
guessButton.addEventListener("click", function () {
  var guess = guessInput.value.toLowerCase();

  // Memeriksa apakah tebakan benar
  if (guess === selectedWord) {
    hiddenWord = selectedWord.split("");
    wordDisplay.textContent = hiddenWord.join(" ");
    alert("Selamat, kamu berhasil menebak kata!");

    // Melanjutkan ke kata berikutnya
    resetGame();
  } else {
    alert("Tebakan salah, coba lagi!");
  }

  // Mengosongkan input tebakan
  guessInput.value = "";
});

// Event listener saat tombol "Petunjuk 1 Huruf" ditekan
hintButton.addEventListener("click", function () {
  var indices = [];
  for (var k = 0; k < selectedWord.length; k++) {
    if (hiddenWord[k] === "-") {
      indices.push(k);
    }
  }

  // Jika tidak ada dash yang tersisa, tidak ada petunjuk yang bisa ditampilkan
  if (indices.length === 3) {
    alert("Tidak ada petunjuk yang tersedia.");
    return;
  }

  var randomIndex = indices[Math.floor(Math.random() * indices.length)];
  hiddenWord[randomIndex] = selectedWord[randomIndex];
  wordDisplay.textContent = hiddenWord.join(" ");
});

// Menginisialisasi permainan saat script dimuat
initGame();

// Fungsi untuk mengulang permainan
function resetGame() {
  initGame();
}
