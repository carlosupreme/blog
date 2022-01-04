import isMySelector from "./helpers/check_for_selector.js";
export default function scrollTo(btn, options) {
  document.addEventListener("click", (e) => {
    if (isMySelector(e, btn)) window.scrollTo(options);
  });
}
