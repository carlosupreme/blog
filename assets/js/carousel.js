export default function ({ carousel, nextBtn, prevBtn }) {
  const $carousel = document.querySelector(carousel);
  const $nextBtn = document.querySelector(nextBtn);
  const $prevBtn = document.querySelector(prevBtn);
  // Se pone el ultimo slide al inicio, por si le dan click al prevBtn
  $carousel.insertAdjacentElement("afterbegin", $carousel.lastElementChild);

  const nextSlide = () => {
    $carousel.style.transition = "margin 0.5s";
    $carousel.style.marginLeft = "-200%";
    setTimeout(() => {
      $carousel.style.transition = null;
      $carousel.insertAdjacentElement("beforeend", $carousel.firstElementChild);
      $carousel.style.marginLeft = "-100%";
    }, 500);
  };

  const prevSlide = () => {
    $carousel.style.transition = "margin 0.5s";
    $carousel.style.marginLeft = "0";
    setTimeout(() => {
      $carousel.style.transition = null;
      $carousel.insertAdjacentElement("afterbegin", $carousel.lastElementChild);
      $carousel.style.marginLeft = "-100%";
    }, 500);
  };

  document.addEventListener("click", (e) => {
    if (e.target === $nextBtn) nextSlide();
    else if (e.target === $prevBtn) prevSlide();
    else return false;
  });
}
