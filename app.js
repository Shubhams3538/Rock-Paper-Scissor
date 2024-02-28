let userScore = 0; // user current score
let compScore = 0; // computer current score
// accesing the elements that will change
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoree = document.querySelector("#user-score");
const compScoree = document.querySelector("#comp-score");

// this functions changes the msg displayed according to the winner
const showwinner = (userwin) => {
  if (userwin) {
    msg.innerText = "You Win";
    userScore += 1;
    userScoree.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerHTML = "Computer Win";
    compScore += 1;
    compScoree.innerText = compScore;
    msg.style.backgroundColor = "red";
  }
};

// if draw then this
const draw = () => {
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "#081b31";
};
// this function randomly generates the choice of the computer
const gencompchoice = () => {
  const arr = ["rock", "paper", "scissor"];
  const num = Math.floor(Math.random() * 3);
  return arr[num];
};

// this functions decides who is the winner
const decide = (userchoice) => {
  const compchoice = gencompchoice();
  if (userchoice === compchoice) {
    draw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

// we are iterating through all the choice and adding an event listner to them.
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    decide(userchoice);
  });
});
