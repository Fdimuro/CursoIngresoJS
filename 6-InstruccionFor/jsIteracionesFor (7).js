function mostrar()
{
    var edad;
    var sexo;
    var pasaje;
    var respuesta = true;
    var edadminima;
    var sexominimo;
    var primeravez = true;
    var sexomaximo;
    var edadmaximo;
    var contadormujerespasaje = 0;
    var contadoredad = 0;
    var sumaedad = 0;
    var acumuladormujeres = 0;
    var contadoredadmujeres= 0;
    var contadoredadhombres = 0;
    var acumuladorhombres = 0;
    var promedioedadmujeres;
    var promedioehombrespasajeinternacional;
    var pasajemaximo;

    while(respuesta) {
        nombre = prompt("ingrese su nombre");
        sexo = prompt("ingrese el sexo");
        edad = prompt("ingrese la edad");
        edad = parseInt(edad);
        pasaje = prompt("ingrese el pasaje");
    while(isNaN(edad) || edad < 18) {
        edad = prompt("ingrese una edad valida")
        edad = parseInt(edad);
    } 
    while (sexo != "f" && sexo != "m") {
        sexo = prompt("ingrese un sexo valido");
    } 
    while (pasaje != "urbano" || pasaje != "nacional" || pasaje != "internacional"){
        pasaje = prompt("ingrese un pasaje valido");
    }  

     if(primeravez) {
         primeravez = false;
         edadminima = edad;
         edadmaximo = edad;
         sexomaximo = sexo;
         sexominimo = sexo;
         pasajemaximo = pasaje;
     } else if (edad < edadminima) {
          edadminima = edad;
         sexominimo = sexo;
         } else {
             edadmaximo = edad;
             sexomaximo = sexo;
             pasajemaximo = pasaje;
         }

         if (pasaje != "internacional" && sexo == "f") {
             contadormujerespasaje ++;
         }  else {
             contadoredadhombres ++;
            acumuladorhombres += edad;
         }
          
          if (sexo == "f") {
              contadoredadmujeres ++;
              acumuladormujeres += edad;
               } else{
                   contador
               }

               respuesta = confirm("desea continuar");
               
     }   

     promedioedadmujeres = acumuladormujeres / contadoredadmujeres;
     promedioehombrespasajeinternacional = acumuladorhombres / contadoredadhombres;

     document.write("Pasajero mas joven " + nombre + " con " + edad + "años." + "<br >" );
     document.write("Pasajero/a mas viejo " + sexomaximo + " pasaje :" + pasajemaximo + "<br >" );
     document.write("")




}//FIN DE LA FUNCIÓN