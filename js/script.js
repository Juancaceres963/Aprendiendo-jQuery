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

// Otro metodo .hide() ocultya un elelemto de nuestra pagina 

//Selector 2#
$(document).ready(function(){
    "use strict";
    console.log("Hola desde jQuery")
});

