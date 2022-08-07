/*Implemente um subprograma capaz de, dado um array de duas dimensões como parâmetro, 
imprimir o dobro dos seus elementos em ordem inversa
(PS.: não serão aceitas respostas com o uso do método reverse da classe Array) */


function elemento(array, dobro) {
    for (let cont1 = array.length - 1; cont1 >= 0; cont1--) {
        for (let cont2 = array[cont1].length - 1; cont2 >= 0; cont2--) {
            console.log(array[cont1][cont2] * dobro)
        }
    }
}

var array =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

elemento(array, 2)



