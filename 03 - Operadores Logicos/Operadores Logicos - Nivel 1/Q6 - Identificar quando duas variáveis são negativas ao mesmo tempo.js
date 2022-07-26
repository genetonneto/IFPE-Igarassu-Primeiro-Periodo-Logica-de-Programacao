// Identificar quando duas variáveis são negativas ao mesmo tempo;

let n1 = -1
let n2 = 5

if(n1 > 0 && n2 > 0){
	console.log('Ambos sao positivos')
} else if (n1 < 0 && n2 < 0) {
	console.log('Ambos sao negativos')
} else {
	console.log('Apenas uma variavel e negativa')
}
