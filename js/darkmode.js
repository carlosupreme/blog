import isMySelector from "./helpers/check_for_selector.js";

export default function darkmode(selector, classValue, sun, moon) {
  localStorage.getItem("darkmode") ?? localStorage.setItem("darkmode", false);

  const HTML = document.documentElement;
  function setDark() {
    localStorage.setItem("darkmode", true);
    HTML.classList = classValue;
    document.querySelector(selector).classList = sun;
  }

  function setLigth() {
    localStorage.setItem("darkmode", false);
    HTML.classList = "";
    document.querySelector(selector).classList = moon;
  }

  function toggleClass() {
    if (HTML.classList.contains(classValue)) setLigth();
    else setDark();
  }

  if (JSON.parse(localStorage.getItem("darkmode"))) {
    setDark();
  } else {
    setLigth();
  }

  document.addEventListener("click", (e) => {
    if (isMySelector(e, selector)) {
      toggleClass();
    }
  });
}
