// Identificar se um número é divisível por 7 ou 8;

/* 
NÃO CONSEGUI RESOLVER ESSA QUESTÃO TESTANDO TODOS OS CASOS, USANDO APENAS O OPERADOR LOGICO DO OU
let numero = 7

if ((numero % 7 == 0) || (numero % 8 == 0)){
	console.log(numero, 'divisível por 7 e por 8')
} else if ((numero % 7 == 1) || (numero % 8 == 1)){
	console.log(numero, 'nao e divisível por 7 e nem por 8')
} else if ((numero % 7 == 0) || (numero % 8 == 1)){
	console.log(numero, 'divisível por 7 mas nao por 8')
} else if ((numero % 7 == 1) || (numero % 8 == 0))
	console.log(numero, 'divisível por 8 mas nao por 7')

*/




let numero = 6

if ((numero % 7 == 0) || (numero % 8 == 0)){
	console.log(numero, 'divisível por 7 ou por 8')
} else {
	console.log(numero, 'nao e divisível por 7 ou 8')
}