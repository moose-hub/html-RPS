document.addEventListener("DOMContentLoaded", function () {
    function setUsername() {
      const displayUsername = document.querySelector("#playerName");
      let username = "";
  
      username = prompt("Hi, please enter your name to begin playing!");
  
      displayUsername.textContent = username;
    }
  
    setUsername();
  
    let score = 0;
    updateScoreDisplay();
  
    function updateScoreDisplay() {
      const scoreDisplay = document.querySelector("#score");
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
      const randomIndex = Math.floor(Math.random() * choices.length);
  
      const choice = choices[randomIndex];
      const displayComputerChoice = document.querySelector(
        "#displayComputerChoice"
      );
  
      if (choice === "rock") {
        displayComputerChoice.textContent = "🪨";
      } else if (choice === "paper") {
        displayComputerChoice.textContent = "📄";
      } else if (choice === "scissors") {
        displayComputerChoice.textContent = "✂️";
      }
      return choices[randomIndex];
    }
  
    function determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return ["tie", "You and the computer enter a neverending battle"];
      }
  
      if (playerChoice === "rock") {
        return computerChoice === "scissors"
          ? ["win", "You smashed the computer with your rock!"]
          : ["lose", "The computer smothered you in printer paper!"];
      } else if (playerChoice === "paper") {
        return computerChoice === "rock"
          ? ["win", "You jammed the computer's printer with your paper!"]
          : ["lose", "The computer sliced through you like butter!"];
      } else if (playerChoice === "scissors") {
        return computerChoice === "paper"
          ? ["win", "You cut the last sheet of printer paper into a snowflake!"]
          : ["lose", "The computer mangled your scissors with its rock!"];
      }
    }
  
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const [result, message] = determineWinner(playerChoice, computerChoice);
  
        const displayResult = document.querySelector("#gameResult");
        const displayPlayerChoice = document.querySelector(
          "#displayPlayerChoice"
        );
  
        if (playerChoice === "rock") {
          displayPlayerChoice.textContent = "🪨";
        } else if (playerChoice === "paper") {
          displayPlayerChoice.textContent = "📄";
        } else if (playerChoice === "scissors") {
          displayPlayerChoice.textContent = "✂️";
        }
        displayResult.textContent = message;
        adjustScore(result);
      });
    });
  });
  