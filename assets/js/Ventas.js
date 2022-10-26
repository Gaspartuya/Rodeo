const loadEvents = () => {
    const btn = document.querySelector("#btnVenta")
    
    btn.addEventListener("click", () => {
        localStorage.removeItem("cart")
        location.reload(true)
          
    Swal.fire(
    'Venta realizada con éxito',
    'Clickea ok para continuar',
    'success'
    )

})
}




const Update = (cart) =>
{
    let table = document.querySelector("#cartContainer");
    let div = document.createElement("tbody")
    let containerHTML = '';
        cart.forEach(etiqueta => {
            const {Tipo, Numero, Raza, edad, TiempoDeEmbarazo} = etiqueta;
                containerHTML +=  ` 
                    <tr id="renglon" class="vaca">
                        <td>${Tipo}</td>
                        <td>${Numero}</td>
                        <td>${Raza}</td>
                        <td>${edad}</td>
                        <td>${TiempoDeEmbarazo}</td>
                    </tr>
                    `
        });
        div.innerHTML = containerHTML;
        table.appendChild(div);

        div.innerHTML += `<button class="margin_left font-Helvetica text_form margin_top btn btn-outline-light btn-floating text-black background_black" id="btnVenta">Confirmar todas las ventas</button>`
        cartContainer.appendChild(div)
        loadEvents();
}
const shopcart = JSON.parse (localStorage.getItem('cart')) || [];
Update(shopcart);







