export default function carrousel(slider, prev, next) {
  const $slider = document.querySelector(slider),
    $btnNext = document.querySelector(next),
    $btnPrev = document.querySelector(prev),
    $slides = [...$slider.children];

  let interval;
  // go to next slide
  const nextSlide = () => {
    $btnPrev.classList.remove("hidden");
    for (let i = 0; i < $slides.length; i++) {
      if ($slides[i].classList.contains("is-active")) {
        if (!$slides[i + 1].nextElementSibling) {
          $btnNext.classList.add("hidden");
        }
        $slides[i].classList.remove("is-active");
        $slides[i].nextElementSibling.classList.add("is-active");
        break;
      }
    }
  };
  // go to previous slide
  const prevSlide = () => {
    $btnNext.classList.remove("hidden");
    for (let i = 0; i < $slides.length; i++) {
      if ($slides[i].classList.contains("is-active")) {
        if (!$slides[i].previousElementSibling)
          $btnPrev.classList.add("hidden");
        $slides[i].classList.remove("is-active");
        $slides[i].previousElementSibling.classList.add("is-active");
        if (!$slides[i].previousElementSibling.previousElementSibling)
          $btnPrev.classList.add("hidden");
        break;
      }
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target === $btnNext) {
      clearInterval(interval);
      nextSlide();
    }
    if (e.target === $btnPrev) {
      clearInterval(interval);
      prevSlide();
    }
  });
  // initial call
  interval = setInterval(() => nextSlide(), 4000);
  setTimeout(() => {
    clearInterval(interval);
  }, 20000); //20secs = 6 slides
}
