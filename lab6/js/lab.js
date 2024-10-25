// index.js - purpose and description here
// Author: Autania Mierow
// Date: 10 / 24/ 2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction() {
  // Variables
  myTransport = ["honda", "bus", "rides from friends"];

  // Object for main ride
  myMainRide = {
    make: "honda",
    model: "civic",
    color: "black",
    year: 2012,
    age: function () {
      return new Date().getFullYear() - this.year;
    }
  };
}

// Output
document.writeln("Kinds of Transportation I use: ", myTransport.join(", "), "</br>");
document.writeln("My Main Ride:<pre>" + JSON.stringify(myMainRide, null, '\t') + "</pre>");

function main() {
  console.log("Main function started.");
}

main();
