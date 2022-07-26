// Identificar se duas variáveis são pares e negativas ao mesmo tempo;

let n1 = -8
let n2 = -4

if ((n1 % 2 == 0 && n2 % 2 == 0) && (n1 < 0 && n2 < 0)){
	console.log(n1, 'e',n2, 'sao pares e negativas')
} else if ((n1 % 2 == 0 && n2 % 2 == 0) && (n1 > 0 && n2 > 0)){
	console.log(n1, 'e', n2, 'sao pares e sao positivas')
} else if ((n1 % 2 == 1 && n2 % 2 == 1) && (n1 < 0 && n2 < 0)){
	console.log(n1,'e', n2, 'sao impares e negativas')
} else {
	console.log(n1, 'e', n2, 'sao impares e positivas')
}

