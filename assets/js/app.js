const contenedor = document.querySelector(".vaca")
const URL = "../js/vacas.json"
let Animales = []
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






