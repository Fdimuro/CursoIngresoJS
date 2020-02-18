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
 var max;
 var min;
 var numeroUsuario;
 contadorIntentos = 0

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
    //alert(numeroSecreto );
    
  numeroSecreto = document.getElementById("numero").value;
  document.getElementById("intentos").value = ContadorIntentos 

  var min;
  var max;
  min = 1
  max = 101
  
  numeroSecreto = Math.floor(Math.random() * (max - min)) + min;
  console.log(numeroSecreto)
  
function verificar()
{
  ContadorIntentos = document.getElementById("intentos").value;
  contadorIntentos = ContadorIntentos + 1;
  numeroUsuario = document.getElementById("numero").value;

  if (numeroSecreto == numeroUsuario) {
    alert("usted es un ganador!!! y en solo" + contadorIntentos + " x intentos");
  } else {
    if (numeroUsuario < numeroSecreto) {
      alert("se paso")
    } else {
      alert("falta");
    }
  }
 }

