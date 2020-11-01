'use strict';

import './style.css';
import { Layer } from '../Layer';

const drinkInfo = document.querySelector('.drink__info');

export const Drink = (props) => {
  const drinks = document.createElement('div');
  drinks.className = 'drink';

  drinks.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
    ${Layer({ ingredients: props.layers })}
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>`;

  const orderbtn = drinks.querySelector('.order-btn');
  const drinkCup = drinks.querySelector('.drink__cup');

  const toggleButton = () => {
    drinkCup.classList.toggle('drink__cup--selected');
    if (props.ordered === false) {
      orderbtn.textContent = 'Zrušit';
      props.ordered = true;
    } else {
      orderbtn.textContent = 'Objednat';
      props.ordered = false;
    }
  };
  orderbtn.addEventListener('click', toggleButton);

  return drinks;
};
