function recuperoCarrito (){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(prod => {
            let fila = `<tr>
                            <td>${prod.codigo}</td>
                            <td>${prod.raza}</td>
                        <tr>`
                        tabla.innerHTML += fila
        });
}   