export default function setTag() {
  const div = document.querySelectorAll('[data-style="tag"]');
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`;
  div.forEach((el) => {
    el.innerHTML = `
    <div class="tag">
    <span class="s--2 flex-center font-color">Unidad ${el.dataset.unidad}</span>
    <span class="s--2 level flex-center font-color"
    >Dificultad:
    <div class="star">
    ${svg}${svg}${svg}${svg}${svg}
    </div>
    <b class="s--3">${el.dataset.stars}/5</b>
    </span>
    <h2 class="s-2 txt-center font-color">${el.dataset.name}</h2>
    </div>
    `;

    for (let i = 1; i <= el.dataset.stars; i++) {
      el.querySelector(`svg:nth-child(${i})`).classList.add("active");
    }
    
  });
}
