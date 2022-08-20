// Testar se um número é primo

let numero = 48
let cDivisores = 0

for (let contador = 0; contador <= numero; contador++){
	if(numero % contador == 0){
		cDivisores++
	}
}
	if (cDivisores == 2){
		console.log('primo')
	} else {
		console.log('composto')
	}