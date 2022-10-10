const contenedor = document.querySelector(".vaca")
const URL = "../js/vacas.json"
let vacas = []
let contenidoHTML = ""

const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
            vacas = data
            vacas.forEach(etiqueta => contenidoHTML += mostrarVaca(etiqueta))

    } catch (error) {
        contenidoHTML = mostrarError()
    } finally {
        contenedor.innerHTML = contenidoHTML
    }
}

cargarContenido()

const activarClicks = ()=> {
    let botones = document.querySelectorAll("boton")
        botones.forEach(boton => boton.addEventListener("click", (e)=> agregarAlCarrito(e)))
    let imagenes = document.querySelectorAll(".card img")
        imagenes.forEach(imagen => imagen.addEventListener("click", (e)=> verDetalle(e.target.id)))
}

const agregarAlCarrito = (event)=> {
    let item = vacas.find(etiqueta => etiqueta.id === parseInt(event.target.id))
        item !== undefined && carrito.push(item)
        console.clear()
        console.table(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
}

