const btnAgregar = document.querySelector("#btnAgregar")

function enviar() {

    alert("Animal agregado al rodeo")
}

btnAgregar.addEventListener("click", ()=> {
    enviar()
})

const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    input.addEventListener("focus",() => input.className = "foco-en-input")
    input.addEventListener("blur",() => input.className = "")
})