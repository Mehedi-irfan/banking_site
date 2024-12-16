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
