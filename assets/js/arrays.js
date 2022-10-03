const IVA = 1.21
const Animales = []
const carrito = []

function generadorAutomatico() {
    Animales.push(new Animal("vaca","LN738", "532", "CARETA", "VIEJA", "0"))
    Animales.push(new Animal("vaca","LN738", "813", "COLORADA", "VIEJA","0"))
    Animales.push(new Animal("vaca","LN738", "818", "CARETA-COL", "VIEJA","8"))
    Animales.push(new Animal("vaca","LN738", "805", "NEGRA", "VIEJA","9"))
    Animales.push(new Animal("vaca","LN738", "526", "CARETA", "VIEJA","0"))
    Animales.push(new Animal("vaca","LN738", "535", "CARETA", "VIEJA","0"))
    Animales.push(new Animal("vaca","LN738", "539", "COLORADA", "VIEJA","0"))
}


generadorAutomatico()

function cargarProductos(array) {
    let fila = ""
        tabla.innerHTML = ""
        array.forEach(Animal => {
            fila = `<tr>
                        <td>${Animal.tipo}</td>
                        <td>${Animal.codigo}</td>
                        <td>${Animal.numero}</td>
                        <td>${Animal.raza}</td>
                        <td>${Animal.edad}</td>
                        <td>${Animal.tiempoDeEmbarazo} meses </td>
                        <td><button id="btn${Animal.numero}">+</button></td>
                    </tr>`
                    tabla.innerHTML += fila
        })

        
} 
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
        imageUrl: "../img/destinos/vaquita",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
});
