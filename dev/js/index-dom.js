import hamburgerMenu from './dom/menu-hamburgueza.js';
import topbarColapsado from './dom/topBar_dianmico.js';
// import topbarColapsado from './dom/slider-dinamico.js';
import menuAcordeon from './dom/menu-acordeon.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  topbarColapsado('#topBar');
  hamburgerMenu('#btnAmburger', '.menu');
  menuAcordeon();
})

