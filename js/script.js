function onload() {
    document.getElementById("modal").style.display = "none"; 
    window.scrollTo( 0, 0 );
}


function openImage(figure) {
    "use strict";
    var body = document.getElementsByTagName("body")[0];

    //Se busca la ruta de la imagen
    var ruta_imagen = figure.firstElementChild.getAttribute("src");

    //Se busca la imagen de la ventana modal y se le asigna el valor de la ruta en su atributo src
    var imagen = document.getElementById("modal").firstElementChild.firstElementChild;
    imagen.setAttribute("src", ruta_imagen);

    //Se extrae el texto del figcaption del figure pulsado y se añade en el de la ventana modal
    var pie = document.getElementById("modal").firstElementChild.lastElementChild;
    pie.innerHTML = figure.lastElementChild.innerHTML;

    //Se muestra la ventana modal
    document.getElementById("modal").style.display = "flex";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

/*** Oculta la ventana modal
 */
function cerrarVentana() {
    var body = document.getElementsByTagName("body")[0];
    "use strict";
    document.getElementById("modal").style.display = "none";
    body.style.position = "inherit";
	body.style.height = "auto";
	body.style.overflow = "visible";
};


 