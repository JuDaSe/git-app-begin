window.onload = function() // Esta función hace que cargue primero la pagina, para despues cargar el Script
{
  // El uso de arrays es para probar si funcionaba de la misma forma, obviamente esto no se deberia de hacer, porque entreveraria mucho a la persona que intente leer el codigo.
  var GuardadoObj = new Array(2); // Guardamos los datos en un Array, estos seran llamados despues, dependiendo de su posicion en el index tendra su función.
   GuardadoObj[0] = document.getElementsByTagName("a"); // Este obtendra todos los Enlaces mediante 'getElementsByTagName('tagName')'
   GuardadoObj[1] = GuardadoObj[0].length; // Esta posicion guarda GuardadoObj[0] + el maximo de enlaces
   GuardadoObj[2] = document.getElementById('info'); // Obtiene el Elemento por el ID 'Info'
  //Muestra la cantidad de enlaces en el Log
  console.log('Total de enlaces: ' + GuardadoObj[1]); // Esto es un ejemplo de que se puede tambien colocar para mostrar otros tipos de datos
  let mensajeP = "Total de enlaces en Pagina: " + GuardadoObj[1] + "<br>";
  GuardadoObj[2].innerHTML = GuardadoObj[2].innerHTML + mensajeP;

  //Muestra direccion del penultimo enlace
  //agregado con appendChild para probar
  let mensajeP2 = document.createTextNode(`El penultimo enlace es: ${GuardadoObj[0][GuardadoObj[0].length - 2]} `);
  GuardadoObj[2].appendChild(mensajeP2);

  let enlacesT = 0;
  for(var i = 0; i < GuardadoObj[0].length; i++)
  {
     if(GuardadoObj[0][i].href == "http://prueba/")
     {
       enlacesT++;
     }
  }
  GuardadoObj[2].innerHTML = GuardadoObj[2].innerHTML + "<br>" + enlacesT + " enlaces apuntan a : http://prueba"

  // Aqui obtenemos la cantidad de enlaces en el tercer parrafo
  let parrafoF = document.getElementsByTagName('p'); // ParrafoF llamara a los tres <p> para despues solo llamar el tercer parrafo
  let enlacesP3 = parrafoF[3].getElementsByTagName('a'); // Acá solo se llama el tercer parrafo con la variable 'EnlacesP3'
  GuardadoObj[2].innerHTML = GuardadoObj[2].innerHTML + "<br>" + "Total de enlaces del tercer parrafo: " + enlacesP3.length;
}

/*
 By Juan Segundo
*/
