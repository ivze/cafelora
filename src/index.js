import './index.html';
import './style.css';

console.log('funguju!');

const navigace = document.querySelector('#nav-btn');
navigace.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});
