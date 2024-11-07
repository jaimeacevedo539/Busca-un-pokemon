const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

button.addEventListener('click', (e) =>{
    e.preventDefault();
    getPokemon(input.value);
})


function getPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`)
.then((res) =>res.json())
.then((data) =>{
createPokemon(data);
input.value = ""; 
})
.catch((error) => {
    console.error('Error fetching Pokémon:', error);
    alert('Pokémon no encontrado, intenta de nuevo');
});

}




function createPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3= document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.insertBefore(div, pokemonContainer.firstChild);
}

