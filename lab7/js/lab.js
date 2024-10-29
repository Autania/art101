/* 
    Author: Autania Mierow
    File: lab.js
    Description: This program asks the user for their name, sorts the letters, and displays the sorted name.
    Date: 10/28/2024
*/

/* 
    Author: [Your Name]
    File: lab.js
    Description: This program asks the user for their name, sorts the letters, and displays the sorted name.
    Date: [Today's Date]
*/

// variables

// function
function sortUserName() {
    if (sortName) { // websoft fix checks if user already recorded input
        var userName = window.prompt("Hi, Please type in your full name so I can fix it.");
        console.log("userName =", userName);
        
        // turn string into array
        var nameArray = userName.split('');
        console.log("nameArray =", nameArray);
        
        // sort array
        var nameArraySort = nameArray.sort();
        console.log("nameArraySort =", nameArraySort);
        
        // array back to string
        var nameSorted = nameArraySort.join('');
        console.log("nameSorted =", nameSorted);
        
        return nameSorted;
    }
}
function displaySortedName() {
    let result = sortUserName(); 
    document.getElementById("output").innerHTML = `<p>I fixed your name: <strong>${result}</strong></p>`;
}

window.onload = displaySortedName; 