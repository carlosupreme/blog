import Ajax from "./Ajax.js";
import setTag from "../setTag.js"
export default async function Router($root) {
  let { hash } = location;

  $root.innerHTML = null;

  const insertText = (text) => {
    $root.insertAdjacentHTML("beforeend", text);
  };

  if (!hash || hash === "#/") {
    await Ajax()
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
  } else {
    await Ajax("./html/404.html", insertText);
  }
  setTag();
}
