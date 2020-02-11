/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largoterreno;
var anchoterreno;
var cantidadAlambre;

function Rectangulo () 
{
    var largoterreno = document.getElementById("Largo").value;
    var anchoterreno = document.getElementById("Ancho").value;
    
    Largo = parseInt(Largo);
    Ancho = parseInt(Ancho);

    //console.log(Largo, Ancho)
    
    var cantidadAlambre = (Largo * 2 + Ancho * 2) * 3;
    console.log(cantidadAlambre);

}
function Circulo () 
{
    var radioterreno = document.getElementById("Radio").value;
    Radio = parseInt(Radio);
    var cantidadAlambre = 2 * Math.PI * Radio + 3;
	console.log(cantidadAlambre)
}
function Materiales () 
{
	
}