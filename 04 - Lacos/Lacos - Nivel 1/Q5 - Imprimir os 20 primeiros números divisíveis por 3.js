// Imprimir os 20 primeiros números divisíveis por 3;

let numeroInicial = 3
let numeroFinal = 60


/*
while (numeroInicial <= numeroFinal){
	console.log(numeroInicial)
	numeroInicial = numeroInicial + 3
}
*/

for (let contador = 3; contador <= numeroFinal; contador = contador + 3){
	console.log(contador)
}

