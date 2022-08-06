// Implemente no node.js, ao menos, uma operação (função) sobre Cubo:

class Cubo {
    constructor (volume){
        this.volume = volume
    }
}

function produto(areadabase){
    return (areadabase.volume ** 3)
}

var resultado = new Cubo (5)
var produto = produto(resultado)

console.log("O volume do cubo eh:", produto )