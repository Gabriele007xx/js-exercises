const canvas = document.getElementById('engineCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

let piston_offset = 0;
const radius = 20;
const pistonLength = 200;
const centerX = width / 2;
const centerY = height / 2;

function drawCrankshaft() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawConnectingRod(y) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, y);
    ctx.stroke();
}

function drawPiston(y) {
    ctx.beginPath();
    ctx.rect(centerX, centerY+y, 150, 50);
    ctx.stroke();
}

function update() {
    ctx.clearRect(0, 0, width, height);

    drawCrankshaft();
    piston_offset = piston_offset < pistonLength ? + 1 : - 1;
    drawPiston(piston_offset);
    drawConnectingRod(piston_offset - (piston_offset/2));
    requestAnimationFrame(update);
}

update();