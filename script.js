document.getElementById("search-button").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    
    // Clear previous data
    clearPokemonData();

    // Handle special case when input is 'Red'
    if (searchInput === "red") {
        alert("Pokémon not found");
        return;
    }

    // Fetch Pokémon data from the PokéAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon not found");
            }
            return response.json();
        })
        .then(pokemon => {
            // Populate the page with Pokémon data
            displayPokemonData(pokemon);
        })
        .catch(error => {
            alert(error.message);
        });
});

function clearPokemonData() {
    // Clear the previous Pokémon data and image
    document.getElementById("pokemon-name").innerHTML = "";
    document.getElementById("pokemon-id").innerHTML = "";
    document.getElementById("weight").innerHTML = "";
    document.getElementById("height").innerHTML = "";
    document.getElementById("types").innerHTML = "";
    document.getElementById("hp").innerHTML = "";
    document.getElementById("attack").innerHTML = "";
    document.getElementById("defense").innerHTML = "";
    document.getElementById("special-attack").innerHTML = "";
    document.getElementById("special-defense").innerHTML = "";
    document.getElementById("speed").innerHTML = "";
    document.getElementById("sprite").src = "";
}

function displayPokemonData(pokemon) {
    // Display Pokémon name
    document.getElementById("pokemon-name").innerHTML = pokemon.name.toUpperCase();
    
    // Display Pokémon ID
    document.getElementById("pokemon-id").innerHTML = `#${pokemon.id}`;

    // Display weight and height
    document.getElementById("weight").innerHTML = `Weight: ${pokemon.weight}`;
    document.getElementById("height").innerHTML = `Height: ${pokemon.height}`;

    // Display stats (only values)
    document.getElementById("hp").innerHTML = pokemon.stats[0].base_stat;
    document.getElementById("attack").innerHTML = pokemon.stats[1].base_stat;
    document.getElementById("defense").innerHTML = pokemon.stats[2].base_stat;
    document.getElementById("special-attack").innerHTML = pokemon.stats[3].base_stat;
    document.getElementById("special-defense").innerHTML = pokemon.stats[4].base_stat;
    document.getElementById("speed").innerHTML = pokemon.stats[5].base_stat;

    // Display types (only values)
    let typesHTML = '';
    pokemon.types.forEach(type => {
        typesHTML += `<div>${type.type.name.toUpperCase()}</div>`;
    });
    document.getElementById("types").innerHTML = typesHTML;

    // Display sprite image
    document.getElementById("sprite").src = pokemon.sprites.front_default;
}
