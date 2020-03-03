function mostrar()
{
    var letra;
    var numero;
    var respuesta = true;
    var letra;
    var contadorpares = 0;
    var contadorimpares  = 0;
    var contadorceros = 0;
    var bandera = true;
   var  contadorpositivos = 0;
   var acumuladorposiivos = 0;
   var acumuladornegativos = 0;
   var maximo;
   var minimo;
   var promediopositivos;
   var letraminima;
   var letramaxima;

    while(respuesta) {


        letra = prompt("ingrese una letra");
        numero = prompt("ingrese un numero");
        numero = parseInt(numero);

        while(numero < -100 || numero > 100 || isNaN(numero)) {
            numero = prompt("error ingrese un numero valido");
            numero = parseInt(numero);

            while(!(isNaN(letra))) {
                letra = prompt("ingrese una letra valido");
                

            }

        }  

        if (numero % 2 == 0) {
            contadorpares ++;
        
        } else if (numero % 2 != 0) {
            contadorimpares ++;
        } 
        
         if (numero == 0 ) {
            contadorceros ++;
        } else if (numero < 0 ) {
            contadorpositivos ++;
            acumuladorposiivos += numero;
        } else {
            acumuladornegativos += numero;
        }

        if (bandera) {
            //false asi no ingresa mas
            bandera = false;
            maximo = numero;
            minimo = numero;
            letramaxima = letra;
            letraminima = letra;
        } else if (numero > maximo) {
            maximo = numero;
            letramaxima = letra;
        } 
        respuesta = confirm("desea continuar");
     }
     
     if (contadorpositivos == 0) {
         promediopositivos = 0
     } else {
         promediopositivos = acumuladorposiivos / contadorpositivos;
     }
    
    
     document.write("contador de pares" + contadorpares + "<br >" );
     document.write("contador de impares" + contadorimpares + "<br >");
     document.write("contador de ceros" + contadorceros + "<br >");
     document.write("promedio de positivos " + promediopositivos + "<br >");
     document.write("suma de negativos " + acumuladorposiivos + "<br >");
     document.write("numero maximo " + maximo + "letramaxima" + letramaxima + "<br >");
    


}
