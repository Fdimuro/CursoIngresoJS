/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    var numero;
    var operador;
    var SegundoNumero;

     numero = document.getElementById("PrimerNumero").value;
     operador = document.getElementById("Operador").value;
     SegundoNumero = document.getElementById("SegundoNumero").value;
     respuesta  = document.getElementById("Respuesta").value;

     numero = Math.floor(Math.random() * (11 - 1 )) + 1;

	

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
