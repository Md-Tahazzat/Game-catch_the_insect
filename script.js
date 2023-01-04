// first take select icons..
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

// theme vars...
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
console.log(systemTheme);

// icon toggle function.
const iconToggle = () => {
  sunIcon.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");
};

// theme check...
const themeCheck = () => {
  if (userTheme === null && systemTheme) {
    moonIcon.classList.add("display-none");
    document.documentElement.classList.add("dark");
  } else if (userTheme === "dark") {
    moonIcon.classList.add("display-none");
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    sunIcon.classList.add("display-none");
    document.documentElement.classList.remove("dark");
  }
};

// theme switch....
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// make icon clickable..
sunIcon.addEventListener("click", () => {
  themeSwitch();
});
moonIcon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();

// const sunIcon = document.getElementById("sun");
// const moonIcon = document.getElementById("moon");
// sunIcon.classList.add("display-none");

// const iconToggle = () => {
//   document.documentElement.classList.toggle("dark:bg-black");
//   sunIcon.classList.toggle("display-none");
//   moonIcon.classList.toggle("display-none");
// };

// moonIcon.addEventListener("click", () => {
//   iconToggle();
// });
// sunIcon.addEventListener("click", () => {
//   iconToggle();
// });
