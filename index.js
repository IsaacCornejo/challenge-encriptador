function avisoMinusculas() {
  let texto = document.querySelector("textarea").value;
  //SENTENCIA PARA EJECUTAR UNA SOLA VEZ EL ALERT CUANDO SE DA CLICK EN EL TEXTAREA
  if (!ejecutado && texto === "") {
    swal(
      "Aviso",
      "¡Recuerda que debes de utilizar solo letras minúsculas y sin acentos!",
      "warning"
    ).then(() => {
      textarea.focus(); // Enfocar nuevamente el textarea
    });

    ejecutado = true;
  }
}

function limpiarCaja() {
  // ESTE CODIGO OCULTA LA IMAGEN Y EL TEXTO DE LA CAJA DE ENCRIPTACION
  document.getElementById("img-muñeco").classList.add("none");
  document.getElementById("h3-caja").classList.add("none");
  document.getElementById("p-caja").classList.add("none");
}

function avisoCajaVacia() {
  let texto = document.querySelector("textarea");
  let primerBoton = document.querySelector(
    "#caja-mensaje button:first-of-type"
  );

  if (texto.value.trim() === "") {
    swal("¡No has escrito aun nada!", " ", "warning").then(() => {
      textarea.focus(); // Enfocar nuevamente el textarea

      document.getElementById("img-muñeco").classList.add("display");
      document.getElementById("h3-caja").classList.add("display");
      document.getElementById("p-caja").classList.add("display");
    });
    primerBoton.remove();
  } else if (texto.value.trim().length > 0) {
    document.getElementById("img-muñeco").classList.remove("display");
    document.getElementById("h3-caja").classList.remove("display");
    document.getElementById("p-caja").classList.remove("display");
  }
}

function encriptar() {
  limpiarCaja();
  // ESTE CODIGO OBTIENE EL TEXTO DEL TEXTAREA
  let texto = document.querySelector("textarea").value;
  texto = texto.toLocaleLowerCase();
  //console.log (texto);

  function encriptarTexto() {
    // ESTE CODIGO SOLO ES PARA AGREGAR EL TEXTO PERO SIN ENCRIPTARLO

    let cajaEncriptador = document.getElementById("caja-mensaje");

    //LOGICA DE ENCRIPTADO

    let letrasDeEncriptacion = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };

    let textoEncriptacion = [];

    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      let letraReemplazada = letrasDeEncriptacion[letra] || letra; // Si la letra no tiene reemplazo, se deja tal cual
      textoEncriptacion.push(letraReemplazada);
      // console.log(nuevoTexto);
    }

    // console.log(textoEncriptacion.join(''));

    //TERMINO LOGICA DE ENCRIPTADO

    let parrafoEncriptado = (document.getElementById(
      "parrafo-encriptado"
    ).innerHTML = textoEncriptacion.join(""));

    // AQUI ACABA EL CODIGO PARA AGREGAR EL TEXTO PERO SIN ENCRIPTARLO

    document.getElementById("caja-mensaje").classList.add("color");

    // Deshabilitar el botón de encriptar
    // document.querySelector(".boton-encriptar").disabled = true;

    function aparecerBotonCopiar() {
      let cajaEncriptador = document.getElementById("caja-mensaje");
      let primerBoton = document.querySelector(
        "#caja-mensaje button:first-of-type"
      );
      let botonCopiar = document.createElement("button");

      cajaEncriptador.appendChild(botonCopiar);
      botonCopiar.innerHTML = "Copiar";
      botonCopiar.setAttribute("class", "boton-copiar");

      botonCopiar.addEventListener("click", function () {
        navigator.clipboard
          .writeText(textoEncriptacion.join(""))
          .then(() => {
            swal("El texto ha sido copiado al portapapeles", " ", "success");
          })
          .catch((err) => {
            swal("Error al copiar el texto: ", err);
          });
      });

      if (primerBoton) {
        primerBoton.remove();
      }
    }

    aparecerBotonCopiar();
  }

  // AQUI SE LLAMAN LAS FUNCIONES QUE SE EJECUTAN CON EL BOTON "ENCRIPTAR"
  limpiarCaja();
  encriptarTexto();
  avisoCajaVacia();
}

function desencriptar() {
  limpiarCaja();

  document.getElementById("caja-mensaje").classList.add("color");

  function desencriptarTexto() {
    // ESTE CODIGO OBTIENE EL TEXTO DEL TEXTAREA
    let textoEncriptado = document.querySelector("textarea").value;
    textoEncriptado = textoEncriptado.toLocaleLowerCase();
    // console.log (textoEncriptado);

    let textoModificado = textoEncriptado
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    // console.log(textoModificado);

    let cajaEncriptador = document.getElementById("caja-mensaje");

    let nuevoParrafoDesencriptado = document.createElement("p");
    nuevoParrafoDesencriptado.setAttribute("id", "parrafo-desencriptado");

    let ParrafoDesencriptado = (document.getElementById(
      "parrafo-encriptado"
    ).innerHTML = textoModificado);

    function aparecerBotonCopiar() {
      let cajaEncriptador = document.getElementById("caja-mensaje");
      let primerBoton = document.querySelector(
        "#caja-mensaje button:first-of-type"
      );
      let botonCopiar = document.createElement("button");

      cajaEncriptador.appendChild(botonCopiar);
      botonCopiar.innerHTML = "Copiar";
      botonCopiar.setAttribute("class", "boton-copiar");

      botonCopiar.addEventListener("click", function () {
        navigator.clipboard
          .writeText(textoModificado)
          .then(() => {
            swal("El texto ha sido copiado al portapapeles", " ", "success");
          })
          .catch((err) => {
            swal("Error al copiar el texto: ", err);
          });
      });

      if (primerBoton) {
        primerBoton.remove();
      }
    }
    aparecerBotonCopiar();
  }
  desencriptarTexto();

  // document.querySelector(".boton-desencriptar").disabled = true;
}

// INICIALIZANDO LA VARIABLE DEL TRIGGER QUE ME AYUDA A EJECUTAR EL ALERT EN EL TEXTAREA
let ejecutado = false;

let botonEncriptador = document.querySelector(".boton-encriptar");
botonEncriptador.onclick = encriptar;

let botonDesencriptador = document.querySelector(".boton-desencriptar");
botonDesencriptador.onclick = desencriptar;

let textarea = document.querySelector(".textarea-mensaje");
textarea.onclick = avisoMinusculas;
