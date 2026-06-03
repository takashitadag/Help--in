// script.js
let currentSize = 16;

function increaseFont() {
  if (currentSize < 22) {
    currentSize += 1;
    document.documentElement.style.setProperty("--font-size", currentSize + "px");
  }
}

function decreaseFont() {
  if (currentSize > 14) {
    currentSize -= 1;
    document.documentElement.style.setProperty("--font-size", currentSize + "px");
  }
}

function toggleContrast() {
  document.body.classList.toggle("contrast");
}
