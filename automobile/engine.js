// engine.js
const canvas = document.getElementById('engineCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

let angle = 0;
const radius = 100;
const pistonLength = 200;
const centerX = width / 2;
const centerY = height / 2;

function drawCrankshaft() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawConnectingRod(x, y) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawPiston(x, y) {
    ctx.beginPath();
    ctx.rect(x - 25, y, 50, 50);
    ctx.stroke();
}

function update() {
    ctx.clearRect(0, 0, width, height);

    drawCrankshaft();

    const crankX = centerX + radius * Math.cos(angle);
    const crankY = centerY + radius * Math.sin(angle);

    drawConnectingRod(crankX, crankY);

    const pistonY = centerY + pistonLength * Math.sin(angle);
    drawPiston(crankX, pistonY);

    angle += 0.05;
    requestAnimationFrame(update);
}

update();
