const btnSwitch = document.querySelector("#switch");
const btnSwitch2 = document.querySelector("#switch2");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
    document.body.classList.add("dark");
    header.classList.add("dark");
    footer.classList.add("dark");
    main.classList.add("dark");
    btnSwitch.classList.add("active");
    btnSwitch2.classList.add("active");
}

function cambiarModo() {
    main.classList.toggle("dark");
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    btnSwitch2.classList.toggle("active");

    const isDarkMode = main.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode.toString());
}

btnSwitch.addEventListener("click", cambiarModo);
btnSwitch2.addEventListener("click", cambiarModo);