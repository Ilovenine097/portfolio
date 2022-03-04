AOS.init({
    duration: 2000
  });
 
 var typed = new Typed('.typed', {
        strings: ['UI / UX DEVELOPER', 'GRAPHICS DESIGNER', 'FRONT-END DEVELOPER', 'PHOTOGRAPHER'],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true,
});

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");

document.addEventListener("scroll", function () {
  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-primary");
    header.classList.add("shadow");
  } else {
    header.classList.remove("bg-primary");
    header.classList.remove("shadow");
    header.classList.remove("shadow");
  }
});

const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");
const toggleDarkMode = function () {
  checkbox.checked
  ? html.classList.add("dark")
  : html.classList.remove("dark");
}
 //calling the function directly
  toggleDarkMode();
  checkbox.addEventListener("click",toggleDarkMode);

      