function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var producto;
    var respuesta = true;
   var contadorpeso = 0;
    var contadortemperaturas = 0;
    var productopesado = true;
    var contadorpeso = 0;
    var sumapeso = 0;
    var persomaximo;
    var pesominimo;

    while(respuesta) {
        marca = prompt("ingresar marca del producto");
        peso = prompt("ingresar el peso del producto");
       temperatura = prompt("ingresar la temperaturadel producto");
        temperatura = parseInt(temperatura);
        peso = parseInt(peso);

        while(isNaN(peso) || isNaN(temperatura)) {
            peso = parseInt(peso);
            temperatura = parseInt(peso);
            peso = prompt("ingrese un numero valido");
            temperatura = prompt("ingrese una temperatura valida");
        } 
        if (temperatura / 2 == 0 ) {
            contadortemperaturas ++;
        } 
        if (peso >1 && peso <100) {
            contadorpeso ++;
            sumapeso += peso;
        } else  {
            peso = prompt("ingrese un peso valido");
        } 
        if (productopesado) {
            productopesado = false;
            pesomaximo = peso;
            pesominimo = peso;
        } else if (peso < pesomaximo) {
            pesosomaximo = peso;
        } 


}
