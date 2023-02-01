const gameContainer = document.querySelector("#game_container");
const gameField = document.querySelector("#game_field");
const insects = document.querySelectorAll(".insects");
const headerContainer = document.querySelector("#header_container");
const selectContainer = document.querySelector("#select");

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

function display(e) {
  for (let i = 0; i < 2; i++) {
    createInsect();
  }
  e.classList.add("hidden");
}
