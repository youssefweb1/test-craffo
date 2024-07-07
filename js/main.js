// Swiper initialization
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  parallax: true,
  autoplay: {
    delay: 2000,
  },
});

const slides = document.querySelectorAll(".swiper-slide");
const overlays = document.querySelectorAll(".overlay");

// تعيين أقصى ارتفاع لكل شريحة وغطاء (يمكنك تعديل القيمة كما تريد)
const maxHeight = 500; // هنا يمكنك تغيير القيمة لتحديد الحد الأقصى للارتفاع

slides.forEach((slide) => {
  slide.style.maxHeight = `${maxHeight}px`;
});

overlays.forEach((overlay) => {
  overlay.style.maxHeight = `${maxHeight}px`;
});

// WOW.js Initialization
new WOW().init();

// Menu
const menuBtn = document.getElementById("menuBtn");
const overlayElement = document.getElementById("overlay"); // تعديل الاسم لتجنب التعارض
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");
const lis = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
  overlayElement.classList.toggle("translate-x-[100%]");
  menu.classList.toggle("-translate-x-[100%]");
  lis.forEach((li) => {
    li.classList.toggle("wow");
    li.classList.toggle("fadeInLeft");
    new WOW().init();
  });
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("-translate-x-[100%]");
  overlayElement.classList.add("translate-x-[100%]");
  Array.from(lis).forEach((li) => {
    li.classList.remove("wow");
    li.classList.remove("fadeInLeft");
  });
});
