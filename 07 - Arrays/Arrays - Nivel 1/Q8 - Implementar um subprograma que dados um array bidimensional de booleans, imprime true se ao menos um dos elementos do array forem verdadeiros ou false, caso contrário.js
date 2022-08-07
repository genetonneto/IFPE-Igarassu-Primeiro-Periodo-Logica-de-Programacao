/* Implementar um subprograma que dados um array bidimensional de booleans, imprime true 
se ao menos um dos elementos do array forem verdadeiros ou false, caso contrário */ 

let array = [
	
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false]

	]

function elemento(array) {
    for (let contador1 = 0; contador1 < array.length; contador1++){
    	for (let contador2 = 0; contador2 < array[contador1].length; contador2++){
    		if (array[contador1][contador2] == true) {
            	return true
        	}
    	} 
    } return false
}


console.log(elemento(array))