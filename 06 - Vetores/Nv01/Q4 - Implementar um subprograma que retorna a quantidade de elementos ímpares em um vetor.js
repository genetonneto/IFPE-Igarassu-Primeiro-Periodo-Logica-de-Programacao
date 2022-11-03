// Implementar um subprograma que retorna a quantidade de elementos ímpares em um vetor


function elementos(impares){
	var nImpares = 0
	for(var contador = 0; contador < impares.length; contador++){
		if(impares[contador] % 2 == 1){
			nImpares++
		}
	}
	return nImpares
}	

var array = [7,4,13,8]
console.log(elementos(array))

