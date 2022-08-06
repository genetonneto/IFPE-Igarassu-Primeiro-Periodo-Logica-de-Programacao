// Implemente no node.js, ao menos, uma operação (função) sobre Quadrado:

class Quadrado { 
    constructor(base, altura) { 
        this.base = base 
        this.altura = altura 
    }
}

function area(quad) { 
    return   (quad.base * quad.altura)
}

var resultado = new Quadrado(2,4) 
var area = area(resultado) 

console.log("Quadrado da area:", area) 
