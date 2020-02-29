function mostrar()
{
    var preciodescuento;
    var porcentajedescuento;
    var preciofinal;

    preciodescuento = prompt("indicar el precio de descuento");
    porcentajedescuento = prompt("indicar el porcentaje de descuento");
    preciodescuento = parseInt(preciodescuento);
    porcentajedescuento = parseInt(porcentajedescuento);

    while(isNaN(preciodescuento) && isNaN(porcentajedescuento)){
        alert("error")
        break;
        
    }
    console.log(preciodescuento)
        console.log(porcentajedescuento)

    preciofinal = porcentajedescuento  % preciodescuento;

    document.getElementById("elPrecioFinal").value = preciofinal;




    






}
