function mostrar()
{

var sexo = prompt("ingrese f ó m .");
// las que estan mal tienen que ser distintas a la vez con &&

while(sexo != "f" && sexo != "m") {
    sexo = prompt("ingrese f o m .");
    sexo = sexo.toLowerCase();

} alert("correcto")


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN