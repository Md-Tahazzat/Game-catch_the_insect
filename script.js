const gameContainer = document.querySelector("#game_container");
const endScoreContainer = document.querySelector("#end_score_container");
const endScore = document.querySelector("#end_score");
const gameField = document.querySelector("#game_field");
const insects = document.querySelectorAll(".insects");
const headerContainer = document.querySelector("#header_container");
const selectContainer = document.querySelector("#select");
const time = document.querySelector("#time");
const score = document.querySelector("#score");
let totalScore = 0;
let minutes = 3;
let seconds = 1;

// playGame.addEventListener("click", () => {
//   selectContainer.classList.remove("display_none");
//   console.log("hello world");
// });
function showContainer() {
  selectContainer.classList.remove("hidden");
  headerContainer.classList.add("hidden");
}

insects.forEach((insect) =>
  insect.addEventListener("click", (e) => {
    gameContainer.classList.remove("hidden");
    selectContainer.classList.add("hidden");
    createInsect();
    startTime();
  })
);

function createInsect() {
  const deg = randomDeg();
  const id = randomID();
  const img = document.createElement("img");
  img.classList.add("insect");
  img.style.top = randomNumber();
  img.style.left = randomNumber();
  img.style.transform = `rotate(${deg})`;
  img.setAttribute("id", id);
  img.setAttribute("onclick", `display(${id})`);
  img.src = "./images/image/insect.png";

  gameField.appendChild(img);
}

function randomID() {
  const number =
    "D_" + (Math.ceil(Math.random() * 99909) + Math.ceil(Math.random() * 9999));
  return number;
}

function randomNumber() {
  const number = Math.ceil(Math.random() * 80 + 5) + "%";
  return number;
}
function randomDeg() {
  const deg = Math.ceil(Math.random() * 360 + 5) + "deg";
  return deg;
}

// hide selected insect and make double insect
function display(e) {
  for (let i = 0; i < 2; i++) {
    createInsect();
  }
  if (totalScore === 30) {
    contactInfo();
  }
  totalScore += 1;
  score.textContent = totalScore;
  e.classList.add("hidden");
}

// clock function
function startTime() {
  setInterval(() => {
    if (minutes === 0 && seconds === 1) {
      clearInterval();
      endScoreContainer.classList.remove("hidden");
      endScore.textContent = totalScore;
      gameContainer.classList.add("hidden");
    }
    if (seconds === 1) {
      seconds = 59;
      minutes -= 1;
    } else {
      seconds -= 1;
    }
    let fullTime = `${(minutes <= 9 ? "0" : "") + minutes}:${
      (seconds < 10 ? "0" : "") + seconds
    }`;
    time.textContent = fullTime;
  }, 1000);
}

// contact section
function contactInfo() {
  const contact = document.createElement("div");
  contact.innerHTML = `
    <h1 class="text-center mb-5 text-slate-200 text-2xl">Hi there.....</h1>
    <h3 class='text-center  text-slate-200 text-xl'>you are playing</h3>
    <h3 class='text-center mb-4 text-slate-200 text-xl'>the imposible game</h3>
    <p class='text-slate-200 text-center'>Let me know how far you go...</p>
    <p class='text-slate-200 text-center'>mdtahazzatali820@gmail.com</p>
    `;
  gameField.appendChild(contact);
}

// Restart the game
function restartGame() {
  totalScore = 0;
  minutes = 3;
  seconds = 1;

  gameField.innerHTML = "";
  gameContainer.classList.remove("hidden");
  endScoreContainer.classList.add("hidden");
  createInsect();
  startTime();
}
