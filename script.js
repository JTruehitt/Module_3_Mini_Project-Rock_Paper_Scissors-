const startBtn = document.querySelector("#startGame");
const textEl = document.querySelector("#textdisplay");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const gameContainer = document.querySelector(".gamecontainer");
const rpsArr = ["rock", "paper", "scissors"];

startBtn.addEventListener("click", startGame);

function startGame() {
  const userSelection = document.createElement("div");
  userSelection.setAttribute("id", "userSelection");
  gameContainer.insertBefore(userSelection, startBtn);

  var rockLabel = document.createElement("label");
  rockLabel.setAttribute("for", "rockBtn");
  var rockBtn = document.createElement("Input");
  rockBtn.setAttribute("type", "radio");
  rockBtn.setAttribute("id", "rockBtn");
  rockBtn.setAttribute("name", "selection");
  rockBtn.required = true;

  var paperLabel = document.createElement("label");
  paperLabel.setAttribute("for", "paperBtn");
  var paperBtn = document.createElement("Input");
  paperBtn.setAttribute("type", "radio");
  paperBtn.setAttribute("id", "paperBtn");
  paperBtn.setAttribute("name", "selection");

  var scissorsLabel = document.createElement("label");
  scissorsLabel.setAttribute("for", "scissorsBtn");
  var scissorsBtn = document.createElement("Input");
  scissorsBtn.setAttribute("type", "radio");
  scissorsBtn.setAttribute("id", "scissorsBtn");
  scissorsBtn.setAttribute("name", "selection");

  document.querySelector("#userSelection").appendChild(rockLabel);
  document.querySelector("[for=rockBtn]").appendChild(rockBtn);
  document.querySelector("#userSelection").appendChild(paperLabel);
  document.querySelector("[for=paperBtn]").appendChild(paperBtn);
  document.querySelector("#userSelection").appendChild(scissorsLabel);
  document.querySelector("[for=scissorsBtn]").appendChild(scissorsBtn);

  textEl.innerText = "Make your selection. Good Luck!";
  rockLabel.innerHTML += "Rock";
  paperLabel.innerHTML += "Paper";
  scissorsLabel.innerHTML += "Scissors";

  startBtn.innerText = "Shoot!";
  startBtn.removeEventListener("click", startGame);
  startBtn.addEventListener("click", getUserPick);
}

function getCompPick() {
  const randNumber = Math.floor(Math.random() * 3);
  return (compPick = rpsArr[randNumber]);
}

function getUserPick() {
  if (rockBtn.checked) {
    userPick = "rock";
    getCompPick();
    whoWins();
  } else if (paperBtn.checked) {
    userPick = "paper";
    getCompPick();
    whoWins();
  } else if (scissorsBtn.checked) {
    userPick = "scissors";
    getCompPick();
    whoWins();
  } else {
    alert("Too late to back out now. Make your choice!");
    userSelection.remove();
    startGame();
  }
}

function whoWins() {
  let results = userPick + compPick;
  if (results == "rockrock" || "paperpaper" || "scissorsscissors") {
    console.log("draw");
    console.log(userPick);
    console.log(compPick);
    console.log(results);
  } else if (results == "rockscissors" || "paperrock" || "scissorspaper") {
    console.log("user wins");
  } else {
    console.log("comp wins");
  }
}

// figure out why result always ends in a draw, even when we are logging different comp picks and the result var is changing.
//once figured out, set 3 new functions for win, lose draw
