// Receber como parâmetro quatro números e retornar quantos números ímpares há entre eles;

function pares(n1,n2,n3,n4,contador = 0){
	if (n1 % 2 == 1){
		contador++
	} if (n2 % 2 == 1){
		contador++
	} if (n3 % 2 == 1){
		contador++
	} if (n4 % 2 == 1){
		contador++
	} 
	return contador
}	
console.log(pares(7,5,13,8))


