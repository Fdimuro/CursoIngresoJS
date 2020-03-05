function mostrar()
{
    var peso;
    var temperatura;
    var marca;
    var respuesta = true;
    var contadortemperaturaspares = 0;
    var mayorpeso = true;
    var pesomax;
    var marcamax;
    var contador0grados = 0;
    var acumuladorpeso = 0;
    var pesomin;
    var contadorpeso = 0;

    do {
        do {
            peso = prompt("ingresar el peso");
            peso = parseInt(peso);
        } while(peso < 1 || peso > 100 || isNaN(peso))

        do {
            temperatura = prompt("ingresar la temperatura");
            temperatura = parseInt(temperatura);

        } while(temperatura < -30 || temperatura > 30 || isNaN(temperatura));

        do {
            marca = prompt("ingrese una marca");

        } while (!(isNaN(marca)));


        if(temperatura % 2 == 0) {
            contadortemperaturaspares ++;
        }

        if(mayorpeso) {
            mayorpeso = false;
            pesomax = peso;
            pesomin = peso;
            marcamax = marca;
        } else if (pesomax > peso) {
            pesomax = peso;
            marcamax = marca;
        } else if (pesomin < peso ) {
            pesomin = peso;
        }

        if (temperatura < 0) {
            contador0grados ++;
        }

        acumuladorpeso += peso;
        peso = contadorpeso ++;

        respuesta = confirm("desea continuar");

    }while(respuesta)

    promediopeso = acumuladorpeso/contadorpeso;

    document.write("La cantidad de temperaturas pares = " + contadortemperaturaspares + "<br >");
    
    document.write("La cantidad de temperaturas pares = " + contadortemperaturaspares + "<br >")

}
