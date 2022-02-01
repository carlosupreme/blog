import Ajax from "./Ajax.js";
import newCarousel from "../components/carousel.js";

export default async function Router($root) {
  let { hash } = location;

  $root.innerHTML = null;

  const insertText = (text) => {
    $root.insertAdjacentHTML("beforeend", text);
  };

  // PROGRAMACION PAGE
  if (hash.includes("Programacion")) {
    await Ajax("./html/programacion.html", insertText);
    // MATEMATICAS PAGE
  } else if (hash.includes("Matematicas")) {
    await Ajax("./html/mate.html", insertText);
    // CALCULO PAGE
  } else if (hash.includes("Calculo")) {
    await Ajax("./html/calculo.html", insertText);
    // JAVASCRIPT PAGE
  } else if (hash.includes("JavaScript")) {
    await Ajax("./html/js.html", insertText);
    // 404 PAGE
  } else {
    Ajax("./html/carousel.html", (text) => {
      $root.innerHTML = text;
      newCarousel({
        carousel: ".carousel-container .carousel",
        nextBtn: "#carousel-next",
        prevBtn: "#carousel-prev",
        imagesLinks: {
          Programacion: "./img/code.jpg",
          math: "./img/matematicas.jfif",
          Calculo: "./img/calculo.jfif",
          js: "./img/js.jpg",
        },
      });
    });
  }
}
