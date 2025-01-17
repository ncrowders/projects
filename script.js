
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


// script.js

// Roman numeral map
const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
];

// Function to convert number to Roman numeral
function convertToRoman(num) {
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}

// Function to handle the conversion when the button is clicked
document.getElementById('convert-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('number').value;
    const output = document.getElementById('output');

    // Validate input
    const num = parseInt(numberInput, 10);

    if (!numberInput) {
        output.textContent = 'Please enter a valid number';
    } else if (num < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1';
    } else if (num >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
    } else {
        // Convert the number to Roman numeral and display the result
        const roman = convertToRoman(num);
        output.textContent = roman;
    }
});

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Set Up Event Listeners
checkBtn.addEventListener("click", () => {
  const input = userInput.value;

  // Check if there is user input
  if (input.length === 0) {
    alert("Please provide a phone number");
  } else {
    checkValidNumber(input);
   userInput.value = ''; 
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkValidNumber(userInput.value);
    userInput.value = "";
    
  }
});

clearBtn.addEventListener("click",() => {
  resultsDiv.innerHTML = "";
});

// Function to Check if Phone Number is Valid
function checkValidNumber(input) {
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
  phoneRegex.test(input) ? (resultsDiv.style.color = '#066637') : (resultsDiv.style.color = '#af0f0f');
  resultsDiv.innerHTML = `${phoneRegex.test(input) ? "Valid" : "Invalid"} US number: ${input}`;
}


