import '../css/style.css'
import { pokemonInfo } from "./products.js"
import { DOMSelectors } from './dom.js'

function addCard() {
    pokemonInfo.forEach((pokemon) => DOMSelectors.container.insertAdjacentHTML('beforeend',
        `<div class="card">
            <h3 class="card-header">${pokemon.title}</h3>
            <img src="${pokemon.pokedexNumber}" alt="">
            <p>${pokemon.type}</p>
        </div>`
    ))
    
}


