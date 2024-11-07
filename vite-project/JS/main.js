import '../css/style.css'
import { pokemonInfo } from "./products.js"
import { DOMSelectors } from './dom.js'

function addCard() {
    pokemonInfo.forEach((pokemon) => DOMSelectors.box.insertAdjacentHTML('beforeend',
        `<div class="itemCards">
            <h3 class="card-header">${pokemon.title}</h3>
            <img src="${pokemon.imageUrl}" alt="" id ="cardImage" >
            <h4>${pokemon.type}</p>
        </div>`
    ))
    
}

addCard();
