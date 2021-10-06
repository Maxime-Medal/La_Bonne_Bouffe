function toggleMenu () {
    const menu = document.querySelector('.menu-list');
    const toggleBurger = document.querySelector('#toggle-burger');
    toggleBurger.addEventListener("click" , () => {
        menu.classList.toggle("show");
    })
}

toggleMenu();

function Icon () {
    const burgerIcon = document.querySelector('#burger-icon');
    const closeIcon = document.querySelector('#close-icon');
    
}