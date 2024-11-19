
// Author: Autania Mierow
// Date: 18  November 2024
// Function to process user input and run FizzBuzzBoom logic
function processInput() {
  // Get the number entered by the user
  const inputNumber = parseInt(document.getElementById("numberInput").value);

  // Validate the input to ensure it's a positive number
  if (isNaN(inputNumber) || inputNumber <= 0) {
      alert("Please enter a valid positive number!");
      return;
  }

  // Clear the output div before displaying new results
  $("#output").html("");

  // Loop through numbers from 1 to the user's input
  for (let num = 1; num <= inputNumber; num++) {
      let str = ""; // Start with an empty string
      let className = ""; // Class to style the output

      // Check if the number is a multiple of 3, 5, or 7 and update the string and class
      if (num % 3 === 0) {
          str += "Fizz";
          className += "fizz ";
      }
      if (num % 5 === 0) {
          str += "Buzz";
          className += "buzz ";
      }
      if (num % 7 === 0) {
          str += "Boom";
          className += "boom ";
      }

      // If the number isn't a multiple of 3, 5, or 7, just display the number
      if (str === "") {
          str = num;
      }

      // Append the result to the output div with styling
      $("#output").append(`<p class="${className.trim()}">${str}</p>`);
  }
}
