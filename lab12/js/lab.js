
// Author: Autania Mierow
// Date: 14 November 2024

function sortingHat(str) {
  let len = str.length;
  let mod = len % 4;

  if (mod === 0) {
    return "Gryfindor :) ";

  } else if (mod === 1) {
    return "Slytherin!!!";

  } else if (mod === 2) {
    return "Hufflepuff...";

  } else if (mod === 3) {
    return "Ravenclaw :(";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText = "<p>Here's your answer: " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
