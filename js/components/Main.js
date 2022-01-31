import Router from "../helpers/Router.js";

export default function Main() {
  const $main = document.createElement("main");
  Router($main);
  window.addEventListener("hashchange", () => Router($main));
  return $main;
}
