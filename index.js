import newCarousel from "./js/carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  newCarousel({
    carousel: ".carousel-container .carousel",
    nextBtn: "#carousel-next",
    prevBtn: "#carousel-prev",
    imagesLinks: {
      Programacion: "./img/code.jpg",
      Etica: "./img/la_muerte_de_socrates.jpg",
      math: "./img/matematicas.jfif",
      Calculo: "./img/calculo.jfif",
      Admin: "./img/admin.jpg",
      Inv: "./img/inv.jpg",
    },
  });

});

