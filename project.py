import turtle 
import random
import math

screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Jardín para ti :3")

t = turtle.Turtle()
t.speed(0)
t.width(2)
t.hideturtle()

messages = [
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

colors = ["red", "yellow", "blue", "pink", "purple", "cyan", "white", "orange"]

positions = []

def is_far_enough(x, y, min_dist=140):
    if -200 < x < 200 and -300 < y < -200:
        return False
    
    if math.hypot(x, y) < 150:
        return False
    
    for px, py in positions:
        if math.hypot(x - px, y -py) < min_dist:
            return False
    return True

def draw_rose():

    t.penup()
    t.left(90)
    t.fd(200)
    t.pendown()
    t.right(90)

    t.fillcolor("red")
    t.begin_fill()
    t.circle(10, 180)
    t.circle(25, 110)
    t.left(50)
    t.circle(60, 45)
    t.circle(20, 170)
    t.right(24)
    t.fd(30)
    t.left(10)
    t.circle(30, 110)
    t.fd(20)
    t.left(40)
    t.circle(90, 70)
    t.circle(30, 150)
    t.right(30)
    t.fd(15)
    t.circle(80, 90)
    t.left(15)
    t.fd(45)
    t.right(165)
    t.fd(20)
    t.left(155)
    t.circle(150, 80)
    t.left(50)
    t.circle(150, 90)
    t.end_fill()

    t.left(150)
    t.circle(-90, 70)
    t.left(20)
    t.circle(75, 105)
    t.setheading(60)
    t.circle(80, 98)
    t.circle(-90, 40)

    t.left(180)
    t.circle(90, 40)
    t.circle(-80, 98)
    t.setheading(-83)

    t.fd(30)
    t.left(90)
    t.fd(25)
    t.left(45)
    t.fillcolor("dark green")
    t.begin_fill()
    t.circle(-80, 90)
    t.right(90)
    t.circle(-80, 90)
    t.end_fill()
    t.right(135)
    t.fd(60)
    t.left(180)
    t.fd(85)
    t.left(90)
    t.fd(80)

    t.right(90)
    t.right(45)
    t.fillcolor("green")
    t.begin_fill()
    t.circle(80, 90)
    t.left(90)
    t.circle(80, 90)
    t.end_fill()
    t.left(135)
    t.fd(60)
    t.left(180)
    t.fd(60)
    t.right(90)
    t.circle(200, 60)

def draw_classic():
    petals = random.randint(6, 10)
    size = random.randint(40, 70)
    for _ in range(petals):
        t.color(random.choice(colors))
        t.circle(size, 60)
        t.left(120)
        t.circle(size, 60)
        t.left(360 / petals)

num_flowers = random.randint(7, 8)    

for _ in range(num_flowers):
    while True:
        angle = random.randint(0, 360)
        radius = random.randint(200, 260)
        
        x = radius * math.cos(math.radians(angle))
        y = radius * math.sin(math.radians(angle))
        
        if is_far_enough(x, y):
            positions.append((x, y))
            break

    t.penup()
    t.goto(x, y)
    t.pendown()

    t.setheading(random.randint(0, 360))

    draw_classic()

t.penup()
t.goto(0, 0)
t.pendown()
t.setheading(0)
draw_rose()

message = random.choice(messages)
t.penup()
t.goto(0, -350)
t.color("white")
t.write(f"Karla {message}", align="center", font=("Arial", 16, "bold"))

turtle.done()