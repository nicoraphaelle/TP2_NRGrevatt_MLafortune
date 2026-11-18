import './styles/style.css';
import {gsap} from 'gsap';

const buttonFiltres = document.querySelector('#buttonFiltres');
const iconFiltres = document.querySelector('#iconFiltres');
const containerFiltres = document.querySelector('#containerFiltres');

// Fonctionalité pour le bouton de afficher/cacher filtres (par nico)
buttonFiltres?.addEventListener('click', () => {
  iconFiltres?.classList.toggle('flipped');
    if (containerFiltres?.classList.contains('closed')) {
      containerFiltres?.classList.remove('closed');
    }else{
        containerFiltres?.classList.add('closed');
    }
});
