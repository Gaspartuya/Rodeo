const mostrarError = () => {
    return `<div class="error">
                <img src="../img/destinos/oops.jpg" alt="">
                <p>No pudimos cargar la información</p>
                <p>Intenta en unos minutos</p>
            </div>`
}

const mostrarVaca = (contenido) => {
    const{Tipo, Numero, Raza, edad, TiempoDeEmbarazo}= contenido
                return ` 
              <tbody class=vaca id="tabla">
                    <tr>
                        <td>${Tipo}</td>
                        <td>${Numero}</td>
                        <td>${Raza}</td>
                        <td>${edad}</td>
                        <td>${TiempoDeEmbarazo}</td>
                        <td><button id="boton">+</button></td>
                    </tr>
                </tbody>
                    </table>`
    }



