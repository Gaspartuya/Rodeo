const Animales = []
const carrito = []

 
cargarProductos(Animales)

const inputFiltrar = document.querySelector("input")

function filtrarProductos() { 
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = Animales.filter(Animal => Animal.numero.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarProductos(Animales)
              } else {
                cargarProductos(resultado)
              }
    } else {
        cargarProductos(Animales)
    }
}

inputFiltrar.addEventListener("input", filtrarProductos) 

function eventoEnBotones() {
    Animales.forEach(prod => {
        const btn = document.querySelector(`#btn${prod.numero}`)
              btn.addEventListener("click", ()=> agregarAlCarrito(`${prod.numero}`))
    })
}
eventoEnBotones()

function agregarAlCarrito(numero) {
    const Animal = Animales.find(prod => prod.numero == numero)
          carrito.push(Animal)
          localStorage.setItem("carrito", JSON.stringify(carrito))
}

function recuperarCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}

$("#agregar-producto").click(function(){
    Swal.fire({
        title: 'Sweet!',
        text: 'Agregará una nueva vaca',
        imageUrl: "../img/destinos/vaquita.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
});
