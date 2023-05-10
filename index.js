
function avisoMinusculas (){

  let texto = document.querySelector("textarea").value;
//SENTENCIA PARA EJECUTAR UNA SOLA VEZ EL ALERT CUANDO SE DA CLICK EN EL TEXTAREA
if (!ejecutado){

  
  if (texto === ""){
          
      swal("Aviso", "¡Recuerda que debes de utilizar solo letras minúsculas y sin acentos!", "warning").then(() => {
        textarea.focus(); // Enfocar nuevamente el textarea
      });
      
      ejecutado = true;
    }
  }
  
}


function encriptar (){


  // ESTE CODIGO OBTIENE EL TEXTO DEL TEXTAREA
  let texto = document.querySelector("textarea").value;
  texto = texto.toLocaleLowerCase();
  let cuadroTextp = document.q
  console.log (texto);

  
  function limpiarCaja () {
    
    // ESTE CODIGO OCULTA LA IMAGEN Y EL TEXTO DE LA CAJA DE ENCRIPTACION
  document.getElementById("img-muñeco").classList.add("none");
  document.getElementById("h3-caja").classList.add("none");
  document.getElementById("p-caja").classList.add("none");

  }


  function encriptarTexto (){
    
  // ESTE CODIGO SOLO ES PARA AGREGAR EL TEXTO PERO SIN ENCRIPTARLO 
    
  let cajaEncriptador = document.getElementById("caja-mensaje");
  
    let nuevoParrafoEncriptado = document.createElement("p");

    //LOGICA DE ENCRIPTADO
    
    
    let letrasDeEncriptacion = {
      "a": "ai",
      "e": "enter",
      "i": "imes",
      "o": "ober",
      "u": "ufat"
    };

    let textoEncriptacion = [];

    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      let letraReemplazada = letrasDeEncriptacion[letra] || letra; // Si la letra no tiene reemplazo, se deja tal cual
      textoEncriptacion.push(letraReemplazada);
      // console.log(nuevoTexto);
    }

    console.log(textoEncriptacion.join(''));
    
    //TERMINO LOGICA DE ENCRIPTADO

    let textoEncriptado = document.createTextNode(textoEncriptacion.join(""));

    nuevoParrafoEncriptado.appendChild(textoEncriptado);
    
    cajaEncriptador.appendChild(nuevoParrafoEncriptado);
    
    // AQUI ACABA EL CODIGO PARA AGREGAR EL TEXTO PERO SIN ENCRIPTARLO 
    
    
    document.getElementById("caja-mensaje").classList.add("color");
    
    // Deshabilitar el botón de encriptar
    document.querySelector(".boton-encriptar").disabled = true;


    function aparecerBotonCopiar (){
      let cajaEncriptador = document.getElementById("caja-mensaje");
      let botonCopiar = document.createElement("button");
      cajaEncriptador.appendChild(botonCopiar);
      botonCopiar.innerHTML = "Copiar";
      botonCopiar.setAttribute("class", "boton-copiar");
  
      botonCopiar.addEventListener('click', function() {
        navigator.clipboard.writeText(textoEncriptacion.join(""))
          .then(() => {
            swal("El texto ha sido copiado al portapapeles", " ", "success");
          })
          .catch(err => {
            swal('Error al copiar el texto: ', err);
          });
      });
    
    }

    aparecerBotonCopiar();
  }

 
    // AQUI SE LLAMAN LAS FUNCIONES QUE SE EJECUTAN CON EL BOTON "ENCRIPTAR"
    limpiarCaja();
    encriptarTexto();
}



function copiarTexto (){

  let botonCopiar = document.getElementsByClassName("boton-copiar");
  botonCopiar.addEventListener('click', function() {
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log('El texto ha sido copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  });

}

// INICIALIZANDO LA VARIABLE DEL TRIGGER QUE ME AYUDA A EJECUTAR EL ALERT EN EL TEXTAREA
let ejecutado = false;


let botonEncriptador = document.querySelector(".boton-encriptar");
botonEncriptador.onclick = encriptar;

let textarea = document.querySelector(".textarea-mensaje");
textarea.onclick = avisoMinusculas;
