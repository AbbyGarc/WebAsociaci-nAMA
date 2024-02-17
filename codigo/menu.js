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