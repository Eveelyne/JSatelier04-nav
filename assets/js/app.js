const menuBurger = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');


/**
 * @description Fonction ouvrant la modale.
 */
function openOverlay() {
    overlay.classList.add('open--overlay');
}

/**
 * @description Méthode fermant la modale au clic du bouton X.
 */
btnClose.addEventListener('click', () => {
    overlay.classList.toggle('open--overlay');
})

/**
 * @description Méthode ouvrant la modale au clic du menu burger.
 */
menuBurger.addEventListener('click', () => {
    openOverlay();
})

