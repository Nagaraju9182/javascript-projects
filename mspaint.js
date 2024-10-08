const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let painting = false;
let brushSize = 5;
let brushColor = '#000000';

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath(); 
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);


document.getElementById('clear').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('brushSize').addEventListener('input', (e) => {
  brushSize = e.target.value;
});


document.getElementById('colorPicker').addEventListener('input', (e) => {
  brushColor = e.target.value;
});
