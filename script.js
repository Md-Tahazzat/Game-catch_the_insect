const progress = document.getElementById("progress");
const progressValue = document.getElementById("percentage");

setInterval(() => {
  if (progress.value >= 100) {
    return;
  }
  progress.value = progress.value + 1;
  progressValue.textContent = progress.value;
}, 1000);
