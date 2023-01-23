const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".btn-l");
const rightBtn = document.querySelector(".btn-r");
const navLinks = document.querySelector(".nav-links");
const btnToggle = document.querySelector(".toggle-btn")


// ====ToggleBtn============//
btnToggle.addEventListener("click", function(){
  if(navLinks.classList.contains("nav-mobile")){
   navLinks.classList.remove("nav-mobile");
  }else{
   navLinks.classList.toggle("nav-mobile")
  }
 });

//  slider==============

let currentSlide = 0;
const maxSlide = slides.length -1;

slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});

leftBtn.addEventListener("click", goNext);
rightBtn.addEventListener("click", goPrev);
function goNext() {
  currentSlide--;
  slideImage();
}
function goPrev() {
currentSlide++;
slideImage();
}

function slideImage() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

