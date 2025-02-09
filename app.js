// Lista de frases motivacionales
const quotes = [
    "Eres más fuerte de lo que crees 🌟",
    "Un día a la vez, lo estás logrando 💖",
    "Respira profundo, todo estará bien 🧘‍♀️",
    "Eres suficiente, tal como eres 🌸",
    "Tu voz tiene peso, tu criterio tiene valor, y tu esfuerzo deja huella",
    "No necesitas que el camino sea fácil, solo necesitas recordar por qué lo empezaste.",
    "La justicia es paciencia en acción. Confía en tu proceso, cada argumento que construyes es un paso más hacia tu meta",
    "Eres capaz de sostener conversaciones difíciles, tomar decisiones firmes y aún así ser amable contigo misma",
    "No midas tu éxito en comparación con otros, sino en cuán fiel eres a tus valores y convicciones",
    "Tienes derecho a cambiar de opinión, a respirar antes de responder y a elegir tus batallas con sabiduría",
    "El conocimiento es poder, pero la claridad en la acción es lo que lo convierte en impacto",
    "Las pausas no son un lujo, son una estrategia. Detente, respira, y sigue avanzando con más fuerza",
    "No necesitas demostrar tu capacidad a nadie más que a ti misma. Ya eres suficiente",
    "Cada obstáculo es una oportunidad disfrazada. ¿Cómo puedes transformar este desafío en aprendizaje?",
    "La coherencia entre lo que piensas, dices y haces es tu mayor fortaleza.",
    "No esperes el momento perfecto, usa el momento y hazlo perfecto.",
    "Las pausas estratégicas no son debilidad, son inteligencia en acción.",
    "Lo que hoy parece un reto, mañana será parte de tu historia de éxito.",
    "La disciplina vence al talento cuando el talento no se disciplina.",
    "Confía en tu criterio, ha sido forjado con conocimiento y experiencia.",
    "No necesitas ser infalible, solo estar dispuesta a aprender y mejorar.",
    "Los grandes cambios no ocurren de un día para otro, sino con pequeños pasos constantes.",
    "Decir ‘no’ a lo que te drena es decir ‘sí’ a lo que te fortalece.",
    "No tienes que tener todas las respuestas, solo la disposición de encontrarlas.",
    "El tiempo que inviertes en ti nunca es tiempo perdido.",
    "Tu capacidad de adaptación es más valiosa que cualquier plan rígido.",
    "No dejes que la urgencia de los demás marque tu ritmo de vida.",
    "El poder de una mente enfocada es más fuerte que cualquier distracción.",
    "Los límites que pones no te restan, te protegen.",
    "Cada logro, por pequeño que sea, merece reconocimiento.",
    "Un mal día no define tu camino, solo es una pausa en el trayecto.",
    "El valor no es la ausencia de miedo, sino la decisión de actuar a pesar de él.",
    "Eres capaz de sostener conversaciones difíciles con gracia y firmeza.",
    "Las palabras que eliges para hablarte a ti misma determinan tu confianza.",
    "No confundas descanso con inactividad, ambos tienen su propósito.",
    "Lo que das a los demás, no olvides dártelo también a ti misma.",
    "No minimices tus logros, cada paso es una prueba de tu esfuerzo.",
    "La duda es parte del crecimiento, no una señal de fracaso.",
    "Hoy es un buen día para empezar algo que tu yo del futuro agradecerá.",
    "No eres responsable de todo lo que pasa, pero sí de cómo decides actuar.",
    "Tu paz mental vale más que cualquier urgencia externa.",
    "Ser firme no significa ser dura, significa ser clara en tus límites.",
    "Escucha antes de responder, pero no calles cuando sea el momento de hablar.",
    "Los errores son parte del camino, lo importante es lo que aprendes de ellos.",
    "La mejor inversión que puedes hacer es en tu bienestar.",
    "No postergues el autocuidado, el éxito sin salud no es éxito.",
    "Ser amable contigo misma es la base para serlo con los demás.",
    "No todo requiere una respuesta inmediata, toma tu tiempo.",
    "No busques la validación externa, tu convicción es suficiente.",
    "Cada vez que superas un obstáculo, te conviertes en alguien más fuerte.",
    "No eres la misma persona que ayer, y eso es algo bueno.",
    "No compares tu capítulo 1 con el capítulo 20 de alguien más.",
    "Recuerda que lo urgente no siempre es lo más importante.",
    "Tus decisiones no deben complacer a todos, solo deben ser fieles a ti.",
    "Cuando el estrés llegue, haz una pausa antes de reaccionar.",
    "Nadie más tiene tu visión ni tu perspectiva, úsala a tu favor.",
    "Serás la persona más importante en tu vida durante toda tu vida.",
    "A veces, no decidir también es una decisión.",
    "No permitas que la prisa te haga olvidar lo que realmente importa.",
    "Tu voz es un instrumento de cambio, úsala con confianza.",
    "La paciencia contigo misma es tan importante como la paciencia con los demás.",
    "No necesitas ser perfecta, solo presente y comprometida.",
    "Descansar no es rendirse, es prepararse para el siguiente paso."
];

// Lista de retos de salud mental
const challenges = [
    "Haz una pausa y respira profundamente 5 veces 🍃",
    "Escribe 3 cosas por las que estás agradecida 💕",
    "Tómate 5 minutos para escuchar tu canción favorita 🎶",
    "Sal a caminar un poco y siente el aire en tu piel 🌿",
    "Escribe una situación en la que hayas defendido tus ideales con firmeza y cómo eso fortaleció tu confianza",
    "Durante 30 minutos, apaga las notificaciones del celular y concéntrate solo en una tarea o en descansar",
    "Escribe tres habilidades que has desarrollado en tu carrera y cómo te han servido en la vida",
    "Antes de responder a un correo o mensaje importante, respira profundo tres veces y estructura tu respuesta con calma",
    "Durante el día de hoy, cada vez que notes un pensamiento autocrítico, reformúlalo en términos de aprendizaje o crecimiento",
    "Cierra los ojos por 2 minutos e imagina una versión de ti misma que ha alcanzado sus metas. ¿Cómo se siente? ¿Cómo se mueve? ¿Qué ha aprendido?",
    "Dedica 10 minutos a caminar sin prisas, observando tu entorno y dejando que tu mente se despeje.",
    "Piensa en una situación en la que alguien confió en tu criterio. Recuerda ese momento y reconoce tu valor",
    "Hoy, expresa claramente una idea o una necesidad sin disculparte por ello",
    "Inhala por 4 segundos, sostén la respiración por 7 y exhala lentamente por 8. Repite 3 veces para liberar tensión",
    "Haz una lista de 3 logros que hayas alcanzado en el último mes, por pequeños que sean.",
    "Dedica 10 minutos a respirar conscientemente sin distracciones.",
    "Desactiva las notificaciones innecesarias del celular por 2 horas.",
    "Anota un pensamiento recurrente y reescríbelo de manera positiva.",
    "Escribe un correo o mensaje agradeciendo a alguien que haya influido positivamente en tu vida.",
    "Tómate un café o té sin prisa, disfrutando cada sorbo.",
    "Dedica 15 minutos a organizar un espacio de trabajo más cómodo.",
    "Haz un paseo corto sin el teléfono, observando tu entorno.",
    "Escucha una canción que te traiga buenos recuerdos y disfrútala sin interrupciones.",
    "Lee un artículo o libro sobre un tema que te interese fuera del trabajo.",
    "Durante una conversación, practica escuchar sin interrumpir ni planear tu respuesta.",
    "Apunta una preocupación y luego haz una lista de soluciones posibles.",
    "Escribe una afirmación positiva y repítela en voz alta 3 veces.",
    "Dedica 5 minutos a estirarte y relajar la tensión corporal.",
    "Agenda un momento del día para no hacer absolutamente nada.",
    "Anota una meta a corto plazo y el primer paso concreto para alcanzarla.",
    "Llama a una persona querida con la que hace tiempo no hablas.",
    "Practica la técnica de respiración 4-7-8: inhala 4 segundos, retén 7, exhala 8.",
    "Declara un día libre de autocrítica y obsérvate con amabilidad.",
    "Escribe una carta para tu yo del futuro con consejos y palabras de ánimo.",
    "Evita el multitasking durante 1 hora y concéntrate en una sola tarea.",
    "Haz algo creativo sin presión de perfección: dibujar, escribir, cocinar, etc.",
    "Asegúrate de beber suficiente agua hoy.",
    "Date un pequeño gusto sin justificación: un postre, una siesta, un baño relajante.",
    "Dedica 10 minutos a caminar al aire libre sin distracciones.",
    "Piensa en 3 cosas buenas que hayan pasado en tu día.",
    "Antes de dormir, escribe una intención positiva para el día siguiente.",
    "Evita revisar redes sociales o correos en la primera hora del día.",
    "Tómate el tiempo para saborear tu comida sin distracciones digitales.",
    "Prueba responder a un pensamiento negativo con un argumento lógico y positivo.",
    "Reorganiza tu escritorio y deshazte de lo que ya no necesitas.",
    "Mueve tu cuerpo al ritmo de una canción sin preocuparte de cómo se ve.",
    "Dedica 5 minutos a un ejercicio de gratitud, enfocándote en cosas simples.",
    "Antes de iniciar el día, visualiza cómo te gustaría que transcurriera.",
    "Hoy, di ‘no’ a algo que realmente no quieres hacer.",
    "Haz una pausa de 5 minutos entre tareas para recargar tu energía.",
    "Piensa en una decisión reciente y anota qué aprendiste de ella.",
    "Haz una actividad sin una meta específica, solo por el placer de hacerlo.",
    "Escribe una lista de cosas que te hacen sentir en calma.",
    "Haz un ejercicio de postura y observa cómo afecta tu confianza.",
    "Reduce el brillo de tus pantallas por la noche para mejorar el descanso.",
    "Enfrenta un pendiente que has estado postergando.",
    "Pasa 30 minutos sin consumir contenido digital, solo estando contigo misma.",
    "Reflexiona sobre cómo reaccionas ante el estrés y qué podrías mejorar.",
    "Haz un inventario de tus fortalezas y cómo las aplicas en tu vida.",
    "En un momento de estrés, respira profundo y repite: 'Esto también pasará'."

];

// Objeto para almacenar tareas por día
const weeklyTasks = {};


const characters = [
    { name: "Angelica", img: "assets/angelica.png", phrase: "¡Tú mandas aquí! 💅" },
    { name: "Tommy", img: "assets/tommy.png", phrase: "Gracias por siempre cuidarme <3 - Pipe" },
    { name: "Po", img: "assets/po.png", phrase: "¡Abrazo fuerte para ti! 🤗" },
    { name: "Laa-Laa", img: "assets/laalaa.png", phrase: "A veces lo olvidas, pero eres capaz de lograr todo lo que te propones😊" }
];

function showSurprise() {
    const characterImg = document.getElementById("character-img");
    const characterPhrase = document.getElementById("character-phrase");

    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];

    characterImg.src = character.img;
    characterPhrase.textContent = `"${character.phrase}"`;
    characterImg.classList.remove("hidden");

    // Ocultar sorpresa después de 10 segundos
    setTimeout(() => {
        characterImg.classList.add("hidden");
        characterPhrase.textContent = "";
    }, 10000);
}

// Activar sorpresa cada 30 segundos
setInterval(showSurprise, 10000);



// Función para agregar tarea a un día específico
function openTaskInput(day) {
    const task = prompt(`Añade una tarea para ${day}:`);
    if (task) {
        if (!weeklyTasks[day]) {
            weeklyTasks[day] = [];
        }
        weeklyTasks[day].push(task);
        updateWeeklyTasks();
    }
}

// Mostrar tareas semanales en la lista
function updateWeeklyTasks() {
    const list = document.getElementById("weekly-tasks");
    list.innerHTML = "";

    for (let day in weeklyTasks) {
        weeklyTasks[day].forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = `${day}: ${task}`;
            
            // Función para eliminar tarea al hacer clic
            li.onclick = () => {
                weeklyTasks[day].splice(index, 1); // Eliminar tarea del array
                if (weeklyTasks[day].length === 0) {
                    delete weeklyTasks[day]; // Eliminar el día si ya no tiene tareas
                }
                updateWeeklyTasks(); // Actualizar la lista
            };

            list.appendChild(li);
        });
    }
}


// Mostrar frase aleatoria
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quote-display");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

// Mostrar reto aleatorio
function showRandomChallenge() {
    const challengeDisplay = document.getElementById("challenge-display");
    const randomIndex = Math.floor(Math.random() * challenges.length);
    challengeDisplay.textContent = challenges[randomIndex];
}

// Manejo de tareas
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        li.onclick = () => li.remove(); // Eliminar al hacer clic
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

