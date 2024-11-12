import '../css/style.css'
import { pokemonInfo } from "./products.js"
import { DOMSelectors } from './dom.js'

function addCard(pokemonList) {
    // Clear the current cards in the container
    DOMSelectors.box.innerHTML = "";

    // Loop through the filtered list and display each Pokémon
    pokemonList.forEach((pokemon) => {
        DOMSelectors.box.insertAdjacentHTML('beforeend',
            `<div class="itemCards">
                <h3 class="card-header">${pokemon.title}</h3>
                <img src="${pokemon.imageUrl}" alt="${pokemon.title}" id="cardImage">
                <h4>${pokemon.type}</h4>
            </div>`
        );
    });
}


function filterByEvolutionStage(stage) {
    let filteredPokemons = pokemonInfo;

    // If a specific stage is selected, filter Pokémon by that stage
    if (stage !== 'all') {
        filteredPokemons = pokemonInfo.filter(pokemon => pokemon.evolutionStage === stage);
    }

    // Add the filtered Pokémon cards to the DOM
    addCard(filteredPokemons);
}

document.getElementById('basicBtn').addEventListener('click', () => filterByEvolutionStage('Basic'));
document.getElementById('stage1Btn').addEventListener('click', () => filterByEvolutionStage('Stage 1'));
document.getElementById('stage2Btn').addEventListener('click', () => filterByEvolutionStage('Stage 2'));
document.getElementById('megaBtn').addEventListener('click', () => filterByEvolutionStage('Mega'));
document.getElementById('allBtn').addEventListener('click', () => filterByEvolutionStage('all'));

filterByEvolutionStage(evolutionStage)