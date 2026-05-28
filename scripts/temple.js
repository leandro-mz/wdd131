const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
    
    if (menuButton.classList.contains('open')) {
        menuButton.innerHTML = '&#10006;';
    } else {
        menuButton.innerHTML = '&#9776;';
    }
});

document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;