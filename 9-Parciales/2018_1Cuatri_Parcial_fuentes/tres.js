function mostrar()
{
    var precio;
    var porcentaje;
    var preciofinal;
    preciofinal = document.getElementById("elPrecioFinal").value;

    precioDescuento = prompt("ingrese el precioDescuento")
    porcentaje = prompt("ingrese el porcentaje")
   
    while(precio > 0 && porcentaje > 0 && isNaN(preciofinal)) {
    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);
    preciofinal = parseInt(preciofinal)
     preciofinal = precio % porcentaje;
          

     }

    } 

