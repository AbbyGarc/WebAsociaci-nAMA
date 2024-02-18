    var formulario = document.getElementById("formulario");
    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var dni = document.getElementById('dni').value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var estadocivil = document.querySelector('input[name="estadocivil"]:checked').value;
    var disponibilidad = document.getElementsByName('disponibilidad');
    var disponibilidadText = "";
    for (var i = 0; i < disponibilidad.length; i++) {
        if(disponibilidad[i].checked) {
            disponibilidadText += disponibilidad[i].value + ", ";
          } 
        }
    var motivacion = document.getElementsByName("motivacion");
    var motivacionText = "";
    for (var i = 0; i < motivacion.length; i++) {
        if(motivacion[i].checked) {
            motivacionText += motivacion[i].value + ", ";
          } 
        }
    var motivacion2 = document.getElementById("motivacion2").value;
    var observaciones = document.getElementById("observaciones").value;

function createDocument(){
        formulario.innerHTML = "";
        formulario.innerHTML += "<h3>Se han registrado los siguientes datos: </h3><br>";
        formulario.innerHTML += "<p>Su nombre es:" + nombre  + "<p><br>";
        formulario.innerHTML += "<p>Sus apellidos son:" + apellido1 + apellido2 + "</p><br>";
        formulario.innerHTML += "<p>Su DNI es: " + dni + "</p><br>";
        formulario.innerHTML += "<p>Su correo electrónico es: " + correo + "</p><br>";
        formulario.innerHTML += "<p>Su teléfono es: " + telefono + "</p><br>";
        if (!estadocivil) {
            formulario.innerHTML += "<p>No ha marcado una opción de estado civil.</p><br>";
        } else {
            formulario.innerHTML += "<p>Su estado civil es: " + estadocivil + "</p><br>";
        }
        formulario.innerHTML += "<p>Esta disponible los dias: " + disponibilidadText + "</p><br>";
        formulario.innerHTML += "<p>Su motivación por entrar ha sido: " + motivacionText + "</p><br>";
        formulario.innerHTML += "<p>Sus observaciones sobre nuestra página son: " + observaciones + "</p>";
}

function confirmPrivacidad (){
    var checkbox = document.getElementById('privacidad');
    checkbox.addEventListener( 'change', function() {
    if(this.checked) {
       alert("Al marcar esta casilla confirma que se ha leído las políticas de privacidad y está de acuerdo a ellas.");
    }
});
}