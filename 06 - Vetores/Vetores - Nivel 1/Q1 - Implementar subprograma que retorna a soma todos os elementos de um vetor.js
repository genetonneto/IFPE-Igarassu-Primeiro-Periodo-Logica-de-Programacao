// Implementar subprograma que retorna a soma todos os elementos de um vetor

function elemento(vetor){
var soma = 0

	for(var contador = 0; contador < vetor.length; contador++){
		soma = soma + vetor[contador] 
	}
	return soma
}

var array = [1,2,3,4]
var resultado = elemento(array)
console.log(resultado)