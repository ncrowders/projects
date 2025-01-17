# Build a Telephone Number Validator

This project is part of the [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn) from freeCodeCamp. The goal is to build an app that validates phone numbers in various formats used in the United States, ensuring that the phone number meets the correct pattern.

## Project Overview

In the United States, phone numbers can be formatted in several ways, and this app will validate whether a given phone number matches any of the acceptable formats. The app will also verify that the area code is provided and, if a country code is given, that it is `1` (for the US).

### Valid Formats

- `1 555-555-5555`
- `1 (555) 555-5555`
- `1(555)555-5555`
- `1 555 555 5555`
- `5555555555`
- `555-555-5555`
- `(555)555-5555`

### Invalid Formats

- Phone numbers without the area code (e.g., `555-5555`)
- Phone numbers with an incorrect country code (e.g., `2 555-555-5555`)
- Any format that doesn't match the patterns listed above.

## Key Technologies

- **HTML**: The structure of the user interface for the input and validation result.
- **CSS**: Styling the page to make the input field and results visually appealing.
- **JavaScript**: Validating the phone number input by matching it against regular expressions (regex).

## JavaScript Concepts Covered

- **Regular Expressions (RegEx)**: Using regular expressions to match different phone number formats.
- **Functions**: Creating reusable functions to validate input.
- **DOM Manipulation**: Interacting with the DOM to display validation results based on user input.
- **Event Handling**: Listening for user input to trigger validation and displaying the result.

## Project Requirements

The app must fulfill the following requirements:

1. **Phone Number Validation**: The phone number should match one of the valid formats listed above.
2. **Area Code**: The area code is required.
3. **Country Code**: If a country code is provided, it must be `1` (for the United States).
4. **Error Handling**: Invalid phone numbers should return an error message indicating the format is incorrect.

## Example Usage

### Valid Phone Numbers

- `1 555-555-5555` (Valid)
- `1 (555) 555-5555` (Valid)
- `5555555555` (Valid)

### Invalid Phone Numbers

- `555-5555` (Invalid: Missing area code)
- `2 555-555-5555` (Invalid: Incorrect country code)
- `1 555 555 555` (Invalid: Incorrect number of digits)

## How to Use

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in your browser.
3. Enter a phone number in the input field.
4. Press the "Validate" button to check if the phone number is valid.
5. The result will be displayed indicating whether the number is valid or invalid.

## Code Snippet

```js
function telephoneCheck(str) {
  // Regular expression to validate the phone number
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
  return regex.test(str);
}
