"use strict";
// Configurando o dark Mode
const body = document.querySelector('body');
const darkMode = document.getElementById('darkModeTag');
darkMode.addEventListener('click', function () {
    // adicionando classe toggle ao body
    body.classList.toggle('dark');
    // logica caso a classe seja retirada
    if (body.className == 'dark') {
        darkMode.setAttribute('class', 'bi bi-moon-stars');
    }
    else {
        darkMode.setAttribute('class', 'bi bi-sun');
    }
    loadBodyColor();
});
// Salvando o background na localStorage
function loadBodyColor() {
    localStorage.setItem('background', JSON.stringify(body.className));
}
// Pegando o background da localStorage
function loadPage() {
    if (localStorage.getItem('background') !== null) {
        let isDark = localStorage.getItem('background');
        isDark = JSON.parse(isDark);
        if (isDark == 'dark') {
            body.classList.add('dark');
            darkMode.setAttribute('class', 'bi bi-moon-stars');
        }
    }
}
