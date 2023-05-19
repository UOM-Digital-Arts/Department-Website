const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

function showMobileNav() {
  var mobileNav = document.getElementById("nav-mobile");

  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "flex";
  }
  else {
    mobileNav.style.display = "none";
  }
}

function changeBackground() {
  var header = document.getElementById("header");
  header.classList.toggle("switch-color");
  changeOpacityMenu();
}

function changeOpacityMenu() {
  var checkBox = document.getElementById("side-menu");
  if (checkBox.checked == true) {
    changeOpacity0();
  } else {
    changeOpacity1();
  }
}

function changeOpacity0() {
  var element1 = document.getElementById("section");
  document.getElementById("section").style.display = "none";
}

function changeOpacity1() {
  var element1 = document.getElementById("section");
  document.getElementById("section").style.display = "";
}
function loadMenu() {
  document.getElementById("navMenu").style.display = "none";
  document.getElementById("sectionIndex").style.display = "";
}
