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
    console.log("It was a draw!"); //display in ui
    return;
  }

  let temp = result[0] === "player" ? "Won" : "Lost";
  let upperCased = result[1].slice(0, 1).toUpperCase() + result[1].slice(1);

  console.log(`You ${temp}! ${upperCased} beats ${result[2]}!`); //display
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
}

function showWinner() {
  let message;
  const compScore = score.computerScore;
  const playScore = score.playerScore;

  if (playScore > compScore) {
    message = "You won the game!";
  } else {
    message = "Sorry, you lost the game!";
  }

  console.log(message);
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

/* 
game() calls play round function 5 times.
set up to run play on 1st pick

track score, first to five wins

display win mssg, and clear score.
*/
