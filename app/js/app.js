// Variables
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('menu');
let toggle = false;

// Functions

function toggleIcon(){

    if (toggle){
        navToggle.style.backgroundImage = 'url(../../assets/icons/hamburger.svg)';
    } else {
        navToggle.style.backgroundImage = 'url(../../assets/icons/close.svg)';
    }

    toggle = !toggle;
}

// Main
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('showMenu');

    toggleIcon();
});