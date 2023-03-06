// * setting the stage by assigning the HTML elements i plan to change as easily referenced variables
const startBtn = document.querySelector("#startGame");
const textEl = document.querySelector("#textdisplay");
var userScore = document.querySelector("#userScore");
var compScore = document.querySelector("#compScore");
var drawScore = document.querySelector("#drawScore");
const gameContainer = document.querySelector(".gamecontainer");
const rpsArr = ["rock", "paper", "scissors"];
var userPick = "";
var compPick = "";
var drawCount = 0;
var userWins = 0;
var compWins = 0;

// * setting event listener to run startGame function on button click.
startBtn.addEventListener("click", startGame);

function startGame() {
  // * creates a new div element and sets it as a variable to reference. sets an id attribute in order to locate it in code down the line. inserts this new div before the startBtn, because that's where i want it to be
  const userSelection = document.createElement("div");
  userSelection.setAttribute("id", "userSelection");
  gameContainer.insertBefore(userSelection, startBtn);

  // * creates a label element and sets for = rockBtn, which will link this label and the text inside to the radio button we're about to create.
  var rockLabel = document.createElement("label");
  rockLabel.setAttribute("for", "rockBtn");

  // * creates an input element and sets type to radio. sets id to rockBtn both to make it easy to locate later and to link it to label. sets name to indicate that it will be in the same family of radio buttons we create below, which means only one will be able to be seleced.
  var rockBtn = document.createElement("Input");
  rockBtn.setAttribute("type", "radio");
  rockBtn.setAttribute("id", "rockBtn");
  rockBtn.setAttribute("name", "selection");

  // * this actually didn't end up being necessary, but leaving it here to refernce in future anyway. i think this is mainly if you're inserting an actual form element to be submitted.
  rockBtn.required = true;

  // * same as rock above
  var paperLabel = document.createElement("label");
  paperLabel.setAttribute("for", "paperBtn");
  var paperBtn = document.createElement("Input");
  paperBtn.setAttribute("type", "radio");
  paperBtn.setAttribute("id", "paperBtn");
  paperBtn.setAttribute("name", "selection");

  // * same as rock above
  var scissorsLabel = document.createElement("label");
  scissorsLabel.setAttribute("for", "scissorsBtn");
  var scissorsBtn = document.createElement("Input");
  scissorsBtn.setAttribute("type", "radio");
  scissorsBtn.setAttribute("id", "scissorsBtn");
  scissorsBtn.setAttribute("name", "selection");

  // * located the userSelection div and appends the rock label element as a child, then appends the rock button into the label so that the label wraps the button.
  // * could have used shorthand: userSelection.appendChild(rockLabel);, but the concept was still too fresh and didn't think of it until writing this note
  document.querySelector("#userSelection").appendChild(rockLabel);
  document.querySelector("[for=rockBtn]").appendChild(rockBtn);
  document.querySelector("#userSelection").appendChild(paperLabel);
  document.querySelector("[for=paperBtn]").appendChild(paperBtn);
  document.querySelector("#userSelection").appendChild(scissorsLabel);
  document.querySelector("[for=scissorsBtn]").appendChild(scissorsBtn);

  // * changes the text of the defined textEl and makes it italic for fun. then appends strings to the inner HTML of the labels to confrim what the buttons are but not overwrite them.
  textEl.innerText = "Rock, Paper, Scissors...";
  textEl.style.fontStyle = "italic";
  rockLabel.innerHTML += " Rock";
  paperLabel.innerHTML += " Paper";
  scissorsLabel.innerHTML += " Scissors";

  // * changes the text of the button, removes the previous event listener, and adds a new one to call the getUserPick function on click
  startBtn.innerText = "Shoot!";
  startBtn.removeEventListener("click", startGame);
  startBtn.addEventListener("click", getUserPick);
}

// * defining function to generate a random computer selection. generates a random number between 1 - 3, then inserts it into our defined rps array to pull which one the computer will select
function getCompPick() {
  const randNumber = Math.floor(Math.random() * 3);
  return (compPick = rpsArr[randNumber]);
}

// * first calls the getCompPick function to have that value ready. then checks to see which radio button the user selected, assigns that string to the userPick variable, and concatenates the user/comp picks into a single string that we will use to determine who wins. then calls the who wins function to proceed chain.
// * for the last else part, used an alert to tell user that they have to choose something, removed the entire user section that includes the buttons, but then called the start game function to add it again and effectively create a do over. did this so the user cant proceed without making a pick and breaking the flow.
function getUserPick() {
  getCompPick();
  if (rockBtn.checked) {
    userPick = "rock";
    results = userPick + compPick;
    whoWins();
  } else if (paperBtn.checked) {
    userPick = "paper";
    results = userPick + compPick;
    whoWins();
  } else if (scissorsBtn.checked) {
    userPick = "scissors";
    results = userPick + compPick;
    whoWins();
  } else {
    alert("Too late to back out now. Make your choice!");
    userSelection.remove();
    startGame();
  }
}

// * first sets the font style back to normal after we changed it in the last screen for fun effect. then displays what the user and comp picked by referencing out already defined values.
function whoWins() {
  textEl.style.fontStyle = "normal";
  textEl.innerText =
    "You picked " +
    userPick +
    ", your opponent picked " +
    compPick +
    "... \n\n";

  // * runs an if else statement to check the results variable vs our groups of outcomes. depending on the outcome, the score for that outcome is increased by one from the prior value, and then posted to our defined score element to display to the user. will produce same results as below switch statement
  // if (
  //   results === "rockrock" ||
  //   results === "paperpaper" ||
  //   results === "scissorsscissors"
  // ) {
  //   drawCount += 1;
  //   drawScore.innerText = drawCount;
  //   textEl.innerText += "It's a draw!";
  // } else if (
  //   results === "rockscissors" ||
  //   results === "paperrock" ||
  //   results === "scissorspaper"
  // ) {
  //   userWins += 1;
  //   userScore.innerText = userWins;
  //   textEl.innerText += "Hooray!! You win!!";
  // } else if (
  //   results === "rockpaper" ||
  //   results === "paperscissors" ||
  //   results === "scissorsrock"
  // ) {
  //   compWins += 1;
  //   compScore.innerText = compWins;
  //   textEl.innerText += "Aww man, you lost!";
  // }

  // * This switch statement will produce the same results as the above if else statement. I just wanted to test it out to get more comfortable with switch. if/else seems better to verify if a value or expression is true/false, whereas switch just tests for different expected values of a variable. maybe switch would have caused less of a headache in this instance where there were only 9 possible outcomes
  switch (results) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("draw");
      console.log(userPick);
      console.log(compPick);
      drawCount += 1;
      console.log(drawCount);
      drawScore.innerText = drawCount;
      textEl.innerText += "It's a draw!";
      break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("user wins");
      console.log(userPick);
      console.log(compPick);
      userWins += 1;
      console.log(userWins);
      userScore.innerText = userWins;
      textEl.innerText += "Hooray!! You win!!";
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("comp wins");
      console.log(userPick);
      console.log(compPick);
      compWins += 1;
      console.log(compWins);
      compScore.innerText = compWins;
      textEl.innerText += "Aww man, you lost!";
  }

  // * finally, appends a call to action asking for another round, removes the user selection section for so if they play again the buttons don't get compounded, removed the user pick event listener, changed the inner text, and added event listener to run startGame and start it all over again.
  textEl.innerText += "\n\n How about another round?";
  userSelection.remove();
  startBtn.removeEventListener("click", getUserPick);
  startBtn.innerText = "Play Again";
  startBtn.addEventListener("click", startGame);
}
