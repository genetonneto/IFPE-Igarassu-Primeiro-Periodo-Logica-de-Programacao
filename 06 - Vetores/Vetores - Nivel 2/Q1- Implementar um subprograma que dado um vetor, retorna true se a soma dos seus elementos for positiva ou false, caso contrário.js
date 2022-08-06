/* Implementar um subprograma que dado um vetor, retorna true se a soma 
dos seus elementos for positiva ou false, caso contrário */

function elemento(vetor){
var soma = 0

	for(var contador = 0; contador < vetor.length; contador++){
		soma = soma + vetor[contador] 
	}

	if(soma > 0){
		return true
	} else {
		return false
	}
}



var array = [1,2,3,4]
var resultado = elemento(array)
console.log(resultado)
