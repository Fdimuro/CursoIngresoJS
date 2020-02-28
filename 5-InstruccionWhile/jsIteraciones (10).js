function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta= true ;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var numero;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorNegativos = 0;
	var contadorPares = 0; 
	var promediodepositivos;
	var promedionegativos;
	var  diferenciapositivosYnegativos;
	


 	while(respuesta)
	{ 
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)) {
	 	 numero = prompt("error ingrese un numero valido");
	     numero = parseInt(numero);
		 
		 }
	if (numero > 0) {
		//punto 2
		sumaPositivos += numero;
		//punto 3
		contadorPositivos ++;

	} else if (numero < 0) {
		sumaNegativos += numero;
		contadorNegativos ++;
	} 
	else if (numero = 0 ) {

		contadorCeros ++;
	}

	if (numero % 2 == 0 ) {  
		contadorPares ++;
   } 
	respuesta= confirm("desea continuar");
	 }
	

	 //fuera del while
	 
	 pomediopositivos = sumaPositivos / contadorPositivos
	 promedionegativos = sumaNegativos / contadorNegativos
	 console.log(promediopositivos);

	 diferenciapositivosYnegativos = sumaPositivos - sumaNegativos

	 document.write("Promedio de positivos :" + promediodepositivos + "<br >");
	 document.write("Promedio de negativos :" + promedionegativos + "<br >");
	 document.write("diferenciapositivosYnegativos :" + diferenciapositivosYnegativos + "<br >")
	 document.write("Suma de positivos" + sumaPositivos + "<br >");
	 document.write("Suma de negativos" + sumaNegativos + "<br >");
	 document.write("Contador de positivos" + contadorPositivos + "<br >");
	 document.write("Contador de negativos" + sumaNegativos + "<br >");
	 document.write("Contador de pares" + contadorPares + "<br >");
	 document.write("Contador de ceros" + contadorCeros + "<br >");
	 

	


}

//FIN DE LA FUNCIÓN