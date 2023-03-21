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

/** Here's how to say Hello to Netlify Graph! */
await fetch('https://graph.netlify.com/graphql?app_id=b83d3c66-7e5b-47e6-96b4-5ef3cc6f57b6&show_metrics=false',
  {
    method: 'POST',
    body: JSON.stringify({
      query: `query HelloNetlifyGraph {
    helloGraph(sessionId: "794ce8d8-8491-4337-8d12-51bacbaab391") {
      welcome
      about
      whatToDoNext
    }
  }`,
    }),
  }
)
.then((r) => r.json())