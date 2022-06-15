// //Clase evaludo

// class evaluado{
//     constructor (nombre, edad,) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     resultado () {
//         return alert (this.nombre + "su resultado es:")
//     }
// }

// const arrayEvaluado = []

// arrayEvaluado.push (new evaluado (prompt("nombre")), parseInt(prompt("edad")))


// //Simulador de trivia
// function trivia() {
// let preguntaA;
// let preguntaB;
// let preguntaC;
// let preguntaD;
// let preguntaE;
// let correcta = 0;
// let incorrecta = 0;
// let finalizar;
// let porcentajeC;
// let porcentajeI;

// do {
//     arrayEvaluado
//     preguntaA = prompt ("1. ¿Cuál es el río más largo del mundo?"+"\n"+ "amazonas o nilo")
//     preguntaB = prompt ("2. ¿Cuál es el país con más habitantes del mundo?"+"\n"+ "china o rusia")
//     preguntaC = Number (prompt ("3. ¿En qué año cayó el muro de Berlín?"+"\n"+ "1990 o 1989"))
//     preguntaD = prompt ("4.¿Cuál es el planeta más grande del Sistema Solar?"+"\n"+"saturno o jupiter")
//     preguntaE = Number (prompt ("5.¿Cuántos huesos tiene el cuerpo humano?"+"\n"+"206 o 229"))
    
//     if (preguntaA=="amazonas") {
//         correcta ++
//     }
//     else {
//         incorrecta ++
//     }

//     if (preguntaB=="china") {
//         correcta++
//     }
//     else {
//         incorrecta ++
//     }
//     if (preguntaC == 1989) {
//         correcta++
//     }
//     else {
//         incorrecta ++
//     }
//     if (preguntaD == "jupiter") {
//         correcta++
//     }
//     else {
//         incorrecta ++
//     }
//     if (preguntaE == 206) {
//         correcta++
//     }
//     else {
//         incorrecta ++
//     }

//     finalizar = confirm ("¿Quiere reiniciar la trivia?")

// }
// while (finalizar) {
//     porcentajeC = correcta*100/5;
//     porcentajeI = incorrecta*100/5;

//     alert ("Respuestas correctas:"+"\n"+ porcentajeC+"%")
//     alert ("Respuestas incorrectas:"+"\n"+porcentajeI+"%")
//     if (porcentajeC>=60) {
//         alert ("Todos pueden alcanzar el éxito pero pocos se atreven, tú lo hiciste y hoy eres uno de los mejores,"+"\n"+"¡FELICITACIONES!")
//     }
//     else (
//         alert ("El éxito de la vida no está en vencer siempre, sino en no rendirse nunca.")
//     )   
// }

// }

let comenzar = document.getElementById ("btmComenzar")
let usuario = document.getElementById ("nombre")

comenzar.onclick = () => {
    console.log ("comenzar trivia")
}
comenzar.onchange = () => {
    console.log ("iniciar")
}
usuario.onkeydown = () => {
    console.log ("ingreso de usuario")
}




