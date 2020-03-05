function mostrar()
{
    var notas;
    var sexo;
    var contador = 0;
    var promedio;
    var acumulador = 0;
    var contadorvarones = 0;
    var primeraVez = false;
    var max;
    var min;
    var cantidad =  0;
    var notamasbaja;
    var minimosexo;

    
    while(contador <5) {
    
        contador ++;

        do {
         notas = prompt("ingrese la nota");
         notas = parseInt(notas);

        } while (notas < 0 || notas > 10 || isNaN(notas)) 



         do {
             sexo = prompt("ingrese si es f o m ");
          } while (sexo != "f" && sexo != "m") 
            
            //punto a acumulador;
          acumulador += notas;
          console.log(acumulador)
          console.log(notas)
          //punto minimo;

          if (contador == 1) {
              min = notas;
              minimosexo = sexo;
          } else if (notas < min) {
              min = notas;

          }  if (sexo == "m" && notas <= 6) {
            contadorvarones ++;
        }
        
        

        promedio = acumulador/contador;

        document.write("El promedio de las notas totales = " + promedio + "<br >");
        document.write("la nota más baja = " + min + "sexo = " + minimosexo + "<br >");
        document.write("La cantidad de varones que su nota haya sido mayor o igual a 6. " + contadorvarones + "<br >");

              
              }



}//FIN DE LA FUNCIÓN