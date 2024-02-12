function confirmPrivacidad (){
    var checkbox = document.getElementById('privacidad');
    checkbox.addEventListener( 'change', function() {
    if(this.checked) {
       alert("Al marcar esta casilla confirma que se ha leido las politicas de privacidad y está de acuerdo a ellas.");
    }
});
}