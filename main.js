// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Ricordate di scrivere solo il codice JavaScript e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!
// P.S.: l'url del logo che trovate nell'html non è più raggiungibile, e sul sito di Boolean adesso trovate un svg per il logo. Vedete un po' voi se volete risolvere il problema ma non è fondamentale che funzioni.

let btnHamburger = document.querySelector(".header-right > a"); 
let btnClose = document.querySelector(".close");
let menuHamburger = document.querySelector(".hamburger-menu");

btnHamburger.addEventListener(`click`, function() {
    menuHamburger.classList.add(`active`);
});

btnClose.addEventListener(`click`, function() {
    menuHamburger.classList.remove(`active`);
});