function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var min;
	var max;
	min = 1;
	max = 11;
	numero = Math.floor(Math.random() * (11 - 1)) + 1;

	
if (numero > 8 ) {
    alert(numero + "-Excelente");
} else {
	if(numero >=4) {
        alert(numero + "-aprobo");
    } else {
        alert (numero + "-vamos la proxima se puede");
    }
}



	


}//FIN DE LA FUNCIÓN