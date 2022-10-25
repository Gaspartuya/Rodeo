const inputTipo = document.querySelector("#inputTipo")
const inputNumero = document.querySelector("#inputNumero")
const inputRaza = document.querySelector("#inputRaza")
const inputEdad = document.querySelector("#inputEdad")
const inputTiempoDeEmbarazo = document.querySelector("#inputTiempoDeEmbarazo")
const btnAgregar = document.querySelector("#btnAgregar")



function guardarDatos(e){

    e.preventDefault();
    localStorage.setItem("tipo",inputTipo.value)
    localStorage.setItem("numero",inputNumero.value)
    localStorage.setItem("raza",inputRaza.value)
    localStorage.setItem("nacimiento",inputEdad.value)
    localStorage.setItem("tiempo de embarazo",inputTiempoDeEmbarazo.value)
   
        




    const newAnimal = {

            "tipo": inputTipo.value,
            "numero": inputNumero.value,
            "raza": inputRaza.value,
            "nacimiento": inputEdad.value,
            "tiempo de embarazo": inputTiempoDeEmbarazo.value
           
        }



        
    localStorage.setItem("nuevos_animales", newAnimal)




}

btnAgregar.addEventListener("click",guardarDatos)

$("#btnAgregar").click(function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Animal agregado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
});






