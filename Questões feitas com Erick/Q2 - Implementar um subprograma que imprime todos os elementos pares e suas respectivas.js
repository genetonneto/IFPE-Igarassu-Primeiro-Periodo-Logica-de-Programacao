/* Implementar um subprograma que imprime todos os elementos pares e suas respectivas
posição dentro um array de duas dimensões; */

array = [
    [2, 5, 8, 9],
    [3, 4, 6]
]    
/* O elemento: 2 é par e está na linha: 0 e na coluna: 0
O elemento: 8 é par e está na linha: 0 e na coluna: 2
O elemento: 4 é par e está na linha: 1 e na coluna: 1
O elemento: 6 é par e está na linha: 1 e na coluna: 2 */ 

function elemento(array){
    let par = 0
    for(let cont1 = 0; cont1 < array.length; cont1++){
        for(let cont2 = 0; cont2 < array[cont1].length; cont2++){
            if(array[cont1][cont2] % 2 == 0){ 
                console.log(`o elemento ${array[cont1][cont2]} é par e esta na linha: ${[cont1]} e na coluna ${cont2}`) 
            }
        }
    } 
}

elemento(array)