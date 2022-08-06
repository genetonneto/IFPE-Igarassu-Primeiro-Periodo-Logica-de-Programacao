/* Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro para segundo vetor 
(elemento por elemento) */ 


function elementos(vetor1,vetor2){
	for(var contador = 0; contador < vetor1.length; contador++){
		vetor2[contador] = vetor1[contador]
	}
	return vetor2
}

var vetor1 = [1,2,3]
var vetor2 = [4,5,6]

console.log(elementos(vetor1,vetor2))
