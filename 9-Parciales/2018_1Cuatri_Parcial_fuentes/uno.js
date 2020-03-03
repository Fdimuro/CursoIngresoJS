
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var rectangulo;

    ancho = prompt("ingrese el ancho");
    largo = prompt("ingrese el largo");
 
  
    if (largo > 0 && ancho > 0 ) {
        ancho = parseInt(ancho);
        largo = parseInt(largo);
        perimetro = (largo + largo) + (ancho + ancho);
        alert("el perimetro es " + perimetro)
        } else if (isNaN(ancho)) {
        ancho = prompt("ingrese un ancho valido"); 
        ancho = parseInt(ancho)
        } else if (isNaN(largo)) {
              largo = prompt("ingrese un largo valido");
             largo = parseInt(largo);

        }
        
        }
  
    
