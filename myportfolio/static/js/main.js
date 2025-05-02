document.addEventListener("DOMContentLoaded", function () {
    // Toggle navbar
    const togglebtn = document.querySelector(".togglebtn");
    const nav = document.querySelector(".navlinks");
  
    if (togglebtn && nav) {
      togglebtn.addEventListener("click", function () {
        this.classList.toggle("click");
        nav.classList.toggle("open");
        nav.classList.toggle("active"); // Combine your two toggles
      });
    }
  
    // Typed.js effect
    if (document.querySelector(".input")) {
      var typed = new Typed(".input", {
        strings: ["Backend Developer", "AI Developer", "Web Developer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true,
      });
    }
  });
  