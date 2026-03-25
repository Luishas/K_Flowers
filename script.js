const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.shadowBlur = 15;
ctx.shadowColor = "white";

// 🌌 estrellas
let stars = [];
for (let i = 0; i < 80; i++){
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        alpha: Math.random()
    });
}

function drawStars(){
    for (let s of stars){
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        s.alpha += (Math.random() - 0.5) * 0.05;
        s.alpha = Math.max(0.1, Math.min(1, s.alpha));
    }
}

// 🎲 random
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// 🌸 flores
let flowers = [];

function createFlower(x, y){
    flowers.push({
        x,
        y,
        offset: Math.random() * 1000
    });
}

// 🌱 aparecen progresivamente
function generateGardenAnimated() {
    const margin = 100;
    let count = 0;

    function addFlower() {
        if (count >= 10) return;

        const x = random(margin, canvas.width - margin);
        const y = random(margin, canvas.height - margin);

        createFlower(x, y);
        count++;

        setTimeout(addFlower, 600);
    }

    addFlower();
}

// 🌼 flor base
function drawFlowerStatic(x, y) {
    const petals = 7;
    const radius = 30;

    for (let i = 0; i < petals; i++) {
        const angle = (Math.PI * 2 / petals) * i;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.fillStyle = `hsl(${(i*40)%360}, 80%, 60%)`;

        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(radius, -radius, 0, -radius * 2);
        ctx.quadraticCurveTo(-radius, -radius, 0, 0);

        ctx.fill();
        ctx.restore();
    }

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
}

// 🌬️ viento
function drawFlowers(){
    for (let f of flowers){
        let sway = Math.sin(Date.now() * 0.002 + f.offset) * 5;
        drawFlowerStatic(f.x + sway, f.y);
    }
}

// 🌹 ROSA NIVEL DIOS (progresiva + orgánica)
let roseProgress = 0;

function drawRose(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    const totalPetals = 50;
    const petalsToDraw = Math.floor(roseProgress);

    for (let i = 0; i < petalsToDraw; i++) {

        let angle = i * 0.18; // menos uniforme
        let spread = 1 + i * 0.02; // expansión progresiva

        ctx.save();
        ctx.rotate(angle);

        ctx.beginPath();

        let hue = 340 + Math.sin(i * 0.2) * 15;
        let light = 35 + i * 0.7;

        ctx.fillStyle = `hsl(${hue}, 80%, ${light}%)`;

        // 🌹 pétalo irregular (clave)
        ctx.moveTo(0, 0);

        ctx.bezierCurveTo(
            20 * spread, -10 * spread,
            60 * spread, -60 * spread,
            0, -100 * spread
        );

        ctx.bezierCurveTo(
            -40 * spread, -60 * spread,
            -10 * spread, -10 * spread,
            0, 0
        );

        ctx.fill();
        ctx.restore();
    }

    // centro
    if (roseProgress >= totalPetals) {
        ctx.beginPath();
        ctx.fillStyle = "#5a0a0a";
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();

    // ⏳ más lento (control animación)
    if (roseProgress < totalPetals) {
        roseProgress += 0.1;
    }
}

// 💖 mensaje
function typeMessage(text){
    let i = 0;
    const el = document.getElementById("message");
    el.innerHTML = "";

    function type(){
        if (i < text.length){
            el.innerHTML += text[i];
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// 🎬 LOOP
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawStars();
    drawFlowers();
    drawRose(canvas.width/2, canvas.height/2, 1.2);

    requestAnimationFrame(animate);
}

// 🎵 música
function startMusic(){
    const music = document.getElementById("music");
    music.play();
}

// 🚀 INIT
generateGardenAnimated();
animate();

// 💬 mensajes
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
]

typeMessage("Karla " + messages[Math.floor(Math.random()*messages.length)]);