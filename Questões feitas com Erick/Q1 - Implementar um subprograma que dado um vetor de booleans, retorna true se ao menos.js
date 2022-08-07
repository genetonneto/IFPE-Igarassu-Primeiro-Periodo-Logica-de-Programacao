/* Implementar um subprograma que dado um vetor de booleans, retorna true se ao menos 
um dos elementos do vetor for verdadeiro ou false,caso contrário */


let array = [false, false, false, false]

function elemento(array) {
    for (let cont = 0; cont < array.length; cont++) {
        if (array[cont] == true) {
            return true
        } 
    }
    return false
}


console.log(elemento(array))