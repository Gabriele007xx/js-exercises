const tireCanvas = document.getElementById('tireCanvas');
const ctx2 = tireCanvas.getContext('2d');

function drawTire(centerX, centerY, radius)
{
  // Begin a new path for the circle
  ctx2.beginPath();
  // Draw the circle
  ctx2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  // Set the fill color to black
  ctx2.fillStyle = 'black';
  // Fill the circle with the black color
  ctx2.fill();
}

