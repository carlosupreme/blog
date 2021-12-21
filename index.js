import setIntroduction from "./js/introduction.js";
import PrimaryMenu from "./js/PrimaryMenu.js";
import Router from "./js/Router.js";

let root = document.querySelector("#materia-container");

document.addEventListener("DOMContentLoaded", () => {
  setIntroduction("#collapse-introduction", "#introduction");
  PrimaryMenu();
  Router(root);
  // intersecting()
});

window.addEventListener("hashchange", () => {
  Router(root);
});

function intersecting() {
  let left = document.querySelector("body .left");
  let options = {
    root: null,
    threshold: [0.1, 1.0],
  };

  const callback = (entries, observer) => {
    console.log({ entries, observer });
    entries.forEach((el) => {
      if (!el.isIntersecting) {
        document.querySelector("body").style.display = "block";
        left.classList.add("fixed");
      } else {
        document.querySelector("body").style.gridTemplateColumns = "1fr 3fr";
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(left);
}
