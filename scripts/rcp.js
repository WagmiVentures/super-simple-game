//keep score

let win = 0,
  lose = 0;

//event listerner for rock button

document.querySelector(".rock").addEventListener("click", () => {
  playerSelectRock();
});

//reset score

document.querySelector(".reset").addEventListener("click", () => {
  win = 0;
  lose = 0;
  document.querySelector(".score").innerHTML = `Win: ${win} vs Lose:${lose}`;
  document.querySelector(".win-lose").innerHTML = `Select one of below to start`;
  document.querySelector(".show-result").innerHTML = `Let's have some fun!`;
});

//use R S P keys to play rock

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    computerMove();
    playerSelectRock();
  } else if (event.key === "s") {
    computerMove();
    playerSelectScissor();
  } else if (event.key === "p") {
    computerMove();
    playerSelectPaper();
  } else {
    alert("R=Rock, S=Scissor, P=Paper");
  }
});

//GENERATE COMPUTER MOVE RANDOMLY

function computerMove() {
  const randNum = Math.random();
  if (randNum >= 0 && randNum < 1 / 3) {
    return "Rock";
  } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
    return "Scissor";
  } else {
    return "Paper";
  }
}

//compare result for rock button

function playerSelectRock() {
  const computerSelection = computerMove();

  document.querySelector(".win-lose").innerHTML = ``;

  if (computerSelection === "Rock") {
    document.querySelector(".win-lose").innerHTML = `Tie`;
    document.querySelector(
      ".show-result"
    ).innerHTML = `Computer has ${computerSelection} &#9994, You have Rock &#9994.`;
  } else if (computerSelection === "Scissor") {
    win++;
    document.querySelector(".win-lose").innerHTML = `You Won!!!`;
    document.querySelector(
      ".show-result"
    ).innerHTML = `Computer has ${computerSelection} &#9996, You have Rock &#9994.`;
  } else {
    lose++;
    document.querySelector(".win-lose").innerHTML = `You Lose... Try Again!`;
    document.querySelector(
      ".show-result"
    ).innerHTML = `Computer has ${computerSelection} &#128400, You have Rock &#9994.`;
  }
  document.querySelector(".score").innerHTML = `Win: ${win} vs Lose:${lose}`;
}

// compare result for scissor button

function playerSelectScissor() {
  const computerSelection = computerMove();

  document.querySelector(".win-lose").innerHTML = ``;

  if (computerSelection === "Rock") {
    lose++;
    document.querySelector(".win-lose").innerHTML = `You Lose... Try Again!`;
    document.querySelector(
      ".show-result"
    ).innerHTML = `Computer has ${computerSelection} &#9994, You have Scissor &#9996.`;
  } else if (computerSelection === "Scissor") {
    document.querySelector(".win-lose").innerHTML = `Tie`;
    document.querySelector(
      ".show-result"
    ).innerHTML = `Computer has ${computerSelection} &#9996, You have Scissor &#9996.`;
  } else {
    win++;
    document.querySelector(".win-lose").innerHTML = `You Won!!!`;
    document.querySelector(
      ".show-result"
    ).innerHTML = `Computer has ${computerSelection} &#128400, You have Scissor &#9996.`;
  }
  document.querySelector(".score").innerHTML = `Win: ${win} vs Lose:${lose}`;
}

//compare result for paper button

function playerSelectPaper() {
  document.querySelector(".win-lose").innerHTML = ``;
  const computerSelection = computerMove();
  if (computerSelection === "Rock") {
    win++;
    document.querySelector(".win-lose").innerHTML = `You Won!!!`;
    document.querySelector(
      "h3"
    ).innerHTML = `Computer has ${computerSelection} &#9994, You have Paper &#128400.`;
  } else if (computerSelection === "Scissor") {
    lose++;
    document.querySelector(".win-lose").innerHTML = `You Lose... Try Again!`;
    document.querySelector(
      "h3"
    ).innerHTML = `Computer has ${computerSelection} &#9996, You have Paper &#128400.`;
  } else {
    document.querySelector(".win-lose").innerHTML = `Tie`;
    document.querySelector(
      "h3"
    ).innerHTML = `Computer has ${computerSelection} &#128400, You have Paper &#128400.`;
  }
  document.querySelector(".score").innerHTML = `Win: ${win} vs Lose:${lose}`;
}
