
const updateCart = (cart) =>
{
    let cartContainer = document.querySelector('#renglon');

    let container = document.getElementById('tabla');
        if (container)
            {
                container.parentNode.removeChild(container);
                
            }
            let div = document.createElement('div');
            div.setAttribute('id','tabla')
            div.innerHTML += '<h2>carrito de compras</h2>';
            for (const Animal of cart)
             {
                div.innerHTML += `
                <tbody class=vaca id="tabla">
                <tr id="renglon">
                    <td> TIPO:${Animal.Tipo}</td>
                    <td> NUMERO:${Animal.Numero}</td>
                    <td> RAZA:${Animal.Raza}</td>
                    <td> EDAD:${Animal.edad}</td>
                    <td> TIEMPO DE EMBARAZO;${Animal.TiempoDeEmbarazo}</td>
                    <td><button id="boton${Numero}">+</button></td>
                </tr>
            </tbody
                 `
                
             }

             cartContainer.appendChild(div);

            }

            const shopcart = json.parse(localStorage.getItem('cart')) || []
            updateCart(shopcart)




