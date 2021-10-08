const menu = document.querySelector('.menu-list');
const toggleBurger = document.querySelector('#toggle-burger');

function toggleMenu () {
    toggleBurger.addEventListener('click', () => {
        menu.classList.toggle("show");
    });
}

toggleMenu();






