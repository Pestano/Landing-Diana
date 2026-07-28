
// ----------------------------
// CURSOR CON INERCIA
// ----------------------------

const cursor = document.querySelector(".cursor");

// Posición actual del cuadrado
let cursorX = 0;
let cursorY = 0;

// Posición del ratón
let mouseX = 0;
let mouseY = 0;

// Cada vez que movemos el ratón guardamos su posición
document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

// Esta función se ejecuta unas 60 veces por segundo
function animateCursor() {

    // El cursor se acerca poco a poco al ratón
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;

    // Movemos el cuadrado
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    // Volvemos a ejecutar la función en el siguiente frame
    requestAnimationFrame(animateCursor);

}

// Arrancamos la animación
animateCursor();
// ----------------------------
// ANIMACIÓN AL HACER SCROLL
// ----------------------------

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

});

reveals.forEach(section => {

    observer.observe(section);

});

// ----------------------------
// PARALLAX EN LA IMAGEN
// ----------------------------

const image = document.querySelector(".about-image");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    image.style.transform = `translateY(${scroll * 0.08}px)`;

});