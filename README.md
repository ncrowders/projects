
# Build a Survey Form

This project is part of the [Responsive Web Design Certification](https://www.freecodecamp.org/learn) from freeCodeCamp. The goal is to build a responsive survey form that can collect data from users through a variety of input types. The form should be both functional and visually appealing across different screen sizes.

## Project Overview

In this project, you'll create a **Survey Form** where users can provide feedback or information based on various question types, including text inputs, radio buttons, checkboxes, and more. The form should be responsive, meaning it should look good on devices with different screen sizes (from mobile phones to large desktop monitors).

The project should be functionally similar to the original **Survey Form** provided by freeCodeCamp, accessible at: [Survey Form](https://survey-form.freecodecamp.rocks).

## Key Technologies

- **HTML**: Used to create the structure and content of the survey form.
- **CSS**: Applied to style the form and ensure it's responsive and accessible.
- **Responsive Design**: Ensuring the form adapts well to different screen sizes using media queries and flexible layouts.

## Project Requirements

1. **Header Section**: A header that clearly displays the title of the survey.
2. **Form Elements**:
   - Text inputs for user information such as name and email.
   - Radio buttons for multiple-choice questions.
   - Checkboxes for questions with multiple answers.
   - A text area for comments or open-ended questions.
3. **Submit Button**: A button that submits the form.
4. **Responsiveness**: The form must look good and be fully functional on both large screens (e.g., desktops) and smaller screens (e.g., mobile devices).
5. **Validations**: Ensure that form fields such as email and name are validated (e.g., proper format for the email).
6. **Aesthetic Design**: The form should be styled to make it visually appealing, following a clean and modern design.
7. **Focus States**: Provide visual feedback for users when they interact with the form fields (e.g., when clicking on a text input or selecting a radio button).

## Example Usage

The survey form will contain different types of questions that users can respond to:

- **Name**: A text input where users can enter their full name.
- **Email**: A text input where users can provide their email address.
- **Gender**: A set of radio buttons allowing users to select their gender.
- **Age Range**: A series of checkboxes where users can select their age range.
- **Feedback**: A text area where users can provide their feedback.
- **Submit Button**: A button that submits the form once all required fields are completed.

### Example Form Structure

```html
<form action="submit_form.php" method="post">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Your Email:</label>
  <input type="email" id="email" name="email" required>

  <fieldset>
    <legend>What is your gender?</legend>
    <label>
      <input type="radio" name="gender" value="male" required> Male
    </label>
    <label>
      <input type="radio" name="gender" value="female" required> Female
    </label>
    <label>
      <input type="radio" name="gender" value="other"> Other
    </label>
  </fieldset>

  <fieldset>
    <legend>Age Range:</legend>
    <label>
      <input type="checkbox" name="age" value="18-24"> 18-24
    </label>
    <label>
      <input type="checkbox" name="age" value="25-34"> 25-34
    </label>
    <label>
      <input type="checkbox" name="age" value="35-44"> 35-44
    </label>
  </fieldset>

  <label for="feedback">Additional Feedback:</label>
  <textarea id="feedback" name="feedback"></textarea>

  <button type="submit">Submit</button>
</form>


# Build a Roman Numeral Converter

This project is part of the [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn) from freeCodeCamp. The goal was to build a Roman Numeral Converter using JavaScript, HTML, and CSS.

## Project Overview

Roman numerals are based on seven symbols: I, V, X, L, C, D, and M. These symbols can be combined in various ways to represent different Arabic numerals (the standard numbering system). This project is designed to convert an Arabic numeral to its Roman numeral equivalent.

### Project Objective
- Create a function that takes an Arabic numeral (integer) as input and returns its Roman numeral representation.
- Ensure the solution handles numerals in the range from 1 to 3999.

## Key Technologies

- **HTML**: Used to structure the content of the page.
- **CSS**: Used for styling the page and providing visual appeal.
- **JavaScript**: Powers the functionality of the Roman numeral conversion.

## JavaScript Concepts Covered
In this project, you’ll apply various fundamental and advanced JavaScript concepts, including:

- **Variables and Data Types**: Learn how to store and manipulate data.
- **Arrays and Objects**: Store Roman numeral symbols and their corresponding values in arrays or objects.
- **Loops and Conditionals**: Iterate through numerals and apply rules to convert to Roman numerals.
- **Functions**: Break down the problem into smaller, reusable pieces of code.
- **DOM Manipulation**: Create a user interface to allow input and display the result interactively.

## Project Requirements

The Roman numeral converter must fulfill the following requirements:
- Convert any number from 1 to 3999 into its Roman numeral equivalent.
- Ensure that the result is accurate and follows standard Roman numeral conventions (e.g., IV for 4, IX for 9).
- The user should be able to input a number and see the converted result.

## Algorithm Explanation

1. **Mapping Roman numerals**: We map each Roman numeral symbol (I, V, X, etc.) to its corresponding integer value.
2. **Conversion Process**: We iterate over the input integer, subtracting values and appending the correct Roman numeral symbols until we’ve fully converted the number.



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


