import Ajax from "./Ajax.js";
import setTag from "./setTag.js";
import setIntroduction from "./introduction.js";
let h2s = document.querySelectorAll(".primary-link");

export default async function Router($root) {
  let { hash } = location;

  h2s.forEach((el) => {
    el.textContent.includes(hash.slice(2))
      ? el.classList.add("active")
      : el.classList.remove("active");
  });

  $root.innerHTML = null;

  const insertText = (text) => {
    $root.innerHTML += text;
  };

  const err = (error) => {
    let msg = error.statusText || "Ocurrio un error";
    $root.insertAdjacentHTML("beforeend", msg);
    console.log(error);
  };

  if (!hash || hash === "#/") {
    h2s.forEach((el) => {
      el.classList.remove("active");
    });
    await Ajax(
      "./html/introduction.html",
      (text) => {
        insertText(text);
        setTimeout(
          () =>
            setIntroduction(
              [
                $root.querySelector("#collapse-introduction *"),
                $root.querySelector("#collapse-introduction"),
              ],
              $root
            ),
          100
        );
      },
      err,
      "text"
    );
  } else if (hash.includes("Programacion")) {
    await Ajax("./html/programacion.html", insertText, err, "text");
  } else if (hash.includes("Matematicas")) {
    await Ajax(
      "./html/mate.html",
      (text) => {
        insertText(text);
        setTimeout(() => {
          Ajax("./html/contenido/matematicas1-1.html", (html) => {
            document.querySelector("[data-page]").innerHTML = html
          }, err, "text");
        }, 100);
      },
      err,
      "text"
    );
  } else if (hash.includes("Investigacion")) {
    await Ajax("./html/inv.html", insertText, err, "text");
  } else if (hash.includes("Calculo")) {
    await Ajax("./html/calculo.html", insertText, err, "text");
  } else if (hash.includes("Etica")) {
    await Ajax("./html/etica.html", insertText, err, "text");
  } else if (hash.includes("Administracion")) {
    await Ajax("./html/administracion.html", insertText, err, "text");
  } else {
    await Ajax("./html/404.html", insertText, err, "text");
    h2s.forEach((el) => {
      el.classList.remove("active");
    });
  }
  setTag();
}
