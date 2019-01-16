// import { Tanks } from './tanks.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { buildUI } from './ui-builder';
import { Tanks } from './tanks';

let tank = new Tanks();

document.addEventListener('readystatechange', event => {
  if ((event.target.readyState === 'interactive') || (event.target.readyState === 'ready')) {
    loadGame();
    setInterval(() => {
      tank.timer--;
      document.getElementById('timer').innerHTML = tank.timer;}, 1000);
  }

  function loadGame() {
    buildUI();
  }
});

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });
