const menuBurger = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');


/**
 * @description Fonction
 */
function openOverlay() {
    overlay.classList.add('open--overlay');
}


/**
 * @description Fonction
 */
btnClose.addEventListener('click', () => {
    overlay.classList.toggle('open--overlay');
})

/**
 * @description Fonction
 */
menuBurger.addEventListener('click', () => {
    openOverlay();
})

