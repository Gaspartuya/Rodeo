class Animal {
    constructor(tipo, codigo, numero, raza, edad, tiempoDeEmbarazo) {
        this.tipo = tipo
        this.codigo = codigo
        this.numero = numero
        this.raza = raza
        this.edad = edad
        this.tiempoDeEmbarazo = tiempoDeEmbarazo
    }
    precioFinal () {
        return "$ " + parseFloat ((this.importe * IVA).toFixed(2))
    }
}