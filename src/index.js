import './style.css';
import { addScore, refresher } from './modules/functions.js';

const scores = document.querySelector('#leader');
const btnSbumit = document.querySelector('#add-form');
const refresherBtn = document.querySelector('#refresher');
btnSbumit.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(scores);
});
refresherBtn.addEventListener('click', () => {
  refresher(scores);
});
