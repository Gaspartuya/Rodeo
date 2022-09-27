const inputTipo = document.querySelector("#inputTipo")
const inputCodigo = document.querySelector("#inputCodigo")
const inputNumero = document.querySelector("#inputNumero")
const inputRaza = document.querySelector("#inputRaza")
const inputEdad = document.querySelector("#inputEdad")
const inputTiempoDeEmbarazo = document.querySelector("#inputTiempoDeEmbarazo")
const btnAgregar = document.querySelector("#btnAgregar")

function guardarDatos() {
    localStorage.setItem("tipo",inputTipo.value)
    localStorage.setItem("codigo",inputCodigo.value)
    localStorage.setItem("numero",inputNumero.value)
    localStorage.setItem("raza",inputRaza.value)
    localStorage.setItem("edad",inputEdad.value)
    localStorage.setItem("tiempo de embarazo",inputTiempoDeEmbarazo.value)
}

btnAgregar.addEventListener("click",guardarDatos)


