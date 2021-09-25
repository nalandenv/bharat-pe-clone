const slider = document.querySelector(".slider");
const left = document.querySelector(".btn-left");
const right = document.querySelector(".btn-right");

left.addEventListener("click", () => {
  const transformValue = window.getComputedStyle(slider).transform;
  const w = window.getComputedStyle(slider).width;
  var matrix = new WebKitCSSMatrix(transformValue);
  let currentTrans = (matrix.m41 / parseInt(w)) * 100;
  console.log(Math.floor(currentTrans) + "%");
  if (currentTrans == 0) {
    currentTrans = -75;
  }
  slider.style.transform = `translateX(${currentTrans + 25}%)`;
});
right.addEventListener("click", () => {
  const transformValue = window.getComputedStyle(slider).transform;
  const w = window.getComputedStyle(slider).width;
  var matrix = new WebKitCSSMatrix(transformValue);
  let currentTrans = (matrix.m41 / parseInt(w)) * 100;
  console.log(currentTrans);
  if (currentTrans <= -50) {
    currentTrans = 25;
  }
  slider.style.transform = `translateX(${currentTrans - 25}%)`;
});
