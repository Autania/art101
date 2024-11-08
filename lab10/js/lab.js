//jQuery BETTER work
// Author: Autania Mierow
// Date: 7 November 2024


// Function to generate some random dialogue text
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    const min = 3; // minimum length of random text
    const max = 100; // maximum length of random text
    
    // Randomly pick a length between min and max
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Randomly pick a starting point in the text to slice out our random text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    
    // Slice the text to create a random snippet
    return text.slice(randStart, randStart + randLen);
  }
  
  // Add a click event listener to the button with id "make-convo"
  $("#make-convo").click(function() {
    // Generate a new piece of random text
    const newText = generateRandomText();
    
    // Append the new text inside a <div> to the div with id "output"
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
  
  // Test your button by clicking it on the webpage to see if new text is added to #output
  