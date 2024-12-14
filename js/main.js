const hamburgerBtn = document.getElementById("hamburger");
const menuBtn = document.getElementById("menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburgerIcon = document.querySelectorAll(".hamburgerIcon");

hamburgerBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("left-[0]");
  hamburgerIcon.classList.toggle("ri-close-fil");
});
