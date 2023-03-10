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
$(document).ready(function () {
  "use strict";

  $(".servicios nav a").on("click", mostrarEnlaces);

  function mostrarEnlaces(){
    $(".servicios nav a").removeClass("activo");
    $(this).addClass("activo");
    var enlace = $(this).attr("href");
    $(".nuestros-servicios div").fadeOut();
    $(enlace).fadeIn();

    return false;
  }
  //=========== Metodos =================

  // //Remove
  // // Este metodo borra un elemento completamente del DOM
  // $("main article:first").remove();

  // //El metodo .hide() oculta un elelemto de nuestra pagina, en el DOM lo que ocurre es que optiene
  // // un display none;
  // $("main article:first").hide();

  // El metodo show() muestra un elemeto que este escondido, es lo contrario a hide()
  // $("main article:first").show();

  // El metodo toggle() . Este oculta y muestra un elelemto, es la combinacion de hide y de show
  // $("main article:first").toggle();

  //=========== Clorar un elemento =================

  // // Clone() Es el metodo que se utiliza para clonar un elemento
  // //Este metodo solo permite clonar una sola copia del elemento
  // var copia = $("main article:last").clone();
  // // append() Es un metodo que incorporara una copia al final de un elemento
  // $("main").append(copia);

  // // prepend() es un metodo que incorporara una copia al principio de un elemento
  // $("main").prepend(copia);

  // Existen dos metodos qu ehacen exactamente lo mismo solo que el orden en que se selecciona es al revez
  //appendTo() Ejemplo: $(copia).appendTo("main"); === $("main").append(copia);
  //prependTo() Ejemplo: $(copia).prependTo("main"); === $("main").prepend(copia);

  //Agregando eventos

  // Para agregar eventos con jQuery se utiliza el metodo on() A este hay que pasarle dos parametros en sus parentesis
  //1ro es el tipo de evento que sera, en este caso "click", y el 2do la funcion de lo que realizara
  // $("div.logo img").on("click", function(){
  //     console.log("Has hecho click en el logo");
  // })
  // $("#menu").on("click", function(){
  //     $("#navegacion").toggle();
  // })

  // // mouseenter() y mouseleave() .Estos eventos son parecidos al hover de CSS, cuando estas sobre un elemento
  // //mouseenter entra en accion, y cuando sales de un elemento mouseleave entra en accion.
  // $("div.logo img").on("mouseenter", function(){
  //     console.log("Estas sobre el logo");
  // })
  // $("div.logo img").on("mouseleave", function(){
  //     console.log("Saliste del logo");
  // })

  // Agregando clases con jQuery
  // Existe un metodo llamada addClass() este recibe como parametro el nombre de la clase de CSS que se desea agregar
  //$("div.logo img").addClass("activo"); Si se coloca asi simpletemen agregarias una clase

  // removeClass() se encarga de retirar una clase de CSS
  // $("div.logo img").removeClass("activo"); Este retiraria una clase

  // $("#navegacion nav ul li a").on("click", function(e){
  //     $("#navegacion nav ul li a").removeClass("activo"); // Con esto nos aseguramos que remueva la clase activo despuesd e que se selecciono otro enlace.
  //     e.preventDefault(); // preventDefault() Es un metodo que nos ayuda a prevenir las caracteristicas predeterminadas que tenga cada elemento.
  //     $(this).addClass("activo");
  // })

  // Selectores mas complejos para eventos estructurados
  // Utilizando esta sintaxsis tipo objeto sobre el on, se puede estructurar varios eventos diferentes al mismo tiempo sobre le mismo selector
  // $("main").on({
  //     click: function(){
  //         $(this).addClass("activo")
  //     }, mouseenter: function(){
  //         $(this).addClass("fondorojo");
  //     }, mouseleave: function(){
  //         $(this).removeClass("activo fondorojo")
  //     }
  // })

  // ============ Navegando atravez del DOM ==========
  // .parent() Nos llevara al padre de un elemento
  // .childrem() nos llevara a el/los hijos de un elemento
  // .next() nos llevara al siguiente elemento que venga en su misma cadena
  // Dato curioso es que se puede usar estos en varias veces consecutivas en un mismo selector
  // $("article:first").next().next(); nos estara mostrando en la ocnsola el 3er articulo de nuestro sitio web.

  // ========= Modificando texto y HTML ==========
  // Podemos modificar tanto el HTML en este caso cambiando un he por un h1 Y ademas su contenido
  // $("main article:first h2").html("<h1>Hola mundo</h1>");
  // Como modificar algun texto de un elemento como el primer parrafo de este primer articulo
  // $("main article:first p:first").text("Mi nombre es juan caceres")

  // Para modificar atributos existe un metodo de jQuery que se conoce como attr()
  // este metodo recibe dos paremetros primero se??alando el atributo que se quiere seleccionar
  // y el segundo seguido de una coma el nuevo valor que tendra
  // Si solo se coloca el primer atributo, el resultado en consola mostrara el valor que tiene
  //  $("#navegacion nav ul li a:first").attr("href", "https://juancaceres963.github.io/Portafolio2023/");
  //  // Se puede a??adir atributos si un elemento no tiene de esta forma, solo a??adiendo el atributo nuevo a la primera prosicion y luego dandole el valor
  //  $("#navegacion nav ul li a:first").attr("target", "_blank")

  //  ========= Cambiando estilos de CSS con jQuery ========
  // Es muy senciilo solo hay que seleccionar el elemento que queremos modificar
  // Luego agregarle el metodo .css()
  // Y en tre los parentesis colocar llaves {} como si fuera la sintaxis de un objeto
  // Ya dentro del obejeto, entre comillas se coloca la propiedad que se quiera modificar, dos puntos y luego entre comillas el nuevo valor que se dara
  // Si se quiere agregar cambios a mas de una propiedad, solo se debe precedir de una coma entre propiedades
//   $("main article h2").css({ color: "#db008d" });

//   $(".sidebar").css({"background-color" : "#e1e1e1",
//                     "text-transform": "uppercase",
//                     "padding": "10px"})

// =========== Animaciones ==============
// Con el metodo animate() podemos dar animaciones cualquier elemento 
// En este caso estamos aplicando un animacion luego de un metodo on()
// En la funcion que pasamos al .on() se realiza la animacion colocando el metodo .animate()
// Este puede recibir dos parametros el 1ro es dentro de llaves, la propiedad y el valor que se van a actualizar
// El segundo es un valor opcional que se coloca despues de las llaves y separado por una coma
// representara la cantidad de tiempo que durara la animacion, donde 1000 === a 1s;
    // $("main article img").on("mouseenter", aumentarImagen);
    // $("main article img").on("mouseleave", disminuirImagen);

    // function aumentarImagen(){
    //     $(this).animate({"width": "100%"});
    // }

    // function disminuirImagen(){
    //     $(this).animate({"width": "350px"});
    // }

    //Otros efectos tipo de animacion pueden ser con los metodos slideUp, slideDown
    // Simplemente se selecciona el elemento que se desea animar, se utiliza el metodo que se quiera y 
    // se le pasa como parametro el tiempo que durara la animacion

    // $(".logo img").click(function(){
    //     $("main").slideUp(1000);
    // })
    // $(".sidebar").click(function(){
    //     $("main").slideDown(1000);
    // })

    // ========= Para recorrer un Array y un Objeto ==========
    // Teniendo nuestra variable que sea un array
    // utilizamos el metodo .each() para recorrer un array 
    // este va a resivir el array que se recorrera, y la funcion que dictara lo que realizara
    // en este caso es un afuncion anonima que cuenta con dos parametros i y v
    // i representa el numero del index
    // v representa el valor de cada index
    // Luego con la combinacion de otros metodos se va creando lo que se quiere que realice cada funccion 

    // var viajes = ["Paris", "Venezuela", "Argentina"];
    // $.each(viajes, function(i, v){
    //     console.log(viajes)
    //     if (i == 0){
    //         $(".sidebar").append("<h2>Posibles viajes: </h2>")
    //     } 
    //         $(".sidebar").append("<li>" + v + "</li>")
        
    // })

    // var objetoViaje = {
    //     vuelo1: "Madrid",
    //     vuelo2: "Londres",
    //     vuelo3: "Nederland"
    // }

    // $.each(objetoViaje, function(i , v){
    //     $(".sidebar").append("<li>" + i + "-" + v + "</li>")
    // })
});
