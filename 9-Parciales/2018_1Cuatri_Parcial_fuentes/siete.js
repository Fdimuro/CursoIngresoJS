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
          //punto minimo;

          if (contador == 1) {
              min = notas;
              minimosexo = sexo;
          } else if (nota < min) {
              min = notas;

          }  if (sexo == "m" && notas <= 6) {
            contadorvarones ++;
        }
        
        }

        promedio = acumulador/contador;

            alert("el promedio es" + promedio);
             alert("minimo " + minimonota + "sexo minimo" + contadorvarones );
              alert("la nota mas baja es" + notamasbaja);

              
              }
 
            
            
            
            
 

    



