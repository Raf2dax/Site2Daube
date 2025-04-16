document.addEventListener('DOMContentLoaded', function() {
    const bouton = document.getElementById('afficherPokemon');
    const container = document.getElementById('pokemonContainer');

    bouton.addEventListener('click', function() {
        const randomId = Math.floor(Math.random() * 898) + 1;
        
        //api
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(response => response.json())
            .then(pokemon => {
                
                container.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                `   ;
            })         
    });
});
