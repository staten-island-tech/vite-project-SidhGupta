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


DOMSelectors.AllBtn.addEventListener("click", function() {
    showAll();    
})



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


const Mega_pokemon = pokemonInfo.filter((pokemon) => pokemon.evolutionStage === "MegaEvolution");


function showMega() {
    DOMSelectors.box.innerHTML = "";
    Mega_pokemon.forEach((pokemon) => {
        DOMSelectors.box.insertAdjacentHTML('beforeend',
            `<div class="itemCards">
                <h3 class="card-header">${pokemon.title}</h3>
                <img src="${pokemon.imageUrl}" alt="${pokemon.title}" id="cardImage">
                <h4>${pokemon.type}</h4>
            </div>`
        );
    });
}

DOMSelectors.MegaBtn.addEventListener("click", function() {
    showMega();

    
})

const Stagefirst_pokemon = pokemonInfo.filter((pokemon) => pokemon.evolutionStage === "Stageone");


function showStageone() {
    DOMSelectors.box.innerHTML = "";
    Stagefirst_pokemon.forEach((pokemon) => {
        DOMSelectors.box.insertAdjacentHTML('beforeend',
            `<div class="itemCards">
                <h3 class="card-header">${pokemon.title}</h3>
                <img src="${pokemon.imageUrl}" alt="${pokemon.title}" id="cardImage">
                <h4>${pokemon.type}</h4>
            </div>`
        );
    });
}

DOMSelectors.StageoneBtn.addEventListener("click", function() {
    showStageone();

    
})


const Stagetwo_pokemon = pokemonInfo.filter((pokemon) => pokemon.evolutionStage === "Stagetwo");


function showStagetwo() {
    DOMSelectors.box.innerHTML = "";
    Stagetwo_pokemon.forEach((pokemon) => {
        DOMSelectors.box.insertAdjacentHTML('beforeend',
            `<div class="itemCards">
                <h3 class="card-header">${pokemon.title}</h3>
                <img src="${pokemon.imageUrl}" alt="${pokemon.title}" id="cardImage">
                <h4>${pokemon.type}</h4>
            </div>`
        );
    });
}

DOMSelectors.StagetwoBtn.addEventListener("click", function() {
    showStagetwo();


    
    
    
})

showAll();