// ===============================
// ELEMENTOS
// ===============================

const button = document.getElementById("accelerateBtn");
const car = document.getElementById("car");

const smoke1 = document.querySelector(".smoke1");
const smoke2 = document.querySelector(".smoke2");

const messageSection =
    document.getElementById("messageSection");

const messageCard =
    document.querySelector(".message-card");


// ===============================
// BOTÓN DE ACELERAR
// ===============================

button.addEventListener("click", function () {

    // Animación del auto
    car.classList.remove("fast");

    // Reinicia la animación
    void car.offsetWidth;

    car.classList.add("fast");


    // Humo
    smoke1.classList.remove("show");
    smoke2.classList.remove("show");

    void smoke1.offsetWidth;
    void smoke2.offsetWidth;

    smoke1.classList.add("show");
    smoke2.classList.add("show");


    // Cambiar texto del botón
    button.innerHTML = "🔥 ¡ABEL ESTÁ ACELERANDO!";


    // Mostrar la carta
    setTimeout(function () {

        messageCard.classList.add("show");

        messageSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 900);


    // Regresar texto después
    setTimeout(function () {

        button.innerHTML =
            "🏁 PRESIONA PARA ACELERAR";

    }, 3000);

});


// ===============================
// EFECTO AL HACER SCROLL
// ===============================

window.addEventListener("scroll", function () {

    const cards =
        document.querySelectorAll(".quality");

    cards.forEach(function(card) {

        const position =
            card.getBoundingClientRect().top;

        const screen =
            window.innerHeight;

        if (position < screen - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});


// ===============================
// EFECTO INICIAL DE LAS TARJETAS
// ===============================

document.querySelectorAll(".quality").forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "0.8s ease";

});