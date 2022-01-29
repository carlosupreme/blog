export default function setTag() {
  const divs = document.querySelectorAll('[data-style="tag"]');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`;
  const svgActive = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`;

  function getStars(s) {
    let strStars = "";
    if (s == 1) strStars = svgActive;
    else if (s == 2) strStars = svgActive + svgActive;
    else if (s == 3) strStars = svgActive + svgActive + svgActive;
    else if (s == 4) strStars = svgActive + svgActive + svgActive + svgActive;
    else if (s == 5)
      strStars = svgActive + svgActive + svgActive + svgActive + svgActive;
    return { strStars, s };
  }

  function getActive(s) {
    if (s == 0) return "";
    if (s == 1) return svg;
    if (s == 2) return svg + svg;
    if (s == 3) return svg + svg + svg;
    if (s == 4) return svg + svg + svg + svg;
    if (s == 5) return svg + svg + svg + svg + svg;
  }

  divs.forEach((el) => {
    const { stars, unidad, name } = el.dataset;

    el.outerHTML = `
    <div class="tag">
      <span class="s--2 flex-center">Unidad ${unidad}</span>
      <span class="s--2 level flex-center">Dificultad:
        <div class="star">${getStars(stars).strStars} 
          ${getActive(5 - getStars(stars).s)}</div>
        <b class="s --3">${stars}/5</b>
      </span>
      <h2 class="s-1 txt-center">${name}</h2>
    </div>
    `;
  });
}
