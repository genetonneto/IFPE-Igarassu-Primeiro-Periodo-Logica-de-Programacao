// Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre Carro:

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}


function valor(seguro1,seguro2) {
    if(seguro1.marca && seguro1.modelo && seguro1.ano > seguro2.marca && seguro2.modelo && seguro2.ano){
        return (`O seguro 1 eh mais caro que o seguro 2`)
    } else {
        return (`O seguro 2 eh mais caro que o seguro 1`)
    }
}

var Fiat = new Carro (`Fiat`, `Argus`, 2021)
    console.log(Fiat)

var Gol = new Carro (`Gol`, `Golf GTI`, 2022)
    console.log(Gol)

var Carro1e2 = valor(Fiat,Gol)
    console.log(Carro1e2)


