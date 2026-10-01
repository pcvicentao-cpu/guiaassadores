const checklistItems = [
  "Definir uma zona de calor direto e outra indireta",
  "Registrar corte, peso e condição inicial da peça",
  "Anotar combustível e quantidade aproximada",
  "Medir a temperatura interna durante o processo",
  "Registrar uma intervenção feita no fogo",
  "Observar e fotografar a crosta antes do corte",
  "Respeitar o descanso antes de fatiar",
  "Anotar uma decisão para repetir e uma para mudar"
];


const metrics = [
  ["Fogo", "estabilidade e controle"],
  ["Temperatura", "medição e condução"],
  ["Crosta", "cor e uniformidade"],
  ["Textura", "maciez e suculência"],
  ["Repetibilidade", "capacidade de reproduzir"]
];


const checklist = document.querySelector("#checklist");
const sliders = document.querySelector("#sliders");
const total = document.querySelector("#total");

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


/* CHECKLIST */

checklistItems.forEach((item, index) => {

  const label = document.createElement("label");

  label.className = "check";

  label.innerHTML = `
    <input
      type="checkbox"
      aria-label="${item}"
    >
    <span>${item}</span>
  `;

  const input = label.querySelector("input");

  const key = `ga-check-${index}`;


  input.checked = localStorage.getItem(key) === "1";

  label.classList.toggle(
    "done",
    input.checked
  );


  input.addEventListener("change", () => {

    label.classList.toggle(
      "done",
      input.checked
    );

    localStorage.setItem(
      key,
      input.checked ? "1" : "0"
    );

  });


  checklist.appendChild(label);

});


/* AVALIAÇÃO */

function updateScore() {

  const values = [
    ...sliders.querySelectorAll(
      "input[type=range]"
    )
  ].map(input => Number(input.value));


  const average =
    values.reduce(
      (sum, value) => sum + value,
      0
    ) / values.length;


  total.textContent =
    average.toFixed(1).replace(".", ",");
}


metrics.forEach(
  ([name, description], index) => {

    const wrapper =
      document.createElement("div");

    wrapper.className = "score-field";


    wrapper.innerHTML = `
      <label class="score-label">

        <span>
          ${name}
          <small>
            · ${description}
          </small>
        </span>

        <b>5</b>

      </label>

      <input
        type="range"
        min="1"
        max="10"
        value="5"
        aria-label="${name}"
      >
    `;


    const input =
      wrapper.querySelector("input");

    const value =
      wrapper.querySelector("b");


    input.addEventListener(
      "input",
      () => {

        value.textContent =
          input.value;

        updateScore();

      }
    );


    sliders.appendChild(wrapper);

  }
);


/* MENU MOBILE */

menu.addEventListener("click", () => {

  const open =
    nav.classList.toggle(
      "mobile-open"
    );


  menu.setAttribute(
    "aria-expanded",
    String(open)
  );

});


document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "mobile-open"
        );

        menu.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });


/* INICIALIZAÇÃO */

updateScore();