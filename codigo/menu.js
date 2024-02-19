validador = 0
function cambioMenu() {
    menu = document.getElementsByClassName("menu")
    validador = validador + 1
    if(validador%2 == 0) {
        menu [0].href = ""
    } else if (validador%2 == 1) {
        menu [0].href = "./estilos/menu.css"
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var miCheckbox = document.getElementById("switch");
    mode = document.getElementsByClassName("mode")

    miCheckbox.addEventListener("change", function() {
        if (miCheckbox.checked) {
            console.log("El checkbox está marcado.");
            mode [0].href = "./estilos/darkmode.css"
        } else {
            console.log("El checkbox está desmarcado.");
            mode [0].href = ""
        }
    });
});

function torneito() {
    alert("Torneo Budget de Commander\n1. Un precio limite de 100 euros por deck. Aunque los decks preconstruidos son mas bataros y gozan de una popularidad enorme\n2. Unos cuantos decks para prestar para que la gente que no disponga de recursos pueda participar y divertirse.")
}