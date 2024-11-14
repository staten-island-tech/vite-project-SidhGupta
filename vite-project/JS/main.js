import '../css/style.css'
import { pokemonInfo } from "./products.js"
import { DOMSelectors } from './dom.js'


function showAll() {
    DOMSelectors.box.innerHTML = "";
    pokemonInfo.forEach((pokemon) => {
        DOMSelectors.box.insertAdjacentHTML('beforeend',
            `<div class="itemCards">
                <h3 class="card-header">${pokemon.title}</h3>
                <img src="${pokemon.imageUrl}" alt="${pokemon.title}" id="cardImage">
                <h4>${pokemon.type}</h4>
            </div>`
        );
    });
}




const basic_pokemon = pokemonInfo.filter((pokemon) => pokemon.evolutionStage === "Basic");

function showBasic() {
    DOMSelectors.box.innerHTML = "";
    basic_pokemon.forEach((pokemon) => {
        DOMSelectors.box.insertAdjacentHTML('beforeend',
            `<div class="itemCards">
                <h3 class="card-header">${pokemon.title}</h3>
                <img src="${pokemon.imageUrl}" alt="${pokemon.title}" id="cardImage">
                <h4>${pokemon.type}</h4>
            </div>`
        );
    });
}

DOMSelectors.basicBtn.addEventListener("click", function() {
    showBasic();    
})



const Stage1_pokemon = pokemonInfo.filter((pokemon) => pokemon.evolutionStage === "Stageone");


function showStageOne() {
    DOMSelectors.box.innerHTML = "";
    Stage1_pokemon.forEach((pokemon) => {
        DOMSelectors.box.insertAdjacentHTML('beforeend',
            `<div class="itemCards">
                <h3 class="card-header">${pokemon.title}</h3>
                <img src="${pokemon.imageUrl}" alt="${pokemon.title}" id="cardImage">
                <h4>${pokemon.type}</h4>
            </div>`
        );
    });
}

DOMSelectors.stageoneBtn.addEventListener("click", function() {
    showStageOne();

    
})



showAll();