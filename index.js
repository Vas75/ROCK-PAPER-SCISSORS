function computerPlay() {
  const picks = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);

  return picks[index];
}

function roundMssg(result) {
  if (result[0] === "draw") {
    console.log("It was a draw!");
    return;
  }

  let temp = result[0] === "player" ? "Won" : "Lost";
  let upperCased = result[1].slice(0, 1).toUpperCase() + result[1].slice(1);

  console.log(`You ${temp}! ${upperCased} beats ${result[2]}!`);
}

function showWinner(playerScore, computerScore) {
  let message;

  if (playerScore === computerScore) {
    message = "The game was a draw!";
  } else if (playerScore > computerScore) {
    message = "You won the game!";
  } else {
    message = "Sorry, you lost the game!";
  }

  console.log(message);
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelect, computerSelect = computerPlay()) {
    const playerSelect2 = playerSelect.toLowerCase();
    let result;

    if (playerSelect2 === computerSelect) {
      result = ["draw"];
    } else if (playerSelect2 === "rock") {
      if (computerSelect === "scissors") {
        result = ["player", playerSelect2, computerSelect];
        playerScore++;
      } else {
        result = ["computer", computerSelect, playerSelect2];
        computerScore++;
      }
    } else if (playerSelect2 === "paper") {
      if (computerSelect === "rock") {
        result = ["player", playerSelect2, computerSelect];
        playerScore++;
      } else {
        result = ["computer", computerSelect, playerSelect2];
        computerScore++;
      }
    } else if (playerSelect2 === "scissors") {
      if (computerSelect === "paper") {
        result = ["player", playerSelect2, computerSelect];
        playerScore++;
      } else {
        result = ["computer", computerSelect, playerSelect2];
        computerScore++;
      }
    }

    roundMssg(result);
  }

  for (let i = 1; i <= 5; i++) {
    const pick = prompt("Enter rock, paper, or scissors.");
    playRound(pick);
  }

  showWinner(playerScore, computerScore);
}
