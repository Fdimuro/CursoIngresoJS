function mostrar()
{
  var letra;
  var numero;
  var respuesta = true;
  var contadorpares = 0;
  var contadorimpares = 0;
  var contadorceros = 0;
  var contadorpositivos = 0;
  var acumuladorpositivos = 0;
  var acumuladornegativos = 0;
  var primeravez = true;
  var max;
  var min;
  var letramax;
  var letramin;
  var promediopositivos;



  do {
      do { 
          letra = prompt("ingrese una letra");

      } while(!(isNaN(letra)));

      do {
          numero = prompt("ingrese un numero");
          numero = parseInt(numero);

      } while (numero > 100 || numero < -100 || isNaN(numero))

      if (numero % 2 == 0) {
          contadorpares ++; 
      } else {
          contadorimpares ++;
      }

      if (numero == 0) {
          contadorceros ++;
      } else if (numero < 0 ) {
          contadorpositivos ++;
          acumuladorpositivos += numero;
      } else {
          acumuladornegativos += numero;
      }

      if (primeravez) {
          primeravez = false;
          min = numero;
          max = numero;
          letramin = letra;
          letramax = letra;
    } else if (min < numero) {
        min = numero;
        letramin = letra;
    } else if (max > numero) {
        max = numero;
        letramax = letra;
    }
    respuesta = confirm("desea continuar");
  } while (respuesta)
    
 if (contadorpositivos < 0 ) {
  promediopositivos =  acumuladorpositivos/contadorpositivos;
 } else {
     promediopositivos = 0;
 }

 document.write("La cantidad de números pares = " + contadorpares + "<br >");
 document.write("La cantidad de números impares. = " + contadorimpares + "<br >");
 document.write(" La cantidad de ceros.= " + contadorceros + "<br >");
 document.write("La suma de todos los números negativos. = " + acumuladornegativos + "<br >");
 document.write("El número y la letra del máximo = " + max + "letra" + letramax + "el numero del minimo" + min + "letra" + letramin+ "<br >");


}
