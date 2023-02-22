const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hiddenElements = document.querySelectorAll(".hidden");
const form = document.querySelector("form");

const displayHamburgerMenu = () => {
  hamburgerBtn.classList.toggle("open");
  hamburgerMenu.classList.toggle("active");
};

hamburgerBtn.addEventListener("click", displayHamburgerMenu);
form.addEventListener('submit', (e) => e.preventDefault());

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
});

hiddenElements.forEach((el) => observer.observe(el));