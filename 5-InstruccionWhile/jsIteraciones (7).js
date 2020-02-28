function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = true;
	var numero;

	
	
	while(respuesta) {
		numero = prompt("ingresar un numero");
		numero = parseInt(numero);
	  contador ++; 
	while (isNaN(numero)) {
		numero = prompt("error")
		numero = parseInt(numero);

	}
	acumulador += numero;
	respuesta = confirm("desea continuar")
	}
	
	
	
	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador/contador;




}//FIN DE LA FUNCIÓN