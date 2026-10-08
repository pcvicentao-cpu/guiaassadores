/* =========================
   MENU MOBILE
========================= */

const menuButton =
    document.getElementById("menuButton");

const menu =
    document.getElementById("menu");


menuButton.addEventListener("click", () => {

    menu.classList.toggle("open");

});


document.querySelectorAll("#menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");

        });

    });


/* =========================
   BANCO DE CARNES
========================= */

const meats = [

    {
        name: "Picanha",
        category: "bovina",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Picanha_barbecue.jpg",

        description:
            "Corte clássico brasileiro. A gordura ajuda a proteger a carne e contribui para sabor e crosta.",

        seasoning:
            "10–12 g de sal por kg",

        fire:
            "Direto + zona de segurança",

        technique:
            "Comece com a gordura voltada para cima e controle a distância da brasa. Finalize na zona quente para formar crosta.",

        point:
            "Para preferência culinária bovina, use a escala de ponto e confirme sempre com termômetro.",

        steps: [
            "Seque a superfície da picanha.",
            "Faça cortes superficiais na gordura, sem atingir profundamente a carne.",
            "Tempere de maneira uniforme.",
            "Monte uma zona quente e outra indireta.",
            "Comece em calor controlado.",
            "Finalize na zona quente para criar a crosta.",
            "Retire conforme a temperatura desejada.",
            "Deixe descansar antes de cortar."
        ]
    },


    {
        name: "Ancho",
        category: "bovina",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ribeyes.jpeg",

        description:
            "Corte alto e marmorizado. Excelente para treinar crosta e controle do ponto.",

        seasoning:
            "10–12 g de sal por kg",

        fire:
            "Direto forte + indireto",

        technique:
            "Sele rapidamente e depois mova para uma zona menos intensa para controlar o centro.",

        point:
            "Use termômetro e escolha o ponto culinário desejado para cortes bovinos.",

        steps: [
            "Deixe a superfície seca.",
            "Tempere pouco antes do fogo.",
            "Grelhe em calor alto.",
            "Vire quando houver boa crosta.",
            "Mova para calor indireto.",
            "Meça o centro.",
            "Descanse antes de servir."
        ]
    },


    {
        name: "Fraldinha",
        category: "bovina",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flank_steaks.jpg",

        description:
            "Corte com fibras marcadas. O corte correto depois do descanso é fundamental.",

        seasoning:
            "10–12 g de sal por kg",

        fire:
            "Direto médio/alto",

        technique:
            "Controle o tempo para evitar excesso de cozimento e sempre corte contra a fibra.",

        point:
            "Para cortes bovinos, utilize o termômetro para acompanhar a temperatura interna.",

        steps: [
            "Observe a direção das fibras antes de assar.",
            "Tempere uniformemente.",
            "Coloque sobre calor direto.",
            "Crie uma crosta uniforme.",
            "Retire quando chegar à temperatura desejada.",
            "Descanse.",
            "Corte contra a fibra."
        ]
    },


    {
        name: "Costela bovina",
        category: "bovina",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ribs_barbecue.jpg",

        description:
            "Peça que exige calor controlado e tempo. O objetivo é desenvolver maciez sem queimar a superfície.",

        seasoning:
            "10–14 g de sal por kg",

        fire:
            "Predominantemente indireto",

        technique:
            "Mantenha temperatura estável e use calor indireto por longo período.",

        point:
            "Costela não deve ser tratada como um bife fino. Observe principalmente a maciez e a evolução do tecido conjuntivo.",

        steps: [
            "Prepare a peça e retire excessos indesejados.",
            "Tempere de forma uniforme.",
            "Prepare fogo indireto.",
            "Mantenha temperatura estável.",
            "Evite abrir a churrasqueira sem necessidade.",
            "Monitore a temperatura interna.",
            "Avalie a maciez antes de finalizar.",
            "Descanse antes de cortar."
        ]
    },


    {
        name: "Costela suína",
        category: "suina",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Barbecued_-_Pork_ribs.jpg",

        description:
            "Corte rico em tecido conjuntivo que se beneficia de cozimento controlado e longo.",

        seasoning:
            "25–30 g de dry rub por kg",

        fire:
            "Indireto",

        technique:
            "Use fogo indireto e controle a superfície para desenvolver sabor sem carbonizar.",

        point:
            "O objetivo principal é textura macia e cozimento completo.",

        steps: [
            "Retire a membrana quando necessário.",
            "Aplique dry rub.",
            "Prepare a zona indireta.",
            "Cozinhe lentamente.",
            "Controle a temperatura da churrasqueira.",
            "Finalize diretamente apenas se precisar de cor.",
            "Descanse antes de servir."
        ]
    },


    {
        name: "Lombo suíno",
        category: "suina",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pork_loin.jpg",

        description:
            "Peça relativamente magra. O grande desafio é não ultrapassar o cozimento necessário.",

        seasoning:
            "12–14 g de sal por kg",

        fire:
            "Direto + indireto",

        technique:
            "Sele para criar cor e termine em calor indireto.",

        point:
            "Para cortes inteiros de suíno, a referência de segurança é 63 °C com 3 minutos de descanso.",

        steps: [
            "Tempere a peça.",
            "Sele em calor direto.",
            "Mova para a zona indireta.",
            "Monitore o centro.",
            "Retire ao atingir a temperatura adequada.",
            "Descanse por pelo menos 3 minutos."
        ]
    },


    {
        name: "Frango",
        category: "aves",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_BBQ.jpg",

        description:
            "O frango exige atenção especial à segurança e à diferença de cozimento entre peito e coxa.",

        seasoning:
            "12–15 g de sal por kg",

        fire:
            "Indireto + finalização direta",

        technique:
            "Cozinhe principalmente no calor indireto e use calor direto no final para dourar.",

        point:
            "Aves devem atingir 74 °C na parte mais espessa.",

        steps: [
            "Tempere o frango.",
            "Prepare a zona indireta.",
            "Coloque o frango longe da chama direta.",
            "Monitore peito e regiões mais grossas.",
            "Finalize sobre calor direto para dourar.",
            "Confirme 74 °C na parte mais espessa.",
            "Descanse antes de servir."
        ]
    },


    {
        name: "Asa de frango",
        category: "aves",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bbq_chicken_wings.JPG",

        description:
            "Pequena, saborosa e ótima para treinar controle de calor.",

        seasoning:
            "12–15 g de sal por kg",

        fire:
            "Médio + finalização direta",

        technique:
            "Evite calor exagerado no início para não queimar a pele antes do interior cozinhar.",

        point:
            "Confirme 74 °C na região mais espessa.",

        steps: [
            "Tempere.",
            "Comece em calor moderado.",
            "Vire regularmente.",
            "Afaste de chamas diretas.",
            "Finalize em calor mais forte.",
            "Confirme a temperatura interna."
        ]
    },


    {
        name: "Linguiça",
        category: "suina",

        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sausages_on_a_Barbecue.jpg",

        description:
            "O objetivo é cozinhar o interior sem estourar a pele e sem carbonizar o exterior.",

        seasoning:
            "Normalmente já temperada",

        fire:
            "Médio",

        technique:
            "Evite fogo excessivamente agressivo. Gire a linguiça para distribuir o calor.",

        point:
            "Por ser carne moída, confirme aproximadamente 71 °C para carnes suínas/bovinas moídas.",

        steps: [
            "Prepare uma brasa média.",
            "Coloque as linguiças longe das chamas.",
            "Gire gradualmente.",
            "Evite furar a pele.",
            "Finalize sobre calor direto se necessário.",
            "Confirme a temperatura interna."
        ]
    }

];


/* =========================
   RENDER CARNES
========================= */

const meatGrid =
    document.getElementById("meatGrid");


function renderMeats(filter = "all") {

    meatGrid.innerHTML = "";


    const filtered =
        filter === "all"
            ? meats
            : meats.filter(
                meat => meat.category === filter
            );


    filtered.forEach((meat, index) => {

        const card =
            document.createElement("article");

        card.className = "meat-card";

        card.dataset.index =
            meats.indexOf(meat);


        card.innerHTML = `

            <img
                src="${meat.image}"
                alt="${meat.name}"
                loading="lazy"
            >

            <div class="meat-content">

                <span class="tag">
                    ${meat.category}
                </span>

                <h3>
                    ${meat.name}
                </h3>

                <p>
                    ${meat.description}
                </p>

                <span class="meat-button">
                    VER TÉCNICA →
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openMeat(meats.indexOf(meat))
        );


        meatGrid.appendChild(card);

    });

}


renderMeats();


/* =========================
   FILTROS
========================= */

document.querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                renderMeats(
                    button.dataset.filter
                );

            }
        );

    });


/* =========================
   MODAL
========================= */

const modal =
    document.getElementById("meatModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalSeasoning =
    document.getElementById("modalSeasoning");

const modalFire =
    document.getElementById("modalFire");

const modalTechnique =
    document.getElementById("modalTechnique");

const modalPoint =
    document.getElementById("modalPoint");

const modalSteps =
    document.getElementById("modalSteps");


function openMeat(index) {

    const meat =
        meats[index];


    modalImage.src =
        meat.image;

    modalImage.alt =
        meat.name;

    modalTitle.textContent =
        meat.name;

    modalCategory.textContent =
        meat.category;

    modalDescription.textContent =
        meat.description;

    modalSeasoning.textContent =
        meat.seasoning;

    modalFire.textContent =
        meat.fire;

    modalTechnique.textContent =
        meat.technique;

    modalPoint.textContent =
        meat.point;


    modalSteps.innerHTML = "";


    meat.steps.forEach(step => {

        const li =
            document.createElement("li");

        li.textContent =
            step;

        modalSteps.appendChild(li);

    });


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";
}


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";
}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================
   CALCULADORA DE TEMPERO
========================= */

const weight =
    document.getElementById("weight");

const seasoning =
    document.getElementById("seasoning");

const seasoningResult =
    document.getElementById(
        "seasoningResult"
    );


function calculateSeasoning() {

    const kg =
        Number(weight.value) || 0;


    let result;


    switch (
        seasoning.value
    ) {

        case "salt":

            result =
                kg * 12;

            seasoningResult.textContent =
                `${result.toFixed(0)} g de sal`;

            break;


        case "dryrub":

            result =
                kg * 28;

            seasoningResult.textContent =
                `${result.toFixed(0)} g de dry rub`;

            break;


        case "herbs":

            result =
                kg * 12;

            seasoningResult.textContent =
                `${result.toFixed(0)} g de sal + alho e ervas`;

            break;


        case "marinade":

            result =
                kg * 225;

            seasoningResult.textContent =
                `${result.toFixed(0)} ml de marinada`;

            break;

    }

}


weight.addEventListener(
    "input",
    calculateSeasoning
);


seasoning.addEventListener(
    "change",
    calculateSeasoning
);


calculateSeasoning();


/* =========================
   CHECKLIST
========================= */

document
    .querySelectorAll(
        '.checklist input[type="checkbox"]'
    )
    .forEach(
        (checkbox, index) => {

            const key =
                `assador-check-${index}`;

            checkbox.checked =
                localStorage.getItem(key)
                === "true";


            checkbox.addEventListener(
                "change",
                () => {

                    localStorage.setItem(
                        key,
                        checkbox.checked
                    );

                }
            );

        }
    );