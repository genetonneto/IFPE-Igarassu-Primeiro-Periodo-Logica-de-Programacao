// Implementar um subprograma que dado um vetor e um número, divide todos os elementos do vetor pelo número

function elementos(vetor,numero){
	
var divisao = 0

	for(var contador = 0; contador < vetor.length; contador++){
		divisao = vetor[contador] / numero
		console.log(vetor[contador] + '/' + numero + '=' + divisao)
	}
}

var array = [8,12,6,9]
var numero = 2

var resultado = (elementos(array,numero))