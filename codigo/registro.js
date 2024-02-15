var nombre = document.getElementById("nombre").value;
var apellido1 = document.getElementById('apellido1').value;
var apellido2 = document.getElementById('apellido2').value;
var dni = document.getElementById('dni').value;
var correo = document.getElementById("correo").value;
var telefono = document.getElementById("telefono").value;
var estadocivil = document.getElementsByName("estadocivil").value;
var disponibilidad = document.getElementsByName("disponibilidad").value;
var motivacion = document.getElementsByName("motivacion").value;
var motivacion2 = document.getElementById("motivacion2").value;
var observaciones = document.getElementById("observaciones").value;
var privacidad = document.getElementById("privacidad").value;
var noticias = document.getElementById("noticias").value;
function createDocument(){
    document.write(
    "Se han registrado los siguientes datos: <br>" +
    "Su nombre es: " + nombre + " <br>" +
    "Sus apellidos son: " + apellido1 + " " + apellido2 + "<br>" +
    "Su DNI es: " + dni + "<br>" +
    "Su correo electrónico es: " + correo + "<br>" +
    "Su teléfono es: " + telefono + "<br>" +
    "Su estado civil es: " + estadocivil + "<br>" +
    "Está disponible los días: " + disponibilidad + "<br>" +
    "Su motivación por entrar ha sido: " + motivacion + motivacion2 + "<br>" +
    "Sus observaciones sobre nuestra página son: " + observaciones
    )
}

console.log(nombre + primerapellido);
function confirmPrivacidad (){
    var checkbox = document.getElementById('privacidad');
    checkbox.addEventListener( 'change', function() {
    if(this.checked) {
       alert("Al marcar esta casilla confirma que se ha leído las políticas de privacidad y está de acuerdo a ellas.");
    }
});
}