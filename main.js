
let correcta = 0;
let finalizar;
//preguntas
class Preguntas {
      constructor (id, pregunta, respuesta,incorrecta) {
        this.id = id
        this.pregunta = pregunta
        this.respuesta = respuesta
        this.incorrecta = incorrecta
      }
  }

 arrayPreguntas = [];
  arrayPreguntas.push (new Preguntas ("a", "¿Cuál es el río más largo del mundo?","Amazonas", "Nilo"))
  arrayPreguntas.push (new Preguntas ("b", "¿Cuál es el país con más habitantes del mundo?","China", "Rusia"))
  arrayPreguntas.push (new Preguntas ("c", "¿En qué año cayó el muro de Berlín?","1989", "1990"))
  arrayPreguntas.push (new Preguntas ("d", "¿Cuál es el planeta más grande del Sistema Solar?","Jupiter", "Saturno"))
  arrayPreguntas.push (new Preguntas ("e", "¿Cuántos huesos tiene el cuerpo humano?","206", "229"))

const preg = document.querySelector ("#preg")

 for (const interrogacion of arrayPreguntas) {
    const contenedor = document.createElement ("div");
    
    contenedor.innerHTML = `<p>${interrogacion.id}</p>
                             <p>${interrogacion.pregunta}</p>
                             <input type="button" value="${interrogacion.respuesta}" id= "ok" class= "btnResp">
                             <input type="button" value="${interrogacion.incorrecta}" id= "nok" class= "btnResp">
                            `
    preg.appendChild (contenedor);
     }

//resultados al finalizar
const fin = document.querySelector ("#fin")
const bien = document.getElementById ("bien")
const resultado = document.getElementById ("resultado")
const respOk  = []
fin.addEventListener("click", () => {
  
    if (correcta>=3) {
        bien.textContent = correcta
        resultado.textContent = "GANASTE!!"
    }
    else {
        bien.textContent = correcta
        resultado.textContent = "PERDISTE!!"
    }
    return
}

) 


const verdadero = document.querySelectorAll ("#ok");
const resultadoOK = function () {
    correcta++
    respOk.push (correcta);
    localStorage.setItem ("correctas",JSON.stringify (correcta));
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
     return
}

verdadero.forEach(el => {
	el.addEventListener("click", resultadoOK);
});

const falso = document.querySelectorAll ("#nok");
const resultadoNOK = function () {
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

//ubicacion

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
               ubicacion.textContent = `Ciudad: ${ciudad}`
            })
            .catch ( error => {
                console.log (error)
            })

        })

        
    }
})




