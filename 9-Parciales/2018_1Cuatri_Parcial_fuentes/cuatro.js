function mostrar()
{
    var numerouno;
    var numerodos;
    var resultado;
    var numero;
    
    numerouno = prompt("ingrese el numero 1");
    numerodos = prompt("ingrese el numero 2")
    
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);
    resultado = numerouno + numerodos;

    if (numerouno == numerodos) {
        alert(numerouno + " ; " +  numerodos)
    } else if (numerouno > numerodos) {
        alert(numerouno - numerodos)
    } else if (resultado > 10 ) {
        alert(" la suma es " + resultado +  "y supero el 10")
    } else if (numerouno < numerodos) {
        alert(resultado);
    }

}
