const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.shadowBlur = 15;
ctx.shadowColor = "white";

const messages = [
    "eres la coincidencia que el universo conspiró para regalarme ✨",
    "si el destino escribe historias, la nuestra es mi favorita 💫",
    "en un universo infinito, terminé encontrándote a ti 🌌",
    "eres mi punto fijo en esta realidad cambiante 🌍",
    "el universo tenía millones de opciones… y me eligió a ti 💖",
    "si todo es caos, tú eres mi orden ✨",
    "eres la respuesta que nunca supe que buscaba 🌙",
    "nuestro encuentro no fue suerte, fue destino 🌌",
    "entre tantas realidades, te volvería a elegir 💫",
    "eres mi gravedad en este universo 🌍",
    "si el universo habla, lo hace en tu sonrisa ✨",
    "eres mi constante en medio del infinito 💖",
    "el destino nos cruzó y cambió todo 🌌",
    "eres el milagro más lógico de mi realidad 💫",
    "en cualquier universo, siempre serías tú 🌙",
    "eres la casualidad más perfecta del universo 🌌",
    "mi realidad mejoró desde que existes en ella 💖",
    "el destino no se equivocó contigo 💫",
    "eres mi lugar en este mundo 🌍",
    "si el universo se repite, te buscaría otra vez ✨",
    "eres la estrella que le da sentido a mi cielo 🌟",
    "el destino nos unió cuando más lo necesitaba 💖",
    "eres mi coincidencia favorita 🌌",
    "mi universo tiene tu nombre ✨",
    "eres mi hogar en cualquier realidad 🌍",
    "si todo termina, quiero que empiece contigo 💫",
    "eres el infinito que quiero explorar 🌌",
    "mi destino cambió el día que te conocí 💖",
    "eres la razón por la que creo en el universo ✨",
    "contigo todo tiene sentido 🌙",
    "eres mi punto de equilibrio en el caos 🌌",
    "el universo me llevó directo a ti 💫",
    "eres mi realidad favorita 💖",
    "si el destino insiste, es por algo… y eres tú ✨",
    "eres el centro de mi universo 🌍",
    "en cada vida, te volvería a encontrar 💫",
    "eres mi coincidencia eterna 🌌",
    "mi realidad es mejor contigo 💖",
    "el universo supo lo que hacía contigo ✨",
    "eres mi infinito personal 🌙",
    "si el destino es real, tú eres la prueba 💖",
    "eres la estrella que siempre elijo 🌟",
    "mi universo empezó contigo 🌌",
    "eres lo único que no cambiaría de mi realidad ✨",
    "contigo todo es correcto 💫",
    "eres mi destino favorito 💖",
    "el universo conspiró para que te encuentre 🌌",
    "eres mi lugar seguro en esta realidad 🌍",
    "si hay mil caminos, elijo el tuyo ✨",
    "eres la respuesta a todo 💫",
    "eres mi universo en forma de persona 🌌",
    "mi realidad empezó a brillar contigo ✨",
    "el destino me llevó a casa… contigo 💖",
    "eres mi siempre 🌙",
    "eres el punto donde todo tiene sentido 💫",
    "si el universo se apaga, me quedo contigo 💖",
    "eres mi gravedad emocional 🌍",
    "mi destino siempre fue encontrarte ✨",
    "eres la mejor parte de mi realidad 🌌",
    "contigo todo es infinito 💫",
    "eres mi estrella constante 🌟",
    "el universo se siente pequeño contigo 💖",
    "eres mi verdad favorita ✨",
    "si hay otra vida, te vuelvo a amar 🌌",
    "eres mi coincidencia eterna 💫",
    "mi universo gira a tu alrededor 🌍",
    "eres la razón por la que creo en el destino 💖",
    "contigo todo encaja ✨",
    "eres mi infinito en pausa 🌌",
    "eres la mejor versión de mi realidad 💫",
    "si el universo me diera otra oportunidad, te elegiría otra vez 💖",
    "eres mi equilibrio perfecto 🌍",
    "mi realidad empezó contigo ✨",
    "eres mi destino cumplido 💫",
    "eres la historia que siempre quise vivir 🌌",
    "eres mi punto de partida y mi destino 💖",
    "el universo me llevó justo donde debía… a ti ✨",
    "eres mi todo en este infinito 🌌",
    "contigo el universo tiene sentido 💫",
    "eres mi verdad absoluta 💖",
    "eres la única constante en mi universo 🌍",
    "mi destino es quedarme contigo ✨",
    "eres mi infinito favorito 🌌",
    "contigo todo es real 💫",
    "eres la razón de mi universo 💖"
];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function drawFlower(x, y) {
    const petals = Math.floor(random(6, 10));
    const radius = random(20, 40);

    for (let i = 0; i < petals; i++) {
        const angle = (Math.PI * 2 / petals) * i;
        
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.fillStyle = `hsl(${random(0,360)}, 80%, 60%)`;
        ctx.arc(px, py, radius / 2, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(x, y, radius / 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 40);
    ctx.stroke();
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