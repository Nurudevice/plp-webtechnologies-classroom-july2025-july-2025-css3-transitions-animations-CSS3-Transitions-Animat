// Part 2: JavaScript Functions — Scope, Parameters & Return

// Global variable (to demonstrate scope)
let globalColor = "teal";

// Function that takes a parameter and returns a value
function calculateSquare(number) {
  let result = number * number; // local variable
  return result;
}

// Function that changes color using parameter + scope
function changeBoxColor(color) {
  const box = document.querySelector(".animated-box");
  box.style.background = color;
  globalColor = color; // modify global variable
}

// Event listeners for Part 2 buttons
document.getElementById("calcBtn").addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  const result = calculateSquare(randomNum);
  document.getElementById("calcResult").textContent = `The square of ${randomNum} is ${result}.`;
});

document.getElementById("colorBtn").addEventListener("click", () => {
  const randomColor = getRandomColor();
  changeBoxColor(randomColor);
  document.getElementById("calcResult").textContent = `Box color changed to ${globalColor}.`;
});

// Reusable helper function (returns a random hex color)
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/* Part 3: Combining CSS Animations with JS */

// Animate a box when a button is clicked
const triggerBtn = document.getElementById("triggerAnimationBtn");
const jsBox = document.getElementById("jsBox");

triggerBtn.addEventListener("click", () => {
  // Toggle animation class dynamically
  jsBox.classList.remove("animate-move"); // reset animation
  void jsBox.offsetWidth; // trick to restart animation
  jsBox.classList.add("animate-move");
});
