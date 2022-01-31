import Ajax from "./Ajax.js";
import newCarousel from "../components/carousel.js";

export default async function Router($root) {
  let { hash } = location;

  $root.innerHTML = null;

  const insertText = (text) => {
    $root.insertAdjacentHTML("beforeend", text);
  };

  if (!hash || hash === "#/") {
    Ajax("./html/carousel.html", (text) => {
      $root.innerHTML = text;
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
  } else if (hash.includes("Programacion")) {
    await Ajax("./html/programacion.html", insertText);
  } else if (hash.includes("Matematicas")) {
    await Ajax("./html/mate.html", insertText);
  } else if (hash.includes("Investigacion")) {
    await Ajax("./html/inv.html", insertText);
  } else if (hash.includes("Calculo")) {
    await Ajax("./html/calculo.html", insertText);
  } else if (hash.includes("Etica")) {
    await Ajax("./html/etica.html", insertText);
  } else if (hash.includes("Administracion")) {
    await Ajax("./html/administracion.html", insertText);
  } else if (hash.includes("JavaScript")) {
    await Ajax("./html/js.html", insertText);
  } else {
    await Ajax("./html/404.html", insertText);
  }
}
