
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var rectangulo;

    ancho = prompt("ingrese el ancho");
    largo = prompt("ingrese el largo");
    
    

    while(largo > 0 && ancho > 0) {
        ancho = parseInt(ancho);
        largo = parseInt(largo);
        perimetro = (largo + largo) + (ancho + ancho);
        
    while(isNaN(perimetro)) {
        alert("error")
        perimetro = parseInt(perimetro);
    }
    alert("el perimetro es " + perimetro);
    break;
} console.log(perimetro)
}

    
