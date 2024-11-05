// Author: Autania Mierow
// Date: 4 November 2024

// add button to challenge section

$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a listener to the challenge button

$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

// add button to problems section

$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a listener to the problems button

$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

// add button to reflection section

$("#reflection").append("<button id='button-reflection'>Make Special</button>");

// add a listener to the reflection button

$("#button-reflection").click(function(){
    $("#reflection").toggleClass("special");
});

// add button to the results section

$("#results").append("<button id='button-results'>Make Special</button>");

// add a listener to the results button

$("#button-results").click(function(){
    $("#results").toggleClass("special");
});
