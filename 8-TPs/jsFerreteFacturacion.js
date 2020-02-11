/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno;
var precioDos;
var precioTres;
var resultado;
var promedio;
var precioFinal;

function Sumar () 
{
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    // console.log(precioUno, precioDos, precioTres); console.log(resultado)

    var resultado = precioUno + precioDos + precioTres;
    alert("la suma es" + resultado);

}
function Promedio () 
{
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    
    var resultado = precioUno + precioDos + precioTres;
    var promedio = resultado / 3;
    alert("el promedio es" + promedio);
    

	
}
function PrecioFinal () 
{
	
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    
    var precioFinal = resultado * 1.21;
    alert("el precio final es" + precioFinal);
}