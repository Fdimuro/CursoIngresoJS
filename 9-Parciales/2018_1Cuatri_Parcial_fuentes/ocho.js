function mostrar()
{
    var letra;
    var numero;
    var respuesta = true;
    var letra;
    var contadorpares =0;
    var contadorimpares  = 0;
    var contadorceros = 0;
    var bandera = true;
   var  contadorpositivos = 0;
   var sumapositivos = 0;
   var sumanegativos = 0;
   var maximo;
   var minimo;
   var promediopositivos;

    while(respuesta) {


        letra = prompt("ingrese una letra");
        numero = prompt("ingrese un numero");
        numero = parseInt(numero);

        while(numero < -100 || numero > 100 || isNaN(numero)) {
            numero = prompt("error ingrese un numero valido");
            numero = parseInt(numero);

        }  

        if (numero / 2 == 0) {
            contadorpares ++;
        
        } else if (numero / 2 != 0) {
            contadorimpares ++;
        } 
        
         if (numero == 0 ) {
            contadorceros ++;
        } else if (numero < 0 ) {
            contadorpositivos ++;
            sumapositivos += numero;
        } else {
            sumanegativos += numero;
        }

        if (bandera) {
            bandera = false;
            maximo = numero;
            minimo = numero;
        } else if (numero < maximo) {
            maximo = numero;
        } 
        respuesta = confirm("desea continuar");
     }

     promediopositivos = contadorpositivos / sumapositivos ;
    
     document.write("contador de pares" + contadorpares + "<br >" );
     document.write("contador de impares" + contadorimpares + "<br >");
     document.write("contador de ceros" + contadorceros + "<br >");
     document.write("promedio de positivos " + promediopositivos + "<br >");
     document.write("suma de negativos " + sumanegativos + "<br >");
    


}
