const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.querySelector("#colorPicker");
const liner = document.querySelector("#lineWidth");
const btnClear = document.querySelector("#clear");
const btnSave = document.querySelector("#saveCanvas");

let isDrawing = false;
let currentColor = "#000000";
let currentLineWidth = 1;

ctx.beginPath();

// function pour le debut du dessin
const startDrawing = (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
};

// function pour dessiner
const draw = (e) => {
  if (!isDrawing) return;
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = currentLineWidth;
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
};

// function pour arreter le dessin
const stopDrawing = () => {
  isDrawing = false;
};

// Event pour le debut du dessin
canvas.addEventListener("mousedown", startDrawing);

// Event pour dessiner
canvas.addEventListener("mousemove", draw);

// Event pour arreter le dessin
canvas.addEventListener("mouseup", stopDrawing);

// Event pour changer la couleur
colorPicker.addEventListener("input", () => {
  currentColor = colorPicker.value;
});

// Event pour changer la taille du trait
liner.addEventListener("input", () => {
  currentLineWidth = liner.value;
});

// Event pour effacer le canvas
btnClear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Event pour sauvegarder le canvas
btnSave.addEventListener("click", () => {
  const dataURL = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "canvasImage.png";
  a.click();
});
