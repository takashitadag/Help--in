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

function toggleSeniorMode() {
  document.body.classList.toggle("senior");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
  });
});
