/* Implementar um subprograma que dado um array bidimensional e um número,
 multiplica cada elemento do array pelo número; */ 


 let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let numero = 2

function elementos(array,numero){
    let mult = 0
    for(let cont1 = 0; cont1 < array.length; cont1++){
        for(let cont2 = 0;cont2 < array[cont1].length; cont2++){
            mult = array[cont1][cont2] * numero
            console.log(`${array[cont1][cont2]} * ${numero} = ${mult}`)
        }
    } 
}
elementos(array,numero)