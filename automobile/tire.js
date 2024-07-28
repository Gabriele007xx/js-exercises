const tireCanvas = document.getElementById('tireCanvas');
const ctx2 = tireCanvas.getContext('2d');

function drawTire(centerX, centerY, totalRadius, rimRadius)
{
  // Begin a new path for the circle
  ctx2.beginPath();
  // tire
  ctx2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  // Set the fill color to black
  ctx2.fillStyle = 'black';
  // Fill the circle with the black color
  ctx2.fill();
  
  // Draw the rim
  ctx2.arc(centerX, centerY, InchToMM(rimRadius), 0, 2 * Math.PI, false);
  // Set the fill color to black
  ctx2.fillStyle = 'gray';
  // Fill the circle with the black color
  ctx2.fill();  
}

function InchToMM(inches)
{
  return (inches*2.54) * 10;
}
