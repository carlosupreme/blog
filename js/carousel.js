export default function newCarousel({ carousel, nextBtn, prevBtn, imagesLinks }) {
  const { Programacion, Etica, math, Calculo, Admin, Inv } = imagesLinks;
  const $carousel = document.querySelector(carousel);
  const $slides = [...$carousel.children];
  const $nextBtn = document.querySelector(nextBtn);
  const $prevBtn = document.querySelector(prevBtn);

  // Esta variable ayuda a que no hagan multiples clicks
  let isClicked = false;

  $slides.forEach((el) => {
    const currentTitle = el.children[1].textContent.trim(); // Texto dentro del h2
    const currentImage = el.children[0];

    switch (currentTitle) {
      case "Programación":
        currentImage.src = Programacion;
        currentImage.alt = "Programacion";
        currentImage.title = "Programacion";
        break;
      case "Matemáticas Discretas":
        currentImage.src = math;
        currentImage.alt = "math";
        currentImage.title = "math";
        break;
      case "CálculoDiferencial":
        currentImage.src = Calculo;
        currentImage.alt = "Calculo";
        currentImage.title = "Calculo";
        break;
      case "Investigación":
        currentImage.src = Inv;
        currentImage.alt = "Investigación";
        currentImage.title = "Investigación";
        break;
      case "Ética":
        currentImage.src = Etica;
        currentImage.alt = "Etica";
        currentImage.title = "Etica";
        break;
      case "Administración":
        currentImage.src = Admin;
        currentImage.alt = "Administración";
        currentImage.title = "Administración";
        break;
    }
  });

  // Se pone el ultimo slide al inicio, por si le dan click al prevBtn
  $carousel.insertAdjacentElement("afterbegin", $carousel.lastElementChild);

  const nextSlide = () => {
    if (!isClicked) {
      isClicked = true;
      $carousel.style.transition = "margin 0.5s";
      $carousel.style.marginLeft = "-200%";
      setTimeout(() => {
        $carousel.style.transition = null;
        $carousel.insertAdjacentElement(
          "beforeend",
          $carousel.firstElementChild
        );
        $carousel.style.marginLeft = "-100%";
        isClicked = false;
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isClicked) {
      isClicked = true;
      $carousel.style.transition = "margin 0.5s";
      $carousel.style.marginLeft = "0";
      setTimeout(() => {
        $carousel.style.transition = null;
        $carousel.insertAdjacentElement(
          "afterbegin",
          $carousel.lastElementChild
        );
        $carousel.style.marginLeft = "-100%";
        isClicked = false;
      }, 500);
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target === $nextBtn) {
      nextSlide();
    } else if (e.target === $prevBtn) {
      prevSlide();
    } else return false;
  });

  // setInterval(() => {
  //   nextSlide()
  // }, 1000);
}

// newCarousel({
//     carousel: ".carousel-container .carousel",
//     nextBtn: "#carousel-next",
//     prevBtn: "#carousel-prev",
//     imagesLinks: {
//       Programacion: "./img/code.jpg",
//       Etica: "./img/la_muerte_de_socrates.jpg",
//       math: "./img/matematicas.jfif",
//       Calculo: "./img/calculo.jfif",
//       Admin: "./img/admin.jpg",
//       Inv: "./img/inv.jpg",
//     },
//   });
