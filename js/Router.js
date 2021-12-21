import Ajax from "./Ajax.js";
import setTag from "./setTag.js";

let h1 = document.querySelector(".h1");
let h2s = document.querySelectorAll(".primary-link");

export default function Router($root) {
  let { hash } = location;

  h1.classList.remove("active");

  h2s.forEach((el) => {
    el.textContent.trim() === hash.slice(2)
      ? el.classList.add("active")
      : el.classList.remove("active");
  });

  $root.innerHTML = null;

  const insertText = (text) => {
    $root.innerHTML += text;
  };

  const err = (error) => {
    let msg = error.statusText || "Ocurrio un error";
    $root.innerHTML += msg;
    console.log(error);
  };

  if (!hash || hash === "#/") {
    if (!localStorage.getItem("closed")) {
      Ajax("./html/introduction.html", insertText, err, "text");
    }
    h2s.forEach((el) => {
      el.classList.remove("active");
    });
  } else if (hash.includes("Programacion")) {
    Ajax("./html/programacion.html", insertText, err, "text");
  } else if (hash.includes("Matematicas")) {
    Ajax("./html/mate.html", insertText, err, "text");
  } else if (hash.includes("Investigacion")) {
    Ajax("./html/inv.html", insertText, err, "text");
  } else if (hash.includes("Calculo")) {
    Ajax("./html/calculo.html", insertText, err, "text");
  } else if (hash.includes("Etica")) {
    Ajax("./html/etica.html", insertText, err, "text");
  } else if (hash.includes("Administracion")) {
    Ajax("./html/administracion.html", insertText, err, "text");
  } else {
    Ajax("./html/404.html", insertText, err, "text");
    h2s.forEach((el) => {
      el.classList.remove("active");
    });
  }
}
