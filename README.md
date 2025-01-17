# Build a Pokémon Search App

This project is part of the [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn) from freeCodeCamp. In this project, you'll build an app that allows users to search for Pokémon by name or ID and display relevant information, such as the Pokémon's name, ID, image, and types.

## Project Overview

The **Pokémon Search App** lets users search for any Pokémon by its name (e.g., Pikachu) or ID number (e.g., 25). Using the **PokéAPI Proxy**, the app fetches data about the Pokémon and displays the following details:

- Pokémon's name
- Pokémon's ID
- Pokémon's image
- Pokémon's types (e.g., Electric, Fire, etc.)

## Key Technologies

- **HTML**: Structure of the app's webpage and search functionality.
- **CSS**: Styling the user interface to create an engaging user experience.
- **JavaScript**: Handling app logic, fetching data from the API, and displaying it dynamically.
- **PokéAPI Proxy**: A free API that provides detailed Pokémon data (e.g., stats, types, images) to use in the app.

## JavaScript Concepts Covered

In this project, you’ll use various fundamental and advanced JavaScript concepts:

- **DOM Manipulation**: Dynamically creating and updating the UI based on user input.
- **Event Handling**: Using event listeners to capture user input (like search queries) and trigger actions.
- **Fetch API**: Fetching data from an external API to retrieve Pokémon details.
- **Asynchronous JavaScript**: Using `async`/`await` to handle asynchronous operations such as fetching data from the API.
- **Error Handling**: Ensuring the app gracefully handles invalid inputs (e.g., when a Pokémon name doesn't exist or an invalid ID is entered).

## Project Requirements

- Allow the user to search for a Pokémon using its **name** or **ID**.
- When a valid name or ID is entered, display the corresponding Pokémon’s details:
  - Name
  - ID number
  - Image
  - Types
- If the input is invalid (non-existent Pokémon name or ID), display an error message.
- Provide a user-friendly interface with clear input fields and a search button.

## Example Usage

### Example 1: Search by Pokémon Name

User enters "Pikachu" into the search field:
- Pokémon Name: Pikachu
- Pokémon ID: 25
- Types: Electric


### Example 2: Search by Pokémon ID

User enters "25" into the search field:
- Pokémon Name: Pikachu
- Pokémon ID: 25
- Types: Electric


### Example 3: Invalid Input

User enters "9999":
- Error Message: "Pokémon not found. Please try a valid name or ID."

## How to Use

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in your browser.
3. Enter a Pokémon name (e.g., Pikachu) or ID number (e.g., 25) in the input field.
4. Press the "Search" button to see the results.
5. If you enter an invalid name or ID, the app will display an error message.

## Code Snippet

```js
async function searchPokemon(query) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    // Code to display Pokémon data
  } catch (error) {
    console.error("Error fetching Pokémon data: ", error);
    // Display error message to user
  }
}

