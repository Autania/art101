
// Author: Autania Mierow
// Date: 7 November 2024

document.addEventListener("DOMContentLoaded", () => {
  const affirmationText = document.getElementById("affirmation-text");
  const affirmations = [
      "You are exactly where you need to be.",
      "Breathe in peace, breathe out worry.",
      "Each moment is a fresh beginning.",
      "You are capable of amazing things."
  ];

  // Change affirmations daily
  affirmationText.textContent = affirmations[Math.floor(Math.random() * affirmations.length)];

}); // <--- Missing this

// Sand Raking Logic
const canvas = document.getElementById('sandCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// Variables for raking
let rakeSize = 5; // Default small rake size
ctx.lineWidth = rakeSize;
ctx.lineCap = 'round'; // Makes grooves smooth


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = '#c8b191'; // Sand groove color
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => (isDrawing = false));

// Button Event Listeners to Change Rake Size

document.querySelectorAll('.rake-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
        const tool= e.target.dataset.tool;
        if(tool === 'small') rakeSize=5;if(tool === 'large') rakeSize=15;if(tool=== 'erase'){ctx.clearRect(0,0,canvas.width,canvas.height);}// Clear the canvas
        
        
        
        
        
        
          });   
       });
