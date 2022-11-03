/* Implementar um subprograma que dados um vetor e um número, multiplica cada elemento 
do vetor pelo número recebido como parâmetro */

function elementos(vetor,numero){	

var multiplicaçao = 0

	for (var contador = 0; contador < vetor.length; contador++){
		multiplicaçao = vetor[contador] * numero 
		console.log(vetor[contador] + 'x' + numero + '=' + multiplicaçao)
	}
}

var vetor = [1,2,3,4,5,6,7,8,9,10]
var numero = 5
var resultado = (elementos(vetor,numero))
