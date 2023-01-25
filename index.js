const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");

const displayHamburgerMenu = () => {
  hamburgerBtn.classList.toggle("open");
  hamburgerMenu.classList.toggle("active");
};

hamburgerBtn.addEventListener("click", displayHamburgerMenu);
