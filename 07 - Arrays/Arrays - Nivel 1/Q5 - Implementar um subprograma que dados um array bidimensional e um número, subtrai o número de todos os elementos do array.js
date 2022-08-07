/* Implementar um subprograma que dados um array bidimensional e um número, 
subtrai o número de todos os elementos do array; */

let array = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

let numero = 4

function elementos(array,numero){
    let subtrai = 0
    for(let contador1 = 0; contador1 < array.length; contador1++){
        for(let contador2 = 0;contador2 < array[contador1].length; contador2++){
            subtrai = array[contador1][contador2] - numero
            console.log(`${array[contador1][contador2]} - ${numero} = ${subtrai}`)
        }
    } 
}
elementos(array,numero)
