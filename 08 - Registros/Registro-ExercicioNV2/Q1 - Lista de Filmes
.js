/* Implemente no node.js os seguintes tipos e, ao menos, uma operação (função) sobre o mesmo (dicas: utilize arrays, se vocẽ não souber qual operação implementar tente fazer uma função para buscar e retornar um elemento na lista): Filme */

class Filme { 
    constructor(nome, ano) { 
        this.nome = nome 
        this.ano = ano 
    }
}

function genero(suspense,comedia) { 
    if(suspense.nome == comedia.nome && suspense.ano == comedia.ano){
        return true
    } else {
        return false
    }
}

class ListaFilmes {
    constructor(filmes){
        this.filmes = filmes
    }
}

function contemFilme(lista, filme) {
	for (var cont = 0; cont < lista.filmes.length; cont++) {
		if (genero(filme, lista.filmes[cont])) {
			return true
		}
	}
	return false
}

var parasita = new Filme (`Parasita`, 2019) 
var ondeosfracosnaotemvez = new Filme(`Onde Os Fracos Nao Tem Vez`, 2007)
var sebebernaocase = new Filme (`Se beber nao case`, 2009) 

var lista = new ListaFilmes ([parasita,sebebernaocase]) 

var contem = contemFilme(lista, parasita)
console.log('Parasita esta na lista:', contem)

var contem = contemFilme(lista, ondeosfracosnaotemvez)
console.log(' Onde Os Fracos Nao Tem Vez esta na lista:', contem)