const inputTipo = document.querySelector("#inputTipo")
const inputNumero = document.querySelector("#inputNumero")
const inputRaza = document.querySelector("#inputRaza")
const inputEdad = document.querySelector("#inputEdad")
const inputTiempoDeEmbarazo = document.querySelector("#inputTiempoDeEmbarazo")
const btnAgregar = document.querySelector("#btnAgregar")



function guardarDatos(e){

    e.preventDefault();
   
    const newAnimal = 
    {

        "Tipo": inputTipo.value,
        "Numero": inputNumero.value,
        "Raza": inputRaza.value,
        "edad": inputEdad.value,
        "TiempoDeEmbarazo": inputTiempoDeEmbarazo.value
           
    }

    const purchasedAnimals = JSON.parse (localStorage.getItem('nuevos_animales')) || [];
    purchasedAnimals.push(newAnimal);    
    localStorage.setItem("nuevos_animales", JSON.stringify(purchasedAnimals));
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






