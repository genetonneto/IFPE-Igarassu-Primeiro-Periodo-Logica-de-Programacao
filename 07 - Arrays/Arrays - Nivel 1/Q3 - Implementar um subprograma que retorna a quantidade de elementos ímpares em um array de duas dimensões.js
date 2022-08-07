/* Implementar um subprograma que retorna a quantidade de elementos ímpares em um 
array de duas dimensões */

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function elementos(array){
    impares = 0
    for(let cont1 = 0; cont1 < array.length; cont1++){
        for(let cont2 = 0; cont2 < array[cont1].length; cont2++){
            if(array[cont1][cont2] % 2 == 1){
                impares++
            }
        }
    } return impares

}
console.log(elementos(array))
