const btnSwitch = document.querySelector("#switch");
const btnSwitch2 = document.querySelector("#switch2");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");
function cambiarModo() {
    document.body.classList.toggle("dark");
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
    main.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
}

function cambiarModo2() {
    document.body.classList.toggle("dark");
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
    main.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    
}

btnSwitch.addEventListener("click", cambiarModo);
btnSwitch2.addEventListener("click", cambiarModo2);