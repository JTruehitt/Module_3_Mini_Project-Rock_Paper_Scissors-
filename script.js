const startBtn = document.querySelector("#startGame");
const textEl = document.querySelector("#textdisplay");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const gameContainer = document.querySelector(".gamecontainer");
var userPick = "";
var compPick = "";

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
  startBtn.addEventListener("click", getResult);
}

function getResult() {
  // var buttonUnchecked = true
  //   while (buttonUnchecked) {
  if (rockBtn.checked) {
    userPick = "rock";
    // buttonUnchecked = false;
  } else if (paperBtn.checked) {
    userPick = "paper";
    // buttonUnchecked = false;
  } else if (scissorsBtn.checked) {
    userPick = "scissors";
    // buttonUnchecked = false;
  } else {
    alert("Too late to back out now. Make your choice!");
    startGame();
  }

  console.log("you should be here");
}
