const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const messages = [
    "eres mi universo 🌌",
    "eres mi coincidencia favorita ✨",
    "contigo todo tiene sentido 💖"
];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function drawFlower(x, y) {
    const petals = Math.floor(random(6, 10));
    const size = random(20, 40);

    for (let i = 0; i < petals; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `hsl(${random(0,360)}, 100%, 70%)`;
        ctx.arc(x, y, size, 0, Math.PI / 3);
        ctx.stroke();

        ctx.rotate((Math.PI * 2) / petals);
    }
}

function drawGarden() {
    for (let i = 0; i < 8; i++) {
        const x = random(100, 700);
        const y = random(100, 500);
        drawFlower(x, y);
    }
}

drawGarden();

document.getElementById("message").innerText =
    "Karla " + messages[Math.floor(Math.random() * messages.length)];