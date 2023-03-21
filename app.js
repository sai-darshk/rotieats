const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const links1 = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");

  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  hamburger.classList.toggle("toggle");
});

// select all elements with the fade-in class
const elements = document.querySelectorAll('.fade-in');

// loop through all elements
elements.forEach(element => {
  // add the fade-in-animation class after a short delay
  setTimeout(() => {
    element.classList.add('fade-in-animation');
  }, 500);
});

