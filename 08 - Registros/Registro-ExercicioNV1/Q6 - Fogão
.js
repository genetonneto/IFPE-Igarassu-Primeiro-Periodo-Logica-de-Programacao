// Implemente no node.js, ao menos, uma operação (função) sobre Fogão:

class Fogao{
    constructor (marca,modelo,bocas){
        this.marca = marca
        this.modelo = modelo
        this.bocas = bocas
    }
}

function tipo(agas,eletrico){
    if((agas.marca && agas.modelo && agas.bocas) > (eletrico.marca && eletrico.modelo && eletrico.bocas)){
        return (`O fogao a gas tem mais em bocas que o fogao eletrico`)
    } else {
        return (`O fogao eletrico tem mais bocas que o fogao a gas`)
    }
}

var Eletrolux = new Fogao (`Eletrolux`,`56EXT`,8)
console.log(Eletrolux)

var Lenoxx = new Fogao (`Lenoxx`, `PFE353`, 6)
console.log(Lenoxx)

var fogoes = tipo (Eletrolux,Lenoxx)
console.log(fogoes)