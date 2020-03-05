function mostrar()
{

    /*Pedir los siguientes datos:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional");

a) El nombre del hombre con pasaje nacional más joven.

b) El sexo y pasaje del pasajero/a más viejo.

c) La cantidad de mujeres con pasaje urbano o nacional.

d) El promedio de edad entre las mujeres.

e) El promedio de edad entre los hombres con pasaje internacional.
*/


var nombre;
var edad;
var sexo;
var pasaje;
var respuesta = true;
var primeravezhombrenacional = true;
var edadminimahombrenacional;
var nombreminimohombrenacionalM
var primeravez = true;
var edadminima;
var sexominimo;
var contadormujerespasajeinternacional = 0;
var contadormujeres = 0;
var acumuladoredadmujeres;
var promediomujeres;
var promediohombres;
var pasajeminimo;
var contadorhombres = 0;

do {
    do {
    nombre = prompt("ingrese un nombre");
}  while(!(isNaN(nombre))) 

do { edad = prompt("ingrese una edad");               
    edad = parseInt(edad)
        
 }  while(isNaN(edad) || edad < 18);

 do { 
     sexo = prompt("ingrese el sexo");
    } while(sexo != "f" && sexo != "m")

do {
     pasaje = prompt("ingrese un pasaje");

} while(pasaje != "urbano" && pasaje != "internacional" && pasaje != "nacional");


if (sexo == "m" && pasaje == "nacional") {
    if (primeravezhombrenacional) {
        primeravezhombrenacional = false;
        edadminimahombrenacional = edad;
        nombreminimohombrenacional = nombre;
    } else if (edad < edadminimahombrenacional) {
        edadminimahombrenacional = edad;
        nombreminimohombrenacional = nombre;
    } 
} 

if (primeravez) {
    primeravez = false;
    edadminima = edad;
    sexominimo = sexo;
    pasajeminimo = pasaje;
} else if (edad < edadminima) {
    edadminima = edad;
    sexominimo = sexo;
    pasajeminimo = pasaje;
}

if (sexo == "f" && (pasaje == "urbano" || pasaje == "internacional")) {
    contadormujerespasajeinternacional ++;
}

if (sexo == "f") {
    acumuladoredadmujeres += edad;
    contadormujeres ++;
} 

if (sexo == "m" && pasaje == "internacional") {
   acumuladorhombrespasajeinternacional += edad;
    contadorhombres ++;
}
    

 respuesta = confirm("desea continuar");

} while(respuesta);

if (contadormujeres > 0) {
  promediomujeres =  acumuladoredadmujeres / contadormujeres 
} else {
    promediomujeres = 0;
}

if (contadorhombres > 0) {
    promediohombres = acumuladorhombrespasajeinternacional / contadorhombres
} else {
    promediohombres = 0;
}

document.write("El nombre del hombre con pasaje nacional más joven = " + nombreminimohombrenacional + "<br >");
document.write("El sexo y pasaje del pasajero/a más viejo. = " + sexominimo + pasajeminimo + "<br >");
document.write("La cantidad de mujeres con pasaje urbano o nacional. = " + contadormujerespasajeinternacional + "<br >");
document.write("El promedio de edad entre las mujeres. =  " + promediomujeres + "<br >");
document.write("El promedio de edad entre los hombres con pasaje internacional. = " + promediohombres + "<br >");






}//FIN DE LA FUNCIÓN
