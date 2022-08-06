/* Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre 
o mesmo (dicas: utilize arrays, se vocẽ não souber qual operação implementar tente fazer uma 
função para buscar e retornar um elemento na lista): Quadrados */

class Quadrados{
    constructor (base,altura){
        this.base = base
        this.altura = altura
    }
}

function area(quad){
        return (quad.base * quad.altura)
}


class ListaQuadrados{
    constructor (quadrados){
            this.quadrados = quadrados
    }
}

function contemQuadrados(lista,quadrados){
    for(var cont = 0; cont < lista.quadrados.length; cont++){
        if(area(quadrados, lista.quadrados[cont])){
            return true
        }
    }
   return false
}


var basedoquad = new Quadrados(2)
var areadoquad = new Quadrados(4)

var lista = new ListaQuadrados([basedoquad,areadoquad])

var contem = contemQuadrados(lista,basedoquad)
console.log(contem)

var contem = contemQuadrados(lista,areadoquad)
console.log(contem)

