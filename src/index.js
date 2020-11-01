import './index.html';
import './style.css';

console.log('funguju!');

// navigace

const navigace = document.querySelector('#nav-btn');
navigace.addEventListener('click', () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const navClose = document.querySelectorAll('a');
for (let i = 0; i < navClose.length; i++) {
  navClose[i].addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-closed');
  });
}

// objednavani

let ordered = false;
const btnOrder = document.querySelector('.order-btn');
btnOrder.addEventListener('click', () => {
  const elementDrinkCup = document.querySelector('.drink__cup');
  if (ordered === false) {
    elementDrinkCup.classList.toggle('.drink__cup--selected');
    btnOrder.textContent = 'Zrušit';
    ordered = true;
  } else {
    elementDrinkCup.classList.toggle('.drink__cup--selected');
    btnOrder.textContent = 'Objednat';
    ordered = false;
  }
});
