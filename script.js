const monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDaysName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const color = ["#2d6b5f", "#72e3a6", "#dff4c7", "#edbf98", "#ea3d36"];

// year container variables
const yearContainer = document.querySelector(".year_container");
const dropDown = document.createElement("select");
const currentYear = new Date().getFullYear();

// calenders variables
const calendar = document.querySelector(".calendar");
const moods = document.querySelectorAll(".mood");
const randomize = document.querySelector("#randomize");
const clear = document.querySelector("#clear");
let activeColor = "";
const defaultColor = "#888";

// create dynamic year dropdown and set eventListener
dropDown.innerHTML = `
${randomYear(currentYear)}
`;
function randomYear(currentYear) {
  let year = "";
  for (let i = 1; i <= 11; i++) {
    year += `<option ${i === 6 ? "selected" : ""}  value=${
      currentYear - (6 - i)
    }>${currentYear - (6 - i)}</option>`;
  }
  return year;
}
yearContainer.appendChild(dropDown);

document
  .querySelector(".year_container select")
  .addEventListener("change", (e) => {
    console.log(e.target.value);
    render(e.target.value);
  });

// add eventListener to the moods
moods.forEach((mood) =>
  mood.addEventListener("click", () => {
    // desselect it if it already selected
    if (mood.classList.contains("selected")) {
      mood.classList.remove("selected");
      activeColor = defaultColor;
      console.log("yes");
      console.log(activeColor);
    } else {
      moods.forEach((mood) => mood.classList.remove("selected"));
      const moodColor = getComputedStyle(mood).getPropertyValue("color");
      activeColor = moodColor;
      mood.classList.add("selected");
    }
  })
);

// render year
function render(currentYear) {
  const allMonths = monthsHTML(monthsName, weekDaysName);
  calendar.innerHTML = allMonths;
  const days = createDays(currentYear);
  days.forEach((day) => {
    const month = day.getMonth();
    const dayContainer = document.querySelector(
      `.month_${month} .days_container`
    );
    const div = document.createElement("div");
    div.classList.add("days");

    // create empty div before date 1 if nedded
    if (day.getDate() === 1 && day.getDay() !== 0) {
      for (let i = 0; i < day.getDay(); i++) {
        const emptyEl = createEmptyEl();
        dayContainer.appendChild(emptyEl);
      }
    }

    div.innerHTML = `
  <span class='circle'>${day.getDate()}</span>
  `;
    dayContainer.appendChild(div);
  });

  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) =>
    circle.addEventListener("click", () => {
      circle.style.backgroundColor = activeColor;
    })
  );

  randomize.addEventListener("click", () => {
    circles.forEach(
      (circle) => (circle.style.backgroundColor = generateRandomColor())
    );
  });

  clear.addEventListener("click", () => {
    circles.forEach((circle) => (circle.style.backgroundColor = defaultColor));
  });
}

render(currentYear);

// Generate all Days
function createDays(year) {
  const firstDay = new Date(`Jan 01 ${year}`);
  const lastDay = new Date(`Dec 31 ${year}`);

  const days = [firstDay];
  let arrayLastDay = days[days.length - 1];

  // get all the day between Jan-01-2023 to Dec-31-2023
  while (arrayLastDay.getTime() !== lastDay.getTime()) {
    days.push(nextDay(arrayLastDay));
    arrayLastDay = days[days.length - 1];
  }
  return days;
}

// create days html
function daysHTML(weekDaysName) {
  let template = "";
  weekDaysName.forEach(
    (day) =>
      (template += `
 <div class='week_days'>${day}</div>
`)
  );
  return template;
}

// create months html
function monthsHTML(monthsName, weekDaysName) {
  const weekDays = daysHTML(weekDaysName);
  let template = "";
  monthsName.forEach((month, index) => {
    template += `<div class='months month_${index}'>
      <h3>${month}</h3>
      <div class='week_days_container'>
       ${weekDays}
      </div>
      <div class='days_container'></div>
  </div>`;
  });
  return template;
}

// Generate next day
function nextDay(day) {
  const newDay = new Date(day);
  newDay.setDate(newDay.getDate() + 1);
  return newDay;
}

// create empty slote
function createEmptyEl() {
  const div = document.createElement("div");
  div.classList.add("days");
  return div;
}

function generateRandomColor() {
  const index = Math.floor(Math.random() * color.length);
  const randomColor = color[index];
  return randomColor;
}
