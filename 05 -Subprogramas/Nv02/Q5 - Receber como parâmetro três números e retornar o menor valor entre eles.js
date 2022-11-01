// Receber como parâmetro três números e retornar o menor valor entre eles;

function numeros(n1,n2,n3){
	if (n1 < n2 && n1 < n3){
		console.log(n1)
	} else if (n2 < n1 && n2 < n3){
		console.log(n2)
	} else {
		console.log(n3)
	}
}

numeros(1,5,3)