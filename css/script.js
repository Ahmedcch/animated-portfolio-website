// dark mode button
const button = document.querySelector(".dark-container");
const toggle = document.querySelector(".dark-mode");
const background = document.querySelector(".home");
const nightToggle = document.querySelector("div div > i:nth-child(1)");
const nightToggle2 = document.querySelector("div div > i:nth-child(2)");
const backgroundHover = document.querySelector(".home-imgHover");

button.addEventListener("click", () => {
  toggle.classList.toggle("active");
  background.classList.toggle("change-image");
  backgroundHover.classList.toggle("hover-img");
  if (toggle.classList.contains("active")) {
    nightToggle.style.opacity = "100";
    nightToggle2.style.opacity = "0";
  } else {
    nightToggle.style.opacity = "0";
    nightToggle2.style.opacity = "100";
  }
});
// End of dark mode button
