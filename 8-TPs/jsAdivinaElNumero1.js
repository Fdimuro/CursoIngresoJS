/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
    //alert(numeroSecreto );
    
  numeroSecreto = document.getElementById("numero").value;
  ContadorIntentos = document.getElementById("intentos").value;

  var min;
  var max;
  min = 1
  max = 101
  
  numeroSecreto = Math.floor(Math.random() * (max - min)) + min;
 

  if (numero < numero ) {
    alert(numero + "falta")
  } else {
    if (numero > numero ){
      alert(numero + "se paso")
    } else {
      alert(numero + "usted es un ganador")
  
    }
    
  }
  

  
function verificar()
