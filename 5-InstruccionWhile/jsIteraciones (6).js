function mostrar()
{

	var contador=0;
	var acumulador=0;
	// se ejecuta 5 veces.
 while (contador < 5 ){
	contador ++;
    var numero = prompt("ingrese 1 numero");
	numero = parseInt(numero);

	if (isNaN(numero)) {
		alert("error");
		continue
	}
	acumulador += numero;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

//while(contador < 5){
	// var numero = NaN;
	//while (isNaN(numero)) {
		//numero = prompt("ingrese un numero");
		//numero = parseInt(numero)
		// contador ++;
		//acumulador += numero;
	//}
//}

}//FIN DE LA FUNCIÓN