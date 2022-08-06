/* Implementar um subprograma que dados dois vetores, copia o conteúdo 
do primeiro no segundo vetor (elemento por elemento) na ordem inversa

Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1] */

function elementos(vetor1,vetor2){
	for (var contador = 0; contador < vetor1.length; contador++){
		vetor2[contador] = vetor1[contador]-- 
	
	}
	return vetor2
}


var array1 = [1,3,5,-2]
var array2 = [2,4,7,8] 

console.log(elementos(array1,array2))