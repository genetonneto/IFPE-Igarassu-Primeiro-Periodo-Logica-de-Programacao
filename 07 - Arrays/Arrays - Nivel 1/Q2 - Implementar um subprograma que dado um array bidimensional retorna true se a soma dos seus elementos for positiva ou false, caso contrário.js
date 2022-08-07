/* Implementar um subprograma que dado um array bidimensional retorna true se 
a soma dos seus elementos for positiva ou false, caso contrário; */

var array = [
	[-1,-2,-3],
	[-4,-5,-6],
	[-7,-8,-9]
]

function elementos(array){
var soma = 0

	for (var contador1 = 0; contador1 < array.length; contador1++){
		for (var contador2 = 0; contador2 < array[contador1].length; contador2++){
			soma = soma + array[contador1][contador2] 		
		}
	}

	if(soma > 0){
		return true
	} else {
		return false
	}
}

console.log(elementos(array))



