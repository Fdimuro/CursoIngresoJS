/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var importeTotal;
    var aumento;

    var importe = document.getElementById("sueldo").value;
    importe = parseInt(importe)

    var aumento = importe * 0.1 ;
    var importetotal = importe + aumento;

    document.getElementById("resultado").value = importetotal;


	
}
