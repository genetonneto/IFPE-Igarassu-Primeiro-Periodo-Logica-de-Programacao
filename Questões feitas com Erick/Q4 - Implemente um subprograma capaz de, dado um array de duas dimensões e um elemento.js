/* Implemente um subprograma capaz de, dado um array de duas dimensões e um elemento 
como parâmetros, imprimir a linha e a coluna da primeira ocorrência 
do elemento no array. */ 


// elemento =  4

array =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 4, 9]
    ]

//Exemplo de saída : Linha 1, coluna 0

function elemento(array,elemento) {
    let encontrou = false
    for (let linha = 0; linha < array.length && !encontrou; linha++) {
        for (let coluna = 0; coluna < array[linha].length && !encontrou; coluna++) {
            if(elemento == array[linha][coluna]){
                encontrou = true 
                console.log(`linha ${[linha]} coluna ${[coluna]}`)
            }
        }
    } return encontrou 
}

elemento(array,4)