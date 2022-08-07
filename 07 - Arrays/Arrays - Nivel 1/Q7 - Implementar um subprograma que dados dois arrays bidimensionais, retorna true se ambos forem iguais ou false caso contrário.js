/* Implementar um subprograma que dados dois arrays bidimensionais,
retorna true se ambos forem iguais ou false caso contrário; */ 

var arrayB1 = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

var arrayB2 = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

/*var arrayB2 = [
	[9,8,7],
	[6,5,4],
	[3,2,1]
]*/ 

function elementos (arrayB1,arrayB2){
	for(var contador1 = 0; contador1 < arrayB1.length; contador1++){
		for(var contador2 = 0; contador2 < arrayB1[contador1].length;contador2++){
			if (arrayB1[contador1][contador2] != arrayB2[contador1][contador2]){
				return false
			}
		}
	} return true
}

console.log(elementos(arrayB1,arrayB2))

