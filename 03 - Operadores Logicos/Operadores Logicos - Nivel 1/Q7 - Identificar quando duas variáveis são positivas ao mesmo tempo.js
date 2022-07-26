// Identificar quando duas variáveis são positivas ao mesmo tempo;

let n1 = 8
let n2 = 13

if(n1 > 0 && n2 > 0){
	console.log('Ambos sao positivos')
} else if (n1 < 0 && n2 < 0) {
	console.log('Ambos sao negativos')
} else {
	console.log('Apenas uma variavel e negativa')
}
