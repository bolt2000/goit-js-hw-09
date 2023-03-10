
const body = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;


startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);

});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
