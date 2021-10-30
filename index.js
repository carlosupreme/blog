import carousel from "./js/carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  carousel({
    carousel: ".carousel-container .carousel",
    nextBtn: "#carousel-next",
    prevBtn: "#carousel-prev"
  });
});

