const menuBtn = document.querySelector('.menu-btn');
const menuN = document.querySelector('.menu-containerN');
const dropdowns = document.querySelectorAll('.dropdown > div');
const subDropdowns = document.querySelectorAll('.sub-dropdown > div');

let menuOpen = false; 

menuBtn.addEventListener('click', () => {
    menuN.classList.toggle('mega-menu-show');
    if(menuOpen === false) {
        menuBtn.innerHTML = `
        <span class='material-symbols-outlined'>
            close
        </span>
        `;
        menuOpen = true;
    } else {
        menuBtn.innerHTML = `
        <span class="material-symbols-outlined">
            menu
        </span>
        `;
        menuOpen = false;
    }
});

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation(); // detener propagación
        dropdown.nextElementSibling.classList.toggle('menu-show') 
      });
});

subDropdowns.forEach(subDropdown => {
    subDropdown.addEventListener('click', (e) => {
        subDropdown.nextElementSibling.classList.toggle('sub-menu-show')
    });
});