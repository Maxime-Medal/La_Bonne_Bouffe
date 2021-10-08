function toggleMenu () {
    const menu = document.querySelector('.menu-list');
    const toggleBurger = document.querySelector('#toggle-burger');
    toggleBurger.addEventListener("click" , () => {
        menu.classList.toggle("show");
    })
}

toggleMenu();


const frat = document.querySelector('.bold');

frat.addEventListener(, () => {
    alert("Frat = Mi-frais, mi-fat");
})