const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const form = document.querySelector("form");

const displayHamburgerMenu = () => {
  hamburgerBtn.classList.toggle("open");
  hamburgerMenu.classList.toggle("active");
};

hamburgerBtn.addEventListener("click", displayHamburgerMenu);
form.addEventListener('submit', (e) => e.preventDefault());
