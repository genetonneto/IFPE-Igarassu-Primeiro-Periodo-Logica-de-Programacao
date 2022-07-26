// Identificar se duas variáveis são ímpares e positivas ao mesmo tempo.

let n1 = 7
let n2 = 9

if ((n1 % 2 == 1 && n2 % 2 == 1) && (n1 > 0 && n2 > 0)){
	console.log(n1, 'e', n2, 'sao impares e positivas')
} else if ((n1 % 2 == 0 && n2 % 2 == 0) && (n1 < 0 && n2 < 0)) {
	console.log(n1, 'e',n2, 'pares e negativas')
} else if ((n1 % 2 == 0 && n2 % 2 == 0) && (n1 > 0 && n2 > 0)) {
	console.log(n1, 'e',n2, 'pares e positivas')
} else {
	console.log(n1, 'e',n2, 'sao impares e negativas')
}


