// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let highScore = 0;
let gameOver = false;

// Select DOM elements
const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const highScoreDisplay = document.getElementById("high-score");
const restartBtn = document.getElementById("restart-btn");

checkBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", resetGame);

function checkGuess() {
  if (gameOver) return;

  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⛔ Please enter a number between 1 and 100!";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}`;
    document.body.style.background = "#0f5132"; // green success background
    checkBtn.disabled = true;
    guessInput.disabled = true;
    restartBtn.classList.remove("hidden");

    // Update high score
    if (highScore === 0 || attempts < highScore) {
      highScore = attempts;
      highScoreDisplay.textContent = highScore;
    }

    gameOver = true;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = "📈 Too high! Try again.";
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;

  message.textContent = "Start guessing...";
  attemptsDisplay.textContent = "0";
  guessInput.value = "";
  guessInput.disabled = false;
  checkBtn.disabled = false;
  restartBtn.classList.add("hidden");
  document.body.style.background = ""; // Reset background
}
