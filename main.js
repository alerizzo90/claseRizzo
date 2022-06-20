
let correcta = 0;
let incorrecta = 0;
let finalizar;
let porcentajeC;
let porcentajeI;

class Preguntas {
    constructor (id, pregunta, respuesta,) {
        this.id = id
        this.pregunta = pregunta
        this.respuesta = respuesta
    }
}

arrayPreguntas = [];
arrayPreguntas.push (new Preguntas ("a", "¿Cuál es el río más largo del mundo?"+"\n"+ "amazonas o nilo", "amazonas"))
arrayPreguntas.push (new Preguntas ("b", "¿Cuál es el país con más habitantes del mundo?"+"\n"+ "china o rusia", "china"))
arrayPreguntas.push (new Preguntas ("c", "¿En qué año cayó el muro de Berlín?"+"\n"+ "1990 o 1989", "1989"))
arrayPreguntas.push (new Preguntas ("d", "¿Cuál es el planeta más grande del Sistema Solar?"+"\n"+"saturno o jupiter", "jupiter"))
arrayPreguntas.push (new Preguntas ("e", "¿Cuántos huesos tiene el cuerpo humano?"+"\n"+"206 o 229", "206"))


const trivia = () => {
    const interrogante = arrayPreguntas.map ( (el) => el.pregunta)
    const replica = arrayPreguntas.map ( (el) => el.respuesta)
    
    interrogante;
    do {
        
        if (replica) {
            correcta ++
        }
        else {
            incorrecta ++
        }
        finalizar = confirm ("¿Quiere finalizar la trivia?")
    }
    while (finalizar) {
            porcentajeC = correcta*100/5;
            porcentajeI = incorrecta*100/5;

            console.log ("Respuestas correctas:"+"\n"+ porcentajeC+"%")
            console.log ("Respuestas incorrectas:"+"\n"+porcentajeI+"%")
            if (porcentajeC>=60) {
            console.log ("Todos pueden alcanzar el éxito pero pocos se atreven, tú lo hiciste y hoy eres uno de los mejores,"+"\n"+"¡FELICITACIONES!")
            }
             else (
            console.log ("El éxito de la vida no está en vencer siempre, sino en no rendirse nunca.") )   
    }

    }



for (const interrogacion of arrayPreguntas) {
    let contenedor = document.createElement ("div")
    contenedor.innerHTML = `<label for="pregunta">
                                <p>${interrogacion.id}</p>
                                <p>${interrogacion.pregunta}</p>
                            </label> 
                            <input type="text" name=${interrogacion.respuesta} id="respuestas">
                            `
    document.body.appendChild (contenedor)
}
let confirmar = document.createElement ("div")
confirmar.innerHTML = `<button id= "finalizar">finalizar</button>`
document.body.appendChild (confirmar)

const enJson = JSON.stringify (arrayPreguntas);
console.log (enJson)



let verResultado = document.getElementById ("finalizar")


verResultado.onclick = () => {
    trivia()
    console.log ("ver resultado")}




