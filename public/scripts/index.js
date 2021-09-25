const slider = document.querySelector(".slider");
const left = document.querySelector(".btn-left");
const right = document.querySelector(".btn-right");
const whatsIn = document.querySelector("#whats-in");
let slideNum = 1;
left.addEventListener("click", () => {
  changeSlide(0, -75, 4, -25);
});
right.addEventListener("click", () => {
  changeSlide(-50, 25, 0, 25);
});

const changeSlide = (direction, trans, slideN, val) => {
  const transformValue = window.getComputedStyle(slider).transform;
  const w = window.getComputedStyle(slider).width;
  var matrix = new WebKitCSSMatrix(transformValue);
  let currentTrans = (matrix.m41 / parseInt(w)) * 100;
  if (currentTrans == direction) {
    currentTrans = trans;
    slideNum = slideN;
  }
  const dir = direction;
  if (dir == -50) {
    slideNum++;
  } else {
    slideNum--;
  }
  console.log(slideNum);
  if (slideNum == 1) {
    whatsIn.style.color = "#444";
    console.log("black");
  } else {
    whatsIn.style.color = "#e0e0e0";
    console.log("white");
  }
  console.log({ slideNum });
  slider.style.transform = `translateX(${currentTrans - val}%)`;
};

let didScroll = false;

const scrollInProgress = () => {
  didScroll = true;
};

const raf = () => {
  if (didScroll) {
    whatsIn.style.transform = "translateY(-" + window.scrollY / 2.08 + "%)";
    didScroll = false;
  }
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollInProgress);
