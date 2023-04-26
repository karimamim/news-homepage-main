const menuOpenBtn = document.querySelector(".mobile-menu-btn");

const hamburgerMenu = document.querySelector(".hamburger-menu");

const menuCloseBtn = document.querySelector(".mobile-menu-close-btn");

menuOpenBtn.addEventListener("click", () => {
  hamburgerMenu.style.right = "0px";
});

menuCloseBtn.addEventListener("click", () => {
  hamburgerMenu.style.right = "-300px";
});
