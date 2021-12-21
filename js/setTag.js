export default function setTag(unidad = 1, stars = 5, div) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`;
  let html = `
  <div class="tag">
    <span>Unidad ${unidad}</span>
    <span class="level"
      >Dificultad:
      <div class="star">
      ${svg}${svg}${svg}${svg}${svg}
      </div>
      <b>${stars}/5</b>
    </span>
  </div>
  `;

  div.insertAdjacentHTML("afterbegin", html);

  for (let i = stars; i >= 1; i--) {
    div.querySelector(`svg:nth-child(${i})`).classList.add("active");
  }

  return div;
}
