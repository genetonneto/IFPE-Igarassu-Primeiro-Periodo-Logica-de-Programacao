// Implemente no node.js, ao menos, uma operação (função) sobre Filme:

class Filme { 
    constructor(nome, ano) { 
        this.nome = nome 
        this.ano = ano 
    }
}

function genero(suspense,comedia) { 
    if(suspense.nome > comedia.nome && suspense.ano > comedia.ano){
        return ("Parasita, eh o filme mais recente")
    } else {
        return ("Se Beber nao case, eh o filme mais antigo")
    }
}

let Parasita = new Filme (`Parasita`, 2019) 
console.log(Parasita)

let SeBeberNaoCase = new Filme (`Se beber nao case`, 2009) 
console.log(SeBeberNaoCase)

let Filmes1e2 = genero (Parasita, SeBeberNaoCase) 
console.log("O filme:", Filmes1e2) 


