let Animales = [];
const cart = [];


    const loadEnvents = () =>
        {   
            let buttons = document.querySelectorAll('boton');
            for (const button of buttons)
            {
                button.addEventListener('click', ()=>{
                    let found = cart.find(element => element.id == button.id);
                    if (found)
                {
                    
                    found.quantity++;
                }
                else 
                {
                    let Animal = Animales.find(element => element.id == button.id)
             

                    if (Animal)
                    {
                        let newProduct = {
                            Tipo: Animal.Tipo,
                            Numero: Animal.Numero,
                            Raza: Animal.Raza,
                            edad: Animal.edad,
                            TiempoDeEmbarazo: Animal.TiempoDeEmbarazo

                        }
                        cart.push(newProduct)
                    }
            }
            updateCart(cart);
        })
    }
}


const mostrarError = () => {
    return `<div class="error">
                <img src="../img/destinos/oops.jpg" alt="">
                <p>No pudimos cargar la información</p>
                <p>Intenta en unos minutos</p>
            </div>`
}

const mostrarVaca = (Animales) => {
    const{Tipo, Numero, Raza, edad, TiempoDeEmbarazo}= Animales
                return ` 
              <tbody class=vaca id="tabla">
                    <tr id="renglon">
                        <td>${Tipo}</td>
                        <td>${Numero}</td>
                        <td>${Raza}</td>
                        <td>${edad}</td>
                        <td>${TiempoDeEmbarazo}</td>
                        <td><button id="boton">+</button></td>
                    </tr>
                </tbody>`
    }
    
const contenedor = document.querySelector(".vaca")
const URL = "../js/vacas.json"

let contenidoHTML = ""

const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
            Animales = data
            Animales.forEach(etiqueta => contenidoHTML += mostrarVaca(etiqueta))

    } catch (error) {
        contenidoHTML = mostrarError()
    } finally {
        contenedor.innerHTML = contenidoHTML
    }
}

cargarContenido(Animales) 
