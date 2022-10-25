class Animal {
    constructor(Tipo, Numero, Raza, edad, TiempoDeEmbarazo) {
        this.Tipo = Tipo
        this.numero = Numero
        this.Raza = Raza
        this.edad = edad
        this.TiempoDeEmbarazo = TiempoDeEmbarazo
    }
    precioFinal () {
        return "$ " + parseFloat ((this.importe * IVA).toFixed(2))
    }
}