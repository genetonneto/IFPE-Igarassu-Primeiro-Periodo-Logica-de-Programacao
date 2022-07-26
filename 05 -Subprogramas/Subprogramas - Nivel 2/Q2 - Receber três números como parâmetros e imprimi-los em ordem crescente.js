// Receber três números como parâmetros e imprimi-los em ordem crescente;

function crescente (n1,n2,n3){
	if (n1 < n2 && n2 < n3){
		console.log(n1,n2,n3)
	} else if (n1 < n3 && n3 < n2){
		console.log(n1,n3,n2)
	} else if (n2 < n1 && n1 < n3){
		console.log(n2,n1,n3)
	} else if (n2 < n3 && n3 < n1){
		console.log(n2,n3,n1)
	} else if (n3 < n1 && n1 < n2){
		console.log(n3,n1,n2)
	} else if (n3 < n2 && n2 < n1){
		console.log(n3,n2,n1)
	} else if (n1 == n2 && n1 == n3 && n2 == n3)
		console.log('todos os valores sao igual')
	
}	

crescente (1,1,1)

/* 

abc 123
acb 132

bac 213
bca 231

cab 312
cba 321

a = b && a = c = todos iguais
b = c 
*/
