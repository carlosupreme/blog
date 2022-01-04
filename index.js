import darkmode from "./js/darkmode.js";
import PrimaryMenu from "./js/PrimaryMenu.js";
// import Router from "./js/Router.js";

// let root = document.querySelector("#root");
// Router(root);

document.addEventListener("DOMContentLoaded", () => {
  PrimaryMenu(".sidebar", "#btn")
  darkmode("#darkmode-btn", "dark", "bx bx-sun", "bx bxs-moon");
});

// window.addEventListener("hashchange", () => {
//   Router(root);
// });
