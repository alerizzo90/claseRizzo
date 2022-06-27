
let incorrecta = 0;
let finalizar;
let porcentajeC;
let porcentajeI;

class Preguntas {
    constructor (id, pregunta, respuesta,incorrecta) {
        this.id = id
        this.pregunta = pregunta
        this.respuesta = respuesta
        this.incorrecta = incorrecta
    }
}

arrayPreguntas = [];
arrayPreguntas.push (new Preguntas ("a", "¿Cuál es el río más largo del mundo?"+"\n"+ "amazonas o nilo", "amazonas", "nilo"))
arrayPreguntas.push (new Preguntas ("b", "¿Cuál es el país con más habitantes del mundo?"+"\n"+ "china o rusia", "china", "rusia"))
arrayPreguntas.push (new Preguntas ("c", "¿En qué año cayó el muro de Berlín?"+"\n"+ "1990 o 1989", "1989", "1990"))
arrayPreguntas.push (new Preguntas ("d", "¿Cuál es el planeta más grande del Sistema Solar?"+"\n"+"saturno o jupiter", "jupiter", "saturno"))
arrayPreguntas.push (new Preguntas ("e", "¿Cuántos huesos tiene el cuerpo humano?"+"\n"+"206 o 229", "206", "229"))


for (const interrogacion of arrayPreguntas) {
    let contenedor = document.createElement ('div')
    contenedor.className = 'pregunta'
    contenedor.innerHTML = `<p>${interrogacion.id}</p>
                            <p>${interrogacion.pregunta}</p>
                            <input type="button" value="${interrogacion.respuesta}" id= "ok">
                            <input type="button" value="${interrogacion.incorrecta}" id= "nok">
                            `
    document.body.appendChild (contenedor)

    }

let verdadero = document.getElementById ("ok")
verdadero.addEventListener ("click", resultadoOk )
function resultadoOk () { console.log (correcta.length)
}
const correcta = []
correcta.push (resultadoOk)
const enJSON = JSON.stringify (correcta)

localStorage.setItem ('respuestasPositivas', enJSON)

let verResultado = localStorage.getItem ('respuestasPositivas')



    



