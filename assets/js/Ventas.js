const Update = (cart) =>
{
    let cartContainer = document.querySelector("#cart")

    let container = document.getElementById("tabla")
    if (container)
    {
        container.parentNode.removeChild(container)
    }
    {
        Animales.forEach(etiqueta => {
            const {Tipo, Numero, Raza, edad, TiempoDeEmbarazo} = etiqueta;
                contenidoHTML += ` 
                <tbody class=vaca id="tabla">
                    <tr id="renglon">
                        <td>${Tipo}</td>
                        <td>${Numero}</td>
                        <td>${Raza}</td>
                        <td>${edad}</td>
                        <td>${TiempoDeEmbarazo}</td>
                        <td><button id='btn${Numero}'>Vender</button></td>
                    </tr>
                </tbody>`
        });
    }
     cartContainer.appendChild(div)
}
const shopcart = JSON.parse (localStorage.getItem('cart')) || [];
Update(shopcart)