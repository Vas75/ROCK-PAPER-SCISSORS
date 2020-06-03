const options = document.querySelectorAll(".option");
const userTally = document.querySelector("#userTally");
const computerTally = document.querySelector("#computerTally");
const resultDisplay = document.querySelector("#results");

let score = {
  playerScore: 0,
  computerScore: 0,
};

function computerPlay() {
  const picks = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);

  return picks[index];
}

function showRndMssg(result) {
  if (result[0] === "draw") {
    resultDisplay.textContent = "It was a draw!";
    return;
  }

  let temp = result[0] === "player" ? "Won" : "Lost";
  let upperCased = result[1].slice(0, 1).toUpperCase() + result[1].slice(1);

  resultDisplay.textContent = `You ${temp}! ${upperCased} beats ${result[2]}!`;
}

function calcScore(result) {
  if (result[0] === "player") {
    score.playerScore++;
  } else if (result[0] === "computer") {
    score.computerScore++;
  }

  if (score.playerScore >= 5 || score.computerScore >= 5) {
    showWinner();
    score.playerScore = 0; //game over, reset global score
    score.computerScore = 0;
  } else {
    showRndMssg(result);
  }
  showScore(); //update score in ui
}

function showWinner() {
  let message;
  const compScore = score.computerScore;
  const playScore = score.playerScore;

  if (playScore > compScore) {
    message = `You won the game! Final score: ${playScore} - ${compScore}`;
  } else {
    message = `Sorry, you lost the game! Final score: ${compScore} - ${playScore}`;
  }

  resultDisplay.textContent = message;
}

function showScore() {
  userTally.textContent = score.playerScore;
  computerTally.textContent = score.computerScore;
}

function playRound(playerSelect) {
  const computerSelect = computerPlay();
  const playerSelect2 = playerSelect.toLowerCase();
  let result;

  if (playerSelect2 === computerSelect) {
    result = ["draw"];
  } else if (playerSelect2 === "rock") {
    if (computerSelect === "scissors") {
      result = ["player", playerSelect2, computerSelect];
    } else {
      result = ["computer", computerSelect, playerSelect2];
    }
  } else if (playerSelect2 === "paper") {
    if (computerSelect === "rock") {
      result = ["player", playerSelect2, computerSelect];
    } else {
      result = ["computer", computerSelect, playerSelect2];
    }
  } else if (playerSelect2 === "scissors") {
    if (computerSelect === "paper") {
      result = ["player", playerSelect2, computerSelect];
    } else {
      result = ["computer", computerSelect, playerSelect2];
    }
  }
  calcScore(result);
}

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const playerPick = e.target.dataset.option;
    playRound(playerPick);
  });
});
