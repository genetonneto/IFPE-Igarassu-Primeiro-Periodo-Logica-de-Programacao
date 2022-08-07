/* Implementar um subprograma que retorna a quantidade de elementos pares em um 
array de duas dimensões */

let vetor = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function elemento(vetor){
    let par = 0
    for(let cont1 = 0; cont1 < vetor.length; cont1++){
        for(let cont2 = 0; cont2 < vetor[cont1].length; cont2++){
            if(vetor[cont1][cont2] % 2 == 0){
                par++
            }
        }
    } return par
}

console.log(elemento(vetor))