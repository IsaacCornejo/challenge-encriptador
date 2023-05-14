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
  let textoEncriptado = document.createTextNode(texto);
  nuevoParrafoEncriptado.appendChild(textoEncriptado);
  
  cajaEncriptador.appendChild(nuevoParrafoEncriptado);
  
  // AQUI ACABA EL CODIGO PARA AGREGAR EL TEXTO PERO SIN ENCRIPTARLO 


  document.getElementById("caja-mensaje").classList.add("color");
  
  // Deshabilitar el botón de encriptar
  document.querySelector(".boton-encriptar").disabled = true;

}


// AQUI SE LLAMAN LAS FUNCIONES QUE SE EJECUTAN CON EL BOTON "ENCRIPTAR"
limpiarCaja();
encriptarTexto();

}


function avisoMinusculas (){

  let texto = document.querySelector("textarea").value;
//SENTENCIA PARA EJECUTAR UNA SOLA VEZ EL ALERT CUANDO SE DA CLICK EN EL TEXTAREA
  if (!ejecutado && texto === ""){

      swal("Aviso", "¡Recuerda que debes de utilizar solo letras minúsculas y sin acentos!", "success").then(() => {
        textarea.focus(); // Enfocar nuevamente el textarea
      });
      
      ejecutado = true;
      
    }
}
  

// INICIALIZANDO LA VARIABLE DEL TRIGGER QUE ME AYUDA A EJECUTAR EL ALERT EN EL TEXTAREA
let ejecutado = false;


let botonEncriptador = document.querySelector(".boton-encriptar");
botonEncriptador.onclick = encriptar;

let textarea = document.querySelector(".textarea-mensaje");
textarea.onclick = avisoMinusculas;