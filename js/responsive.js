export function removeElement(element, mq) {
  let el = document.querySelector(element);
  let breakpoint = window.matchMedia(mq);

  const responsive = (e) => {
    e.matches ? (el.style.display = "block") : (el.style.display = "none");
  };

  breakpoint.addEventListener("change", responsive);

  responsive(breakpoint);
}
