import Ajax from "./Ajax.js";

export default function setIntroduction(button, container) {
  let isClosed = localStorage.getItem("closed") || false;

  if (!JSON.parse(isClosed)) {
    Ajax("./html/introduction.html", (text) => {
      document.querySelector(container).innerHTML = text;
    },()=>{},"text");
  }

  document.addEventListener("click", (e) => {
    if (!(e.target.matches(button) || e.target.matches(`${button} *`)))
      return false;

    document.querySelector(button).parentNode.style.transition = "all 0.5s";
    document.querySelector(button).parentNode.style.transform =
      "translateX(-100%)";
    setTimeout(() => {
      document.querySelector(button).parentNode.style.transition = "none";
      document.querySelector(button).parentNode.style.display = "none";
    }, 500);

    localStorage.setItem("closed", true);
  });
}
