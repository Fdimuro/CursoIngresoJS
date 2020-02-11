function mostrar()
{
//tomo la edad  
var edad 
var edad = document.getElementById("edad").value;

if (edad > 17) {
    alert("es adulto");
} else {
    if(edad < 13) {
        alert("es niño");
    } else {
        alert ("es adolescente");
    }
}

}//FIN DE LA FUNCIÓN