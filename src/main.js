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

//creer un array avec les produits et les filtres (nico)
// object constructor: https://www.w3schools.com/js/js_object_constructors.asp
function product(idTag,availability,type,saltwater){
  this.idTag=idTag;
  this.availability=availability;
  this.type=type;
  this.saltwater=saltwater;
}
//array constructor: https://www.w3schools.com/js/js_array_constructor.asp
const productList = new Array( new product("alligatorAlbino",true,"reptile",false),
                               new product("dragonEel",true,"fish",true),
                               new product("electricEel",false,"fish",true),
                               new product("barracuda",true,"fish",true),
                               new product("coneSnail",true,"invertebrate",true),
                               new product("moray",false,"fish",true),
                               new product("giantPacificOctopus",true,"invertebrate",true),
                               new product("blueBlanketOctopus",false,"invertebrate",true),
                               new product("anglerFish",true,"fish",true),
                               new product("lionFish",true,"fish",true),
                               new product("stoneFish",false,"fish",true),
                               new product("freshwaterStingray",true,"fish",false),
                               new product("hammerHead",false,"fish",true),
                               new product("seaSnake",false,"reptile",true),
                               new product("snappingTurtle",true,"reptile",false)
                              );


 //verifier les filtres chaque fois que la page charge (nico)
window.addEventListener("load", checkFilters);

//fonction pour verifier quelles filtres sont actives utilisant les inputs (nico)
function checkFilters() {
  const checkedFilters = [
    ...document.querySelectorAll('#containerFiltres input:checked')
  ];

  //separer les filtres par categorie
  const filters = {
    availability: checkedFilters
      .filter(filter => filter.name === "availability")
      .map(filter => filter.value),

    saltwater: checkedFilters
      .filter(filter => filter.name === "habitat")
      .map(filter => filter.value),

    type: checkedFilters
      .filter(filter => filter.name === "type")
      .map(filter => filter.value)
  };

  return filters;
}

//prendre tous les produits qui sont acceptables (nico)
// length > 0 assurer que s'il une categorie n'est pas deja filtre, tous les produits restent disponsibles 
// ! eliminer les produits qui ne sont pas acceptables par ces filtres
function filterProducts() {
  const filters = checkFilters();

  return productList.filter(product => {

    if (filters.availability.length > 0 &&
        !filters.availability.includes(String(product.availability))) {
      return false;
    }

    if (filters.saltwater.length > 0 &&
        !filters.saltwater.includes(String(product.saltwater))) {
      return false;
    }

    if (filters.type.length > 0 &&
        !filters.type.includes(product.type)) {
      return false;
    }

    return true;
  });
}

//montrer les produits choisis dans le grille

function displayProducts() {
  const filteredProducts = filterProducts(); //faire reference aux resultats de filterProducts

  // loop les produits pour montrer les cartes
  productList.forEach(product => {
    const element = document.getElementById(product.idTag);

    // les produits qui sont acceptables (nico)
    // ?"" est comme if / else, mais il retourne l'element a son display originale
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    // "none" va cacher l'element
    if (element) {
      element.style.display = filteredProducts.includes(product)
        ? ""
        : "none";
    }
  });
}

//chaque fois que la page charge, montrer les produits acceptables (nico)
window.addEventListener("load", displayProducts);

//mettre au jour les produits dans le display
document.querySelectorAll('#containerFiltres input')
  .forEach(filter => {
    filter.addEventListener("change", displayProducts);
  });
