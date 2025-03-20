const canvas = document.getElementById("jelly-canvas");
const ctx = canvas.getContext("2d");
const moveButton = document.getElementById("move-button");
const moveButton2 = document.getElementById("move-button2");

const blockSize = 20;
const spacing = 200;
const baseY = 50;
const moveStep = 5;

let squareX = 50;
let jellyX = squareX + spacing + 120;

const character = [
    [0, 0, 0, 0, 0, 1, 0, 0, 0],   
    [0, 0, 0, 0, 0, 1, 1, 1, 1],   
    [0, 0, 0, 0, 0, 1, 1, 1, 1],   
    [0, 0, 0, 0, 0, 1, 1, 0, 0],   
    [0, 0, 0, 0, 0, 1, 1, 0, 0],   
    [1, 0, 0, 0, 0, 1, 1, 0, 0],   
    [1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0],   
    [1, 1, 0, 0, 0, 1, 1, 0, 0],   
    [1, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0]
];

function drawCharacter(offsetX, color, flip = false) {
    ctx.fillStyle = color;
    for (let y = 0; y < character.length; y++) {
        for (let x = 0; x < character[y].length; x++) {
            if (character[y][x] === 1) {
                let drawX = flip ? offsetX + (character[y].length - 1 - x) * blockSize : offsetX + x * blockSize;
                ctx.fillRect(drawX, baseY + y * blockSize, blockSize, blockSize);
            }
        }
    }
}

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCharacter(squareX, "blue");
    drawCharacter(jellyX, "pink", true); // Flipped character
}

moveButton.addEventListener("click", () => {
    if (jellyX - squareX > blockSize * 5) {
        squareX += moveStep;
        jellyX -= moveStep;
        drawScene();
    }
});
moveButton2.addEventListener("click", () => {
    if (jellyX - squareX > blockSize * 5) {
        squareX -= moveStep;
        jellyX += moveStep;
        drawScene();
    }
});

drawScene();