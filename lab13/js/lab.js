
// Author: Autania Mierow
// Date: 18  November 2024

/*
 * FizzBuzzBoom Program
 * Loops through numbers 1 to 200 and prints "Fizz", "Buzz", "Boom" depending on the multiples.
 * Combines them if a number is a multiple of more than one.
 * Outputs the result to the "output" div in the HTML.
 */

// Define the FizzBuzzBoom function
function fizzBuzzBoom() {
  // Initialize a long string to store the output
  let oneLongString = "";

  // Loop through numbers from 1 to 200
  for (let num = 1; num <= 200; num++) {
      let str = ""; // Start with an empty string for each number

      // Check if the number is a multiple of 3
      if (num % 3 === 0) {
          str += "Fizz";
      }

      // Check if the number is a multiple of 5
      if (num % 5 === 0) {
          str += "Buzz";
      }

      // Check if the number is a multiple of 7
      if (num % 7 === 0) {
          str += "Boom";
      }

      // If no condition matches, just display the number
      if (str === "") {
          str = num;
      }

      // Add the result to the long string with a line break
      oneLongString += str + "<br>";
  }

  // Output the result to the div with id "output"
  $("#output").html(oneLongString);
}

// Call the function to execute when the script runs
fizzBuzzBoom();
