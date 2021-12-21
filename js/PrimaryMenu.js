export default function PrimaryMenu() {
  const btnMenu = document.querySelector("#menu-btn i");
  const divs = [
    document.querySelector(".left"),
    document.querySelector(".right"),
  ];
  document.addEventListener("click", (e) => {
    if (e.target.matches("#menu-btn") || e.target === btnMenu) {
      divs.forEach((el) => el.classList.toggle("active"));
      btnMenu.classList = !divs[0].classList.value.includes("active")
        ? "icon-angle-left"
        : "icon-angle-left derecha";
    }
  });

  document.addEventListener(
    "keydown",
    (e) =>
      e.key == "b" && e.ctrlKey && document.querySelector("#menu-btn").click()
  );
}
