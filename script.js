<<<<<<< HEAD
const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");

setInterval(() => {
  if (progress.value >= 100) {
    return;
  }
  progress.value += 1;
  percentage.textContent = progress.value;
}, 1000);
=======
// nothing here.
>>>>>>> tik-1
