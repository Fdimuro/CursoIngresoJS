function mostrar()
{
    var planetasolar = prompt("ingresar un planeta del sistema solar ");
    
    switch (planetasolar) {
        case "tierra":
            alert("aca vivimos")
            break;
        case "venus":
        case "mercurio":
        case "jupiter" :
        case "saturno":

        alert("acá hace más calor");
        break;
        case "marte":
        case "urano":
        case "neptuno":
        alert("aca hace mas frio");

        default :
        alert("no es un planeta valido")
        break;

    }
    
}
