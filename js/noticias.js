
var noticias = obtenerNoticias();
/*la vble noticias es un array que guarda una lista con todas las noticias*/


/*con esta función resalto las noticias que contengan la palabra dada
como parámetro. El segundo parámetro=color me permite indicar el color con el
que quiero resaltar las noticias */
function resaltarNoticiasQueContengan(palabra, color){
  var contador = 0;
  while(contador < noticias.length){
    var noticiaActual = noticias[contador];
    if(contienePalabra(noticiaActual,palabra)) {
      cambiarColor(noticiaActual, color);
    }
    contador++;
  }
}

// Si la noticia incluye la palabra dada como parámetro, la oculta.
function ocultarNoticiasQueContengan(palabra){
  for(var contador = 0; contador<noticias.length; contador++) {
    var noticiaActual = noticias[contador];
    if (contienePalabra(noticiaActual,palabra)){
      ocultarNoticia(noticiaActual);
    }
  }
}

/*El parámetro es un nº. Sirve para indicar la cantidad de palabras que
debe contener la noticia*/
function recortarNoticias(cantidadPalabras){
  var contador = 0;
  while (contador < noticias.length) {
    var noticiaActual = noticias[contador];
    recortarTexto(noticiaActual, cantidadPalabras);
    contador++;
  }
}

resaltarNoticiasQueContengan("ARGENTINA",'rgb(41, 201, 201)');
resaltarNoticiasQueContengan("robots", 'rgb(13, 179, 74)');
ocultarNoticiasQueContengan("Google");
recortarNoticias(20);
