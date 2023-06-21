import DarkmodeBtn from "./DarkModeBtn.js";

function MenuButton(navbar) {
  const $button = document.createElement("i");

  $button.classList = navbar.classList.contains("active")
    ? "fas fa-times"
    : "fas fa-bars";

  document.addEventListener("click", (e) => {
    if (e.target === $button) {
      navbar.classList.toggle("active");
      $button.classList = navbar.classList.contains("active")
        ? "fas fa-times"
        : "fas fa-bars";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "b" && e.ctrlKey) {
      $button.click();
    }
  });
  return $button;
}

export default function Sidebar() {
  const $div = document.createElement("div");
  $div.classList = "sidebar";
  $div.innerHTML = `
    <div class="links">
      <a href="#/JavaScript">JavaScript</a>
      <a href="#/Programacion">Programacion</a>
      <a href="#/Matematicas">Matematicas</a>
      <a href="#/Calculo">Calculo</a>
    </div>
    <div class="github">
    <img src="./img/miyata.jfif">
    <div class="text">
      <h5>Carlos Sosa</h5>
      <h6>Estudiante</h6>
    </div>
    <a href="https://www.github.com/carlosupreme" target="_blank" class="fab fa-github"></a>
    </div>
  `;
  $div.insertAdjacentElement("afterbegin", MenuButton($div));
  $div.insertAdjacentElement("beforeend", DarkmodeBtn());
  return $div;
}
