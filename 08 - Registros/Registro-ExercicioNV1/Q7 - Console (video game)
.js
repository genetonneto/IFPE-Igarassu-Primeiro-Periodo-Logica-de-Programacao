// Implemente no node.js, ao menos, uma operação (função) sobre console:

class Console {
    constructor (marca,modelo,valor){
        this.marca = marca
        this.modelo = modelo
        this.valor = valor
    }
}

function videogame(console1,console2){
    if ((console1.marca && console1.modelo && console1.valor) > (console2.marca && console2.modelo && console2.valor)){
        return ("Microsoft chegado ao mercado com o preçodo seu console acima da PSN")
    } else {
        return ("PSN chega ao mercado com o preço do seu console acima da Microsoft ")
    }    
}

var xbox = new Console("Xbox", "one", 1900)
console.log(xbox)

var psn = new Console("PSN", "PS4", 191)
console.log(psn)

var console1e2 = videogame(xbox,psn)
console.log("Console:", console1e2)