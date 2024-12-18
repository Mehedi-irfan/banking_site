const hamburgerBtn = document.getElementById("hamburg");
const menuBtn = document.getElementById("menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburgerBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("ri-close-line");
});

// testimonial
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// pricing table
const toggleButton = document.getElementById("toggleBtn");

const card_1_font = document.getElementById("card_1_front");
const card_1_back = document.getElementById("card_1_back");

const card_2_font = document.getElementById("card_2_front");
const card_2_back = document.getElementById("card_2_back");

const card_3_font = document.getElementById("card_3_front");
const card_3_back = document.getElementById("card_3_back");

toggleButton.addEventListener("change", () => {
  card_1_font.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");

  card_2_font.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");

  card_3_font.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});

// navbar
const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-color-primary-dark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-color-gray");
    navbar.classList.add("duration-300");
  } else {
    navbar.classList.remove("bg-color-primary-dark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-color-gray");
    navbar.classList.remove("duration-300");
  }
};
