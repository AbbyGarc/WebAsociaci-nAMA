    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var dni = document.getElementById('dni').value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var estadocivil = document.querySelector('input[name="estadocivil"]:checked').value;
    var disponibilidad = document.querySelectorAll("disponibilidad").checked;
    var motivacion = document.getElementsById("motivacion").checked;
    var motivacion2 = document.getElementById("motivacion2").value;
    var observaciones = document.getElementById("observaciones").value;
    var privacidad = document.getElementById("privacidad").value;
    var noticias = document.getElementById("noticias").value;
function createDocument(){
    document.write("Se han registrado los siguientes datos: <br>");
    document.write("Su nombre es: " + nombre + " <br>");
    document.write("Sus apellidos son: " + apellido1 + " " + apellido2 + "<br>");
    document.write("Su DNI es: " + dni + "<br>");
    document.write("Su correo electrónico es: " + correo + "<br>");
    document.write("Su teléfono es: " + telefono + "<br>");
    document.write("Su estado civil es: " + estadocivil + "<br>");
    for (let i = 0; i < disponibilidad.length; i++) {
        document.write(disponibilidad[i].value);
      }
    document.write("Está disponible los días: " + disponibilidad.value);
    document.write("Su motivación por entrar ha sido: " + motivacion.value + motivacion2 + "<br>");
    document.write("Sus observaciones sobre nuestra página son: " + observaciones);
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