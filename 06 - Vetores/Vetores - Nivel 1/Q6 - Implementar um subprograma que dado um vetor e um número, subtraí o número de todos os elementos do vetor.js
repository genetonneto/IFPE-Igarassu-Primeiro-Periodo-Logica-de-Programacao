// Implementar um subprograma que dado um vetor e um número, subtraí o número de todos os elementos do vetor

function elementos(vetor,numero){
	
var subtraçao = 0

	for(var contador = 0; contador < vetor.length; contador++){
		subtraçao = numero - vetor[contador]
		console.log(numero + '-' + vetor[contador] + '=' + subtraçao)
	}
	
}

var array = [10,20,30]
var numero = 5

var resultado = elementos(array,numero)


