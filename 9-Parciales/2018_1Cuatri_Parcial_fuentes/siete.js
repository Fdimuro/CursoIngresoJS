function mostrar()
{
    var notas;
    var sexo;
    var contadoralumnos = 0;
    var min;
    var max;
    var sexomin;
    var contadorvarones = 0;
    var promedionotas;
    var acumulador;

    while (contadoralumnos <5) {
        contadoralumnos ++;

        do {
            sexo = prompt("ingrese un sexo");
        } while(sexo != "f" && sexo != "m");


        do {
            notas = prompt("ingrese una nota valida");
            notas  = parseInt(notas)
        } while(notas < 0 || notas > 10 || isNaN(notas));


        acumulador += notas;

        if(contador = 1) {
            min = notas;
            sexomin = sexo;
        } else if (min < notas) {
            min = notas;
            sexomin = sexo;
        }

        if (sexo == "m" && notas >= 6) {
            contadorvarones ++;
        }

    }
     promedionotas = acumulador /contadoralumnos;

     document.write("El promedio de las notas totales = " + promedionotas + "<br >");
     document.write("la nota más baja = " + min + "sexo = " + sexomin + "<br >");
     document.write("La cantidad de varones que su nota haya sido mayor o igual a 6. " + contadorvarones + "<br >");
}
 
 
            
            
            
            
 

    



