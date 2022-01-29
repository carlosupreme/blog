export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = `
    <h1>Primer semestre</h1>
  `;

  $header.insertAdjacentElement("beforeend", DarkmodeBtn());

  return $header;
}

function DarkmodeBtn() {
  localStorage.getItem("darkmode") ?? localStorage.setItem("darkmode", false);

  const $btn = document.createElement("i");
  const HTML = document.documentElement;

  if (JSON.parse(localStorage.getItem("darkmode"))) {
    setDark();
  } else {
    setLigth();
  }

  function setDark() {
    localStorage.setItem("darkmode", true);
    HTML.classList = "dark";
    $btn.classList = "fas fa-sun";
  }

  function setLigth() {
    localStorage.setItem("darkmode", false);
    HTML.classList = "";
    $btn.classList = "fas fa-moon";
  }

  document.addEventListener("click", (e) => {
    if (e.target === $btn) {
      if (HTML.classList.contains("dark")) setLigth();
      else setDark();
    }
  });

  return $btn;
}
