document.addEventListener("DOMContentLoaded", function () {
  const displayUsername = document.querySelector("#playerName");
  const scoreDisplay = document.querySelector("#score");
  const displayComputerChoice = document.querySelector("#displayComputerChoice");
  const displayPlayerChoice = document.querySelector("#displayPlayerChoice");
  const displayResult = document.querySelector("#gameResult");

  let score = 0;
  setUsername();
  updateScoreDisplay();

  function setUsername() {
    const username = prompt("Hi, please enter your name to begin playing!");
    displayUsername.textContent = username || "Player";
  }

  function updateScoreDisplay() {
    scoreDisplay.textContent = score;
  }

  function adjustScore(result) {
    if (result === "win") {
      score += 1;
    } else if (result === "lose") {
      score = Math.max(0, score - 1);
    }
    updateScoreDisplay();
  }

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function displayChoices(playerChoice, computerChoice) {
    const emojis = {
      rock: "🪨",
      paper: "📄",
      scissors: "✂️"
    };
    displayPlayerChoice.textContent = emojis[playerChoice];
    displayComputerChoice.textContent = emojis[computerChoice];
  }

  const outcomeMessages = {
    rock: {
      scissors: ["win", "You smashed the computer with your rock!"],
      paper: ["lose", "The computer smothered you in printer paper!"]
    },
    paper: {
      rock: ["win", "You jammed the computer's printer with your paper!"],
      scissors: ["lose", "The computer cut and pasted you into the recycle bin!"]
    },
    scissors: {
      paper: ["win", "You cut the last sheet of printer paper into a snowflake!"],
      rock: ["lose", "The computer rendered a 3D rock on top of your scissors."]
    }
  };

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return ["tie", "You and the computer enter a neverending battle"];
    }

    return outcomeMessages[playerChoice][computerChoice] || ["error", "Unexpected outcome, please try again."];
  }

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const playerChoice = button.id;
      const computerChoice = getComputerChoice();
      const [result, message] = determineWinner(playerChoice, computerChoice);

      displayChoices(playerChoice, computerChoice);
      displayResult.textContent = message;
      adjustScore(result);
    });
  });
});
