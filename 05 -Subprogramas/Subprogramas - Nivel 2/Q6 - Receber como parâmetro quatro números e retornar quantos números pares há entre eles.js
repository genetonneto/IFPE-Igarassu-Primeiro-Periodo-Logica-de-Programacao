// Receber como parâmetro quatro números e retornar quantos números pares há entre eles;

function pares(n1,n2,n3,n4,contador = 0){
	if (n1 % 2 == 0){
		contador++
	} if (n2 % 2 == 0){
		contador++
	} if (n3 % 2 == 0){
		contador++
	} if (n4 % 2 == 0){
		contador++
	} 
	return contador
}	
console.log(pares(2,3,7,6))

