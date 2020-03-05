function mostrar()
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





{


    var edad;
    var sexo;
    var nombre;
    var edadminimahombrenacional;
    var primeravezhombrenacional = true;
    var edadminima;
    var pasajeminimo;
    var sexominimo;
    var contadormujeresurbanonacional = 0;
    var acumuladormujeres = 0;
    var contadormujeres = 0;
    var promediomujeres;
    var acumuladorhombresinternacional = 0;
    var contadorhombresinterancional = 0;
    var promediohombres;
    var primeravez = true;
do {
    do {
        nombre = prompt("ingrese un nombre");
    } while(!(isNaN(nombre)));
    do {
        edad = prompt("ingrese la edad");
        edad = parseInt(edad);

    } while(isNaN(edad) || edad < 18);
    
    do {
        sexo = prompt("ingrese sexo");
    } while (sexo != "f" && sexo != "m") ;

    do {
        pasaje = prompt("ingrese pasaje");
    } while (pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional")

    //calculos 
    if (sexo == "m" && pasaje == "nacional") {
        if(primeravezhombrenacional) {
            primeravezhombrenacional = false;
            edadminimahombrenacional = edad;
            nombreminimohombre = nombre;
        } else if (edad < edadminimahombrenacional) {
            edadminimahombrenacional = edad;
            nombreminimohombre = nombre;

        }


    }

    //punto b
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

      if (pasaje != "internacional" && sexo == "f") {
          contadormujeresurbanonacional ++;
      } 

      if (sexo == "f") {
          acumuladormujeres += edad;
          contadormujeres ++;
      }

      if (sexo == "m" && pasaje == "internacional") {
          acumuladorhombresinternacional += edad;
          contadorhombresinterancional ++;
      }

    respuesta = confirm("continuar")

} while (respuesta);

//promediomujeres 

if(contadormujeresurbanonacional > 0) {
    promediomujeres = acumuladormujeres / contadormujeres;
    } else {
        promediomujeres = 0;
    }

if(contadorhombresinterancional > 0) {
    promediohombres = acumuladorhombresinternacional / contadorhombresinterancional;
} else {
    contadorhombresinterancional = 0;
}




}//FIN DE LA FUNCIÓN