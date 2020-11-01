import './index.html';
import './style.css';
import { Layer } from './Layer';
import { Drink } from './Drink';

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

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

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

// ingredience jako komponenty
const pole = {
  color: '#feeeca',
  label: 'mléčná pěna++',
};

const firstLayer = document.querySelectorAll('.layer');

// seznam ingredienci
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna1',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko2',
  },
  {
    color: '#613916',
    label: 'espresso3',
  },
];

for (let i = 0; i < layers.length; i++) {
  firstLayer[i].innerHTML = Layer(layers[i]);
}

// napoj jako komponenta
const drinkList = document.querySelector('drinks-list');
drinks.forEach((drink) => {
  drinkList.appendChild(Drink(drink));
});
