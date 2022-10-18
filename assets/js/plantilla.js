let Animales = [];
const cart = [];
const filtroProducto = document.getElementById("filtroProducto")


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
                        <td><button id='boton${Numero}'>+</button></td>
                    </tr>
                </tbody>`
    }
    
const contenedor = document.querySelector(".vaca")

let contenidoHTML = ""

const cargarContenido = async () => {
    try {
        const response = await fetch ('../js/vacas.json')
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

const inputFiltrar = document.querySelector("input")

function filtrarProductos() { 
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = Animales.filter(Animal => Animal.Numero.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarContenido(Animales) 
              } else {
                cargarContenido(resultado)
              }
    } else {
        cargarContenido(Animales) 
    }
}

inputFiltrar.addEventListener("input", filtrarProductos)

function eventoEnBotones() {
    Animales.forEach(prod => {
        const btn = document.querySelector('#boton${Numero}')
              btn.addEventListener("click", ()=> agregarAlCarrito(`${Numero}`))
    })
}

eventoEnBotones()

function agregarAlCarrito(Numero) {
    const Animal = productos.find(prod => prod.Numero == Numero)
          carrito.push(Animal)
          localStorage.setItem("carrito", JSON.stringify(carrito))
}

function recuperarCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
recuperarCarrito()
