function confirmPrivacidad (){
    var privacidad = getElementById(privacidad)
    if(privacidad == true){
    alert("Usted ha aceptado las politicas de privacidad.")
    } else {
        alert("Usted no ha aceptado las politicas de privacidad.\n" 
        + "Si desea registrarse porfavor acepte las politicas de privacidad.")
    }
}