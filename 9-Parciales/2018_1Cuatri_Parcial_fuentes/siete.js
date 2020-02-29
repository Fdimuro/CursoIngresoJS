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

    
    while(contador <5) {
        contador ++;
        notas = prompt("ingrese la nota");
        sexo = prompt("ingrese si es f o m ");

        while (notas < 0 || notas > 10 || isNaN(notas)) {
            notas = alert("error ingrese una nota valida"); 
            break;
        } if (sexo != "f" && sexo != "m") {
            sexo = alert("error ingrese un sexo valido")
            break;
        } else if (primeraVez) {
            primeraVez = false
            max = notas;
            notasmasbaja = notas;
        } else if (notas < min ) {
            notamasbaja = notas;
        } else if (sexo == "m" && notas <= 6) {
            contadorvarones ++;
        }
        acumulador += notas;
    }  
    alert("el promedio es" + contador/acumulador);
    alert("cantidad de varones que se sacaron 6 o mas " + contadorvarones );
    alert("la nota mas baja es" + notamasbaja);
 

    


}
