
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

  // Sand Raking Logic
  const canvas = document.getElementById("sandCanvas");
  const ctx = canvas.getContext("2d");
  let isDrawing = false;

  canvas.addEventListener("mousedown", () => isDrawing = true);
  canvas.addEventListener("mouseup", () => isDrawing = false);
  canvas.addEventListener("mousemove", (e) => {
      if (isDrawing) {
          ctx.fillStyle = "#8c7a6b";
          ctx.fillRect(e.offsetX, e.offsetY, 10, 10); // Simulate raking
      }
  });

  // Toolbox: Breathing Bubble animation (simplified)
  const bubble = document.querySelector(".bubble");
  let bubbleSize = 50;
  setInterval(() => {
      bubble.style.width = `${bubbleSize}px`;
      bubble.style.height = `${bubbleSize}px`;
      bubbleSize = bubbleSize === 50 ? 80 : 50;
  }, 1500);
});
