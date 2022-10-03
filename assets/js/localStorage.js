const inputTipo = document.querySelector("#inputTipo")
const inputCodigo = document.querySelector("#inputCodigo")
const inputNumero = document.querySelector("#inputNumero")
const inputRaza = document.querySelector("#inputRaza")
const inputEdad = document.querySelector("#inputEdad")
const inputTiempoDeEmbarazo = document.querySelector("#inputTiempoDeEmbarazo")
const btnAgregar = document.querySelector("#btnAgregar")



function guardarDatos(){


    localStorage.setItem("tipo",inputTipo.value)
    localStorage.setItem("codigo",inputCodigo.value)
    localStorage.setItem("numero",inputNumero.value)
    localStorage.setItem("raza",inputRaza.value)
    localStorage.setItem("edad",inputEdad.value)
    localStorage.setItem("tiempo de embarazo",inputTiempoDeEmbarazo.value)
   
        

    $("#btnAgregar").click(function(){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Animal agregado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
    });


    const newAnimal = {

            "tipo": inputTipo.value,
            "codigo": inputCodigo.value,
            "numero": inputNumero.value,
            "raza": inputRaza.value,
            "edad": inputEdad.value,
            "tiempo de embarazo": inputTiempoDeEmbarazo.value
           
        }



        
    localStorage.setItem("nuevos_animales", newAnimal)




}

btnAgregar.addEventListener("click",guardarDatos)






