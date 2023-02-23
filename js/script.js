// Signo de dolar "$" es el selector universal de jQuery, es lo mismo a decir jQuery. $ = jQuery
// Ready es un metodo que significa cuando este listo algo, ejecutara algo 
// Estos son los dos tipos de selectores donde se debe inyectar el codigo JS

// Selector 1#
// $(function(){
//   "use strict"
// });

// El selector de jQuery es como el selector de CSS, si es una clase se hace con punto ".", si es un id se hace con "#"
// si es un elemento solo el nombre como header, body, etc..

//$("main article:first") :first es un selector para seleccionar el primer article en este caso de ejemplo. Sleccionaria el primer hijo
//$("main article:last") :last es un selector para seleccionar el ultimo article en este caso de ejemplo. Sleccionaria el ultimo hijo

// Se pueden combinar los selecctores, en el caso que se quiera el primer parrafo del primer articulo seria
// $("main article:first p:first")

//jquery permite tener ese traversi para moverse atravez de todo el documento

// Metodos
// jQuery tiene muchos metodos uno de los metodos es find, que te ayuda a buscar algo dentro de algo
//$(".navegacion").find("a") === $(".navegacion a") 

//Selector 2#
$(document).ready(function(){
    "use strict";
    
    //=========== Metodos =================

    // //Remove
    // // Este metodo borra un elemento completamente del DOM
    // $("main article:first").remove();

    // //El metodo .hide() oculta un elelemto de nuestra pagina, en el DOM lo que ocurre es que optiene 
    // // un display none;
    // $("main article:first").hide();

    //=========== Clorar un elemento =================

    // Clone() Es el metodo que se utiliza para clonar un elemento
    //Este metodo solo permite clonar una sola copia del elemento
    var copia = $("main article:last").clone();
    // append() Es un metodo que incorporara una copia al final de un elemento 
    $("main").append(copia);

    // prepend() es un metodo que incorporara una copia al principio de un elemento
    $("main").prepend(copia);

    // Existen dos metodos qu ehacen exactamente lo mismo solo que el orden en que se selecciona es al revez
    //appendTo() Ejemplo: $(copia).appendTo("main"); === $("main").append(copia);
     //prependTo() Ejemplo: $(copia).prependTo("main"); === $("main").prepend(copia);
});

