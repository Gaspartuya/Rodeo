const Animales = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let contenidoHTML = "";
const contenedor = document.querySelector(".vaca")




const mostrarError = () => {
    return `<div class="error">
                <img src="../img/destinos/oops.jpg" alt="">
                <p>No pudimos cargar la información</p>
                <p>Intenta en unos minutos</p>
            </div>`
}

function agregarAlCarrito(Numero) 
{
    const Animal = Animales.find(prod => prod.Numero == Numero);
    cart.push(Animal)
    localStorage.setItem("cart", JSON.stringify(cart))
    
}


function eventoEnBotones() 
{
    Animales.forEach((prod) => {
            const num = prod.Numero;
            console.log('numero: ', num);
            const btn = document.querySelector('#btn' + num);
            btn.addEventListener("click", ()=> {
                agregarAlCarrito(num);
            });
    })
}


const mostrarVacas = (Animales) => 
{
    Animales.forEach(etiqueta => {
        const {Tipo, Numero, Raza, edad, TiempoDeEmbarazo} = etiqueta;
            contenidoHTML += ` 
            <tbody class=vaca id="tabla">
                <tr id="renglon">
                    <td>${Tipo}</td>
                    <td>${Numero}</td>
                    <td>${Raza}</td>
                    <td>${edad}</td>
                    <td>${TiempoDeEmbarazo}</td>
                    <td><button id='btn${Numero}' class="font-Helvetica text_form margin_top btn btn-outline-light btn-floating m-1 text-black background_black">Vender</button></td>
                </tr>
            </tbody>`
    });
}
    

const cargarContenido = async () => 
{
    try
    {
        const response = await fetch ('../js/vacas.json')
        const data = await response.json()
            Animales.push(...data);
            const purchasedAnimals = JSON.parse (localStorage.getItem('nuevos_animales')) || [];
            console.log(purchasedAnimals);
            Animales.push(...purchasedAnimals);
            mostrarVacas(Animales);
    } 
    catch (error) 
    {   
        console.log('error: ', error);
        contenidoHTML = mostrarError()
    }
    finally
    {
        contenedor.innerHTML = contenidoHTML;
        eventoEnBotones();
    }
}

cargarContenido(Animales);




