function obtenerNoticias(){
  return document.querySelectorAll(".highlighted");

}

function ocultarNoticia(noticia){
  noticia.style.display = 'none';
}

function mostrarNoticia(noticia){
  noticia.style.display = 'block';
}


/*Agrego a la función dada el método toLowerCase que lo que hace es
devolver el valor en minúsculas de la cadena que realiza la llamada. Con esto no es necesario
colocar el parámetro en mayúsculas logrando así abarcar a todas las noticias que contengan la palabra.*/
//toLowerCase lo obtuve de la página web "MDN web docs": https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toLowerCase
function contienePalabra(noticia, palabra) {
  texto = noticia.innerText;
  if (texto.toLowerCase() .indexOf(palabra.toString() .toLowerCase()) >= 0){
    return true;
  }

}

function recortarTexto(noticia, cantidadPalabras){
  noticia.querySelector("p").innerText = noticia.querySelector("p").innerText.split(' ').slice(0, cantidadPalabras).join(' ');
}


function cambiarColor(elemento, color){
  elemento.style.backgroundColor = color;
}
