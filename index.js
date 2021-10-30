import newCarousel from "./js/carousel.js";
import { removeElement } from "./js/responsive.js";

document.addEventListener("DOMContentLoaded", () => {
  removeElement(".header strong","(min-width:400px)")
  
  newCarousel({
    carousel: ".carousel-container .carousel",
    nextBtn: "#carousel-next",
    prevBtn: "#carousel-prev",
    images: {
      Programacion: "./img/code.jpg", 
      Etica: "./img/la_muerte_de_socrates.jpg", 
      math: "./img/matematicas.jfif", 
      Calculo: "./img/calculo.jfif", 
      Admin: "./img/admin.jpg", 
      Inv: "./img/inv.jpg"
    }
  });
});

