export default function ScrollUpBtn() {
  const $btn = document.createElement("i");
  $btn.classList = "fas fa-chevron-up";
  
  document.addEventListener("scroll", (e) => {
    if (scrollY > 400) {
      $btn.classList.add("active");
    } else {
      $btn.classList.contains("active") ? $btn.classList.remove("active") : "";
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target === $btn) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });

  return $btn;
}
