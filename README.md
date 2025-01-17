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

