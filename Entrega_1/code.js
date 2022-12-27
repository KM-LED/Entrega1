function menuPrincipal() {
    let total = 0
    let menu
    do {
        menu = prompt("1 -Comprar Producto \n 2-Terminar Compra  \n 3-Salir")
        menu = parseInt(menu)
        switch (menu) {
            case 1: total = total + compraProducto()
                break
            case 2: alert("Total gastado  $" + total)
                    total = 0
                break
            case 3: alert("Saliendo")
                break
            default: alert("opcion Invalida")
        }
    } while (menu !=3)

}

function compraProducto() {
    let sumaProductos = 0
    alert("Elige tu producto")
    alert("1-USB OPEN \n 2-USB OPTO \n 3-PIXEL LED CONTROLLER \n 4-SPLITTER 2CH \n 5-SPLITTER 4CH")
    let tipo = prompt("Ingrese el tipo de producto")
    tipo = parseInt(tipo)

    switch (tipo) {
        case 1: sumaProductos = 17200
            break
        case 2: sumaProductos = 22600
            break
        case 3: sumaProductos = 10100
            break
        case 4: sumaProductos = 19300
            break
        case 5: sumaProductos = 36599
            break
        default: alert("opcion invalida")
    } 
    return sumaProductos

}

menuPrincipal()