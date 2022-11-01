// Identificar se há exatamente (apenas) um número negativo entre três números dados;

let n1 = -4
let n2 = 5
let n3 = 7

if (n1 < 0 && n2 < 0 && n3 < 0){
	console.log('todos os numeros sao negativos')
} else if (n1 < 0 && n2 < 0 && n3 > 0){
	console.log('dois numeros sao negativos')
} else if (n1 < 0 && n2 > 0 && n3 < 0){
	console.log('dois numeros sao negativos')
} else if (n1 < 0 && n2 > 0 && n3 > 0){
	console.log('apenas um numero é negativo')
} else if (n1 > 0 && n2 < 0 && n3 > 0){
	console.log('apenas um numero negativo')
} else if (n1 > 0 && n2 < 0 && n3 < 0){
	console.log('apenas dois numeros sao negativos')
} else if (n1 > 0 && n2 > 0 && n3 < 0)
	console.log('apenas um numero negativo')


// n1 < 0 n2 < 0 n3 < 0  todos negativos

// n1 < 0 n2 < 0 n3 > 0  n1 e n2 negativo

// n1 < 0 n2 > 0 n3 < 0  n1 e n3 negativo

// n1 < 0 n2 > 0 n3 > 0  n1 negativo

// n1 > 0 n2 < 0 n3 > 0  n2  negativo

// n1 > 0 n2 < 0 n3 < 0  n2 e n3 negativos

// n1 > 0 && n2 > 0 && n3 < 0   n3 negativo 

