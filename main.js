
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



const verdadero = document.querySelectorAll ("#ok");
const resultadoOK = function () {
     console.log("correcta");
     Toastify({
        text: "Verdadero",
        duration: 3000,
        gravity: "top",
        position: "center",
        
         style: {
            background: "linear-gradient(to right, #213D19 ,  #8FDF76 )",
             fontSize: "1.5rem",
             color: "white",
        }
     }).showToast();
}

verdadero.forEach(el => {
	el.addEventListener("click", resultadoOK);
});

const falso = document.querySelectorAll ("#nok");
const resultadoNOK = function () {
     console.log("incorrecta");
     Toastify({
        text: "Incorrecta",
        duration: 3000,
        gravity: "top",
        position: "center",
        
         style: {
             background: "linear-gradient(to right, #FF4C33 , #E77070 )",
             fontSize: "1.5rem",
             color: "white",

        }
     }).showToast();
}

falso.forEach(el => {
	el.addEventListener("click", resultadoNOK);
    
});


const enJSON = JSON.stringify (resultadoOK)


localStorage.setItem ('respuestasPositivas', enJSON)

let verResultado = localStorage.getItem ('respuestasPositivas')

const contenedor = document.getElementById ("lugar");

window.addEventListener ('load', () => {
    let lon
    let lat
    let ubicacion = document.getElementById("ubicacion")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition (posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cf96ea4522ed13f0c72c1ff15860230e`
            console.log (url)
            fetch (url)
            .then( response => {return response.json()})
            .then (data => {
               console.log (data.name)
               let ciudad = data.name
               ubicacion.textContent = `Tu lugar: ${ciudad}`
            })

        })

        
    }
})




