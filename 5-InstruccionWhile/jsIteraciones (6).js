function mostrar()
{ 
	var contador=0;
	var acumulador=0;
	// se ejecuta 5 veces.
	

	while(contador < 5) {
		contador ++;
		var numero = prompt("ingrese 5 numeros");
		numero = parseInt(numero);
		if (isNaN(numero)) {
			alert("error")
			continue
		}



	 acumulador += numero
 

	} 
	document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/5;
	

}//FIN DE LA FUNCIÓN