let collapsableSideBar = document.getElementById('collapsable-navbar');
let menuIcon = document.getElementById('menu-icon');
let closeMenuIcon = document.getElementById('close-menu-icon');

// Funciones que muestran u ocultan la barra de navegación lateral.
menuIcon.addEventListener('click', () => {
    collapsableSideBar.classList.add('show-navbar');
})

closeMenuIcon.addEventListener('click', () => {
    collapsableSideBar.classList.remove('show-navbar');
})



let navbar = document.getElementById('navbar');
let navbarLogo = document.getElementById('navbar-logo');

// La barra de navegación, el menú de hamburguesa y el logo de la página cambian de color cuando el usuario hace una determinada cantidad de scroll, en este caso, 850 pixeles.
window.addEventListener("scroll", () => {
    if (window.scrollY >= 850) {
        navbar.classList.add('turn-darkmode');
        menuIcon.classList.add('turn-darkmode');
        navbarLogo.setAttribute('src', 'images/logo-white.svg')
    }
    if (window.scrollY <= 850) {
        navbar.classList.remove('turn-darkmode');
        menuIcon.classList.remove('turn-darkmode');
        navbarLogo.setAttribute('src', 'images/logo-black.svg')
    }
});