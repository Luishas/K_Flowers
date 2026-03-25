const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.shadowBlur = 15;
ctx.shadowColor = "white";

const messages = [
    "eres la coincidencia que el universo conspiró para regalarme en el momento mas inesperado de nuestras realidades ✨ , Te Amo",
    "si el destino escribe historias, la nuestra es especial, porque la pluma habia cesado de escribir y aun asi nos puso a nosotros como los actores principales de la continuidad 💫, Te Amo",
    "en un universo infinito, terminé encontrándote a ti en esa misma infinidad 🌌, Te Amo",
    "eres mi punto fijo en esta realidad cambiante y que nunca deja de evolucionar hacia lo inexplorado 🌍, Te Amo",
    "el universo tenía millones de opciones y posibilidades… y nos eligió a nosotros en 💖, Te Amo",
    "si todo es caos, tú eres mi orden y lo que da infinitas posibilidades a las ideas de mi mente ✨, Te Amo",
    "nuestro encuentro no fue suerte, fue destino o tal vez solo la infima imposibilidad de que sucediera alegro al cosmos y nos otorgo esta oportunidad🌌, Te Amo",
    "entre tantas realidades, te volvería a elegir una y otra vez, porque solo quiero que seas tu, y yo quiero serlo para ti 💫, Te Amo",
    "eres mi gravedad en este universo, y a la vez la fuerza que me impulsa a seguir en esta tierra, y dar todo de mi en tu busqueda 🌍, Te Amo",
    "si el universo habla, lo hace en tu sonrisa como dos nebulosas en colision y dando un espectaculo de explosion sin precedentes ✨, Te Amo",
    "eres mi constante en medio de la infinita incertidumbre del universo y de la misma vida 💖, Te Amo",
    "el destino nos cruzó y cambió todo al instante, y todas las lineas temporales convergieron en esta, porque todos mis yo no te dejarian por nada del mundo 🌌, Te Amo",
    "eres el milagro más lógico de mi realidad distorsionada 💫, Te Amo",
    "en cualquier universo, siempre eres, eras, y serías tú asi como los universos no dejan de expandirse hacia el infinito, te encontraria con la misma fuerza 🌙, Te Amo",
    "eres la casualidad más perfecta del universo y entre tantas casualidades, solo tú eres especial 🌌, Te Amo",
    "si el universo se repite, te buscaría otra vez, aun siendo geneticamente diferentes, se que hay algo mas que me une a ti que va mas alla de lo fisico y razonable ✨, Te Amo",
    "eres la estrella que le da sentido a mi cielo, entre tanta oscuridad de la que vivia sumergido, tu le diste la luz necesaria para alumbrar todo mi cielo 🌟, Te Amo",
    "mi universo tiene tu nombre, y mi mente solo te piensa cuando no estoy contigo, eres mi universo, y llevas una gran parte de mi en ti ✨, Te Amo",
    "eres mi hogar en cualquier realidad, porque asi me siento cuando estoy contigo, y cuando no lo estoy siento que me falta algo, y por mas que quiera no puedo explicar el que, solo se que eres tu 🌍, Te Amo",
    "si todo lo conocido y por conocer terminara, quiero que en el proximo big bang todo empiece contigo y poder encontrarte siendo dos seres que van mas alla de lo mundano 💫, Te Amo",
    "eres el infinito que quiero explorar junto a ti, hasta que los confines del universo no tengan sentido y lleguemos a la incompresion absoluta 🌌, Te Amo",
    "eres la razón por la que creo en el universo, porque puso ante mi lo que volvio especial los dias, y el querer hacer mas que solo sobrevivir en este mundo en caos ✨, Te Amo",
    "eres mi punto de equilibrio en el caos en todo lugar y momento 🌌, Te Amo",
    "eres mi realidad favorita, mi persona favorita, mi mente favorita, y eres mi tu favorita 💖, Te Amo",
    "eres la estrella que ilumina mi cielo, incluso en mis noches más oscuras 🌟, Te Amo",
    "mi universo tiene tu nombre, y mi mente te encuentra incluso cuando no te busco ✨, Te Amo",
    "eres el infinito que quiero explorar y encontrar todas las posibilidades que tengo de estar contigo por toda la misma infinidad 🌌, Te Amo",
    "te volviste parte de mi realidad, y ahora todo tiene color, con tus ojos hermosos permites a la luz continuar su camino y lograr tantas tonalidades hermosas, pero ninguna como tu 💖, Te Amo",
    "eres esa parte de mi vida que no sabía que faltaba, pero que al encontrarte hizo que todo comenzara a encajar de una forma natural ✨, Te Amo",
    "contigo aprendí que hay formas de sentir que no necesitan explicación, porque simplemente se viven y se sienten sin necesidad de explicarse 🌙, Te Amo",
    "eres la calma en medio de mis pensamientos, el lugar donde todo deja de ser complicado y se vuelve simplemente real 💖, Te Amo",
    "eres la estrella que siempre elijo cada dia, y desde que estas en mi vida, siempre veo en ella la luz que me permite seguir mi dia a dia 🌟, Te Amo",
    "eres ese momento que se repite en mi mente sin cansarse, como si el tiempo quisiera conservarte y mi alma te cuidara desde siempre 🌌, Te Amo",
    "eres lo único que no cambiaría de mi realidad y lo que siempre buscaria si supiera que vivimos entre realidades ✨, Te Amo",
    "eres la razón por la que ciertos días tienen un significado distinto, incluso cuando todo parece normal al solo verte mi mente pierde todo sentido 💫, Te Amo",
    "eres la forma en la que el tiempo decide detenerse cuando más importa, y guardar esos momentos en la memoria de lo inexpugnable de esta realidad 💖, Te Amo",
    "eres ese pensamiento que aparece sin avisar y se queda, como si nunca hubiera tenido intención de irse y que siempre busque encontrar 🌌, Te Amo",
    "desde que estás, incluso los silencios tienen un significado más profundo en el que solo nuestras mentes pueden entrar y comprender 🌍, Te Amo",
    "si hay mil realidades, viajare por todas y cada una de ellas hasta poder encontrar en la que te encuentras ✨, Te Amo",
    "eres la respuesta a todo lo que mi corazon y mi mente buscaban, dandoles la tranquilidad necesaria de que al fin te encuentras en mi vida 💫, Te Amo",
    "eres mi siempre, mi presente y mi futuro, en la inconsistencia del tiempo que manejamos solo quiero que estes en todos los momentos que siento 🌙, Te Amo",
    "eres la mejor parte de mi realidad y por la cual no tengo miedo a luchar, todos estos sentimientos se desbordan por ti, y mi corazon solo anhela tenerte a su lado 🌌, Te Amo",
    "contigo todo es infinito porque asi se siente el tiempo y el espacio cuando estoy contigo, un sinfin de emociones y sensaciones que nunca acabarán 💫, Te Amo",
    "eres mi estrella constante, por la que muero y la que que necesito, porque un poco de voz calma mi mente, tu mirada me llena de paz, y tus labios sabor a amor hacen que mi mente no quiera pensar, nada mas que en ti 🌟, Te Amo",
    "te amo con locura, aunque sea tonto gritarlo, lo hago porque no puedo guardar todo lo que siento por ti, y quiero mostrar a todos el hecho de que estoy enamorado de una hermosa flor 💫, Te Amo",
    "te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, 💖, Te Amo",
    "eres mi principessa, y lo seras por siempre, no es algo fugaz, mas bien un conjuro eficaz, que nos llevaran a seguir el camino de lo irreal y compartir juntos la eternidad 💖, Te Amo",
    "eres lo que no puedo explicar, palabras aun no han sido inventadas para poder describir lo que en mi mente pasa y lo que mi corazon siente, solo eres tu y a ti te miro con la misma intensidad que mi alma anhela tenerte 🌌, Te Amo",
    "eres lo inmortal en este universo, y en esta realidad, porque mi mente registrara el amor que te tengo en todo espacio posible en y en toda mente alcanzable, para que comprendan como se siente el amor verdadero 💖, Te Amo",
    "eres la mujer a la que amo, y la que quiero amar por siempre, aunque amar sea timido y silencioso en estas epocas, te demuestro mi amor, esperando en el ocaso, acompañandote en tu soledad, para que incluso en ella no te sientas sola 🌌, Te Amo",
    "solo tu puedes nublar el sol eternamente, secar el mar, y romper el mismo campo electromagnetico de la tierra, porque eres tu la unica capaz de aceptar mi corazon 💖, Te Amo",
    "je t'aime, te amo, ich liebe dich, eu te amo, ti amo, я тебя люблю, 我爱你, 사랑해, te quiero, jeg elsker dig, saya cinta kamu, saya sayang kamu, te iubesc, я люблю тебя, אני אוהב אותך, मैं तुमसे प्यार करता हूँ 💖",
    "eres la flor que quiero cuidar por siempre, y aunque el tiempo pase, y las estaciones cambien, mi amor por ti siempre florecera, porque eres tu la que hace que mi vida tenga sentido 🌹, Te Amo",
    "just me and you for eternity, porque no solo se trata de sentir y dejar la racionalidad mientras sentimos solo con el corazon, mi mente te elige cada dia y en ella te vuelves la unica Te Amo 💖",
]

// 🌌 estrellas
let stars = [];
function generateStars(){
    for (let i = 0; i < 80; i++){
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            alpha: Math.random()
        });
    }
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
        offset: Math.random() * 1000,
        petals: Math.floor(random(5, 10)),
        radius: random(20, 50),
        hue: random(0, 360),
        centerSize: random(5, 10),
        petalWidth: random(0.5, 1.5),
        petalLength: random(1, 2)
    });
}

function isNearCenter(x, y){
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    return Math.abs(x - cx) < 200 && Math.abs(y - cy) < 120;
}

let generating = false;
// 🌱 aparecen progresivamente
function generateGardenAnimated() {
    const margin = 80;
    let count = 0;

    function addFlower() {
        if (!generating ||count >= 20) return;

        let x, y;
        do {
            x = random(margin, canvas.width - margin);
            y = random(margin, canvas.height - margin);
        } while (isNearCenter(x, y));

        createFlower(x, y);
        count++;

        setTimeout(addFlower, 2000);
    }

    addFlower();
}

// 🌼 flor base
function drawFlowerStatic(f) {
    const { x, y, petals, radius, hue, centerSize, petalWidth, petalLength } = f;

    for (let i = 0; i < petals; i++) {
        const angle = (Math.PI * 2 / petals) * i;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.fillStyle = `hsl(${hue + i*10}, 80%, 60%)`;

        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(
            radius * petalWidth,
            -radius * petalLength,
            0,
            -radius * 2
        );
        ctx.quadraticCurveTo(
            -radius * petalWidth,
            -radius * petalLength,
            0,
            0
        );

        ctx.fill();
        ctx.restore();
    }

    ctx.beginPath();
    ctx.fillStyle = `hsl(${hue + 180}, 80%, 60%)`;
    ctx.arc(x, y, centerSize, 0, Math.PI * 2);
    ctx.fill();
}

// 🌬️ viento
function drawFlowers(){
    for (let f of flowers){
        let sway = Math.sin(Date.now() * 0.002 + f.offset) * 5;
        drawFlowerStatic({
            ...f,
            x: f.x + sway,
            y: f.y
        });
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
            setTimeout(type, 300);
        }
    }
    type();
}

// 🎬 LOOP
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawFlowers();
    requestAnimationFrame(animate);
}

// 🎵 música
const music = document.getElementById("music");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.onclick = () => {
    music.play();
    generating = true;
    generateGardenAnimated();
    typeMessage("Karla " + messages[Math.floor(Math.random()*messages.length)]);
}

resetBtn.onclick = () => {
    flowers = [];
    generateStars();
    generating = false;
    document.getElementById("message").innerHTML = "";
    music.pause();
    music.currentTime = 0;
}
// 🚀 INIT
generateStars();
animate();


