export default function PrimaryMenu(sidebar, menuBtn) {
  const $sidebar = document.querySelector(sidebar);
  const $menuBtn = document.querySelector(menuBtn);
  const $searchBtn = document.querySelector(sidebar + " .bx-search");
  const $searchInput = document.querySelector(sidebar + " #searchInput");

  document.addEventListener("click", (e) => {
    if (e.target === $menuBtn || e.target === $searchBtn) {
      $sidebar.classList.toggle("active");
    }
  });

  // PARA HACER UN FILTRO:
  // document.addEventListener("keydown", (e) => {
  //   if (e.key === "f" && e.ctrlKey) {
  //     e.preventDefault();
  //     $sidebar.classList.add(
  //       $sidebar.classList.contains("active") ? "" : "active"
  //     );
  //     $searchInput.focus();
  //   } else if (e.key === "b" && e.ctrlKey) {
  //     e.preventDefault();
  //     $menuBtn.click();
  //   }
  // });
}
