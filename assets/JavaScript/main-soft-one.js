// Sticky Header Functionality
const header = document.querySelector("header");
function checkStickyHeader() {
  header.classList.toggle("sticky", window.scrollY > 2);
}
window.addEventListener("scroll", checkStickyHeader);
window.addEventListener("load", checkStickyHeader);
// Toggle Sidebar Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".all-btn-munu .icon-mnue .bar-icon");
  const menuBtnClose = document.querySelector(".icon-mnue .close-bar-icon");
  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", function (event) {
    sidebar.style.display =
      sidebar.style.display === "block" ? "none" : "block";
    event.stopPropagation();
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
  });

  menuBtnClose.addEventListener("click", () => {
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
  });
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuBtn) {
      sidebar.style.display = "none";
      menuBtn.style.display = "block";
      menuBtnClose.style.display = "none";
    }
  });
});

/* =============== Gsap JS =============== */
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 0.5,
  duration: 0.5,
});
gsap.from(".header .nav", {
  opacity: 0,
  y: -10,
  delay: 0.8,
  duration: 0.5,
  stagger: 0.3,
});
gsap.from(".contact-btn", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});
gsap.from(".content-wrassetser ", {
  opacity: 0,
  y: 30,
  delay: 1.3,
  duration: 0.9,
  stagger: 0.3,
});
gsap.from(".btn-solut", {
  opacity: 0,
  y: 30,
  delay: 1.8,
  duration: 0.9,
  stagger: 0.3,
});
gsap.from(".img-banner", {
  opacity: 0,
  y: 30,
  delay: 2.2,
  duration: 0.5,
  stagger: 0.3,
});
/*=======  Swiper =========*/
const swiper = new Swiper('.swiper', {
    // modules: [Navigation, A11y],
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.c-carousel__button--next',
      prevEl: '.c-carousel__button--prev',
    },
    slidesPerView: 'auto',
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  });

/*========== */
