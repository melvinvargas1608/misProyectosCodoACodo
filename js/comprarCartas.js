function calcularTotal() {
    const precioCartas = 2.99
    let cantidadCartas = document.getElementById("cantidad").value
    
    if (cantidadCartas >= 1) {
        let cantidadTotal = cantidadCartas * precioCartas

        let descuento = document.getElementById("descuento").value

        cantidadTotal = cantidadTotal - (cantidadTotal * descuento / 100)

        document.getElementById("totalPagar").innerHTML = cantidadTotal
    } else {
        document.getElementById("totalPagar").innerHTML = "Por favor ingrese una cantidad mayor o igual a 1"
    }

}