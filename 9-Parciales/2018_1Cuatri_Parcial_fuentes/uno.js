
function mostrar()
{
    var ancho;
    var largo;
    var numero;
    var resultado;

    ancho = parseInt(ancho);
    largo = parseInt(largo);
    ancho = prompt("ingrese el ancho");
    largo = prompt("ingrese el largo");
    resultado = (largo * 2) + (ancho * 2)

    if (largo > 0 && ancho > 0 ) {
       alert("el perimetro es" + resultado)
    } else {
        alert("ingrese numeros positivos");
    }


}
    

    
