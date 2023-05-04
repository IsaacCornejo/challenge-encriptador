function encriptacion (){
  
  let texto = document.querySelector("textarea").value;
  texto = texto.toLocaleLowerCase();
  let cuadroTextp = document.q
  console.log (texto);
  
  
 function limpiarCaja () {

  document.getElementById("img-muñeco").classList.add("none");
  document.getElementById("h3-caja").classList.add("none");
  document.getElementById("p-caja").classList.add("none");
  
}

function encriptarTexto (){
  
  let cajaEncriptador = document.getElementById("caja-mensaje");
  
  let p = document.createElement("p");
  let textoEncriptado = document.createTextNode(texto);
  p.appendChild(textoEncriptado);
  
  cajaEncriptador.appendChild(p);
  
  
  document.getElementById("caja-mensaje").classList.add("color");

 }
  
 limpiarCaja();
 encriptarTexto();

}

let botonEncriptador = document.querySelector(".boton-encriptar");
botonEncriptador.onclick = encriptacion;
