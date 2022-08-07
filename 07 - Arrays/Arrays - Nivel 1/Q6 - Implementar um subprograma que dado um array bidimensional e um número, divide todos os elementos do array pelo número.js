/* Implementar um subprograma que dado um array bidimensional e um número,
divide todos os elementos do array pelo número; */ 

let array = [
	[8,12,33],
	[42,57,86],
	[7,89,69]
]

let numero = 4

function elementos(array,numero){
    let divisao = 0
    for(let contador1 = 0; contador1 < array.length; contador1++){
        for(let contador2 = 0;contador2 < array[contador1].length; contador2++){
            divisao = array[contador1][contador2] / numero
            console.log(`${array[contador1][contador2]} / ${numero} = ${divisao}`)
        }
    } 
}
elementos(array,numero)



