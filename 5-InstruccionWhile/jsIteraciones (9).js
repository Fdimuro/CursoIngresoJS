function mostrar()
{

	var contador=0;
	// declarar variables
	var min  
	var max 
	var primeraVez = true;
	var respuesta = true;
	var numero;

	
	while(respuesta) {
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);	
	    
		 while(isNaN(numero)) {
	 	 numero = prompt("ingrese un numero");
	     numero = parseInt(numero);
		
	} if (primeraVez){
		primeraVez = false;
		maximo = numero; 
		minimo = numero;
	} else if (numero > maximo) {
	  maximo = numero;
		}
		if (numero < minimo) {
			minimo = numero;
	

			respuesta = prompt("ingrese si para continuar")
		}
		
		}
			
	
	document.getElementById("maximo").value = max
	document.getElementById("minimo").value = min





}//FIN DE LA FUNCIÓN