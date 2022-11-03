// Implementar um subprograma que dados dois vetores, retorna qual deles possui a maior soma de seus elementos

let array1 = [1, 2, 3, 4, 5]
let array2 = [1, 2, 3, 4, 5]
function elementos(array1, array2) {
    let soma1 = 0
    for (let cont1 = 0; cont1 < array1.length; cont1++) {
        soma1 = soma1 + array1[cont1]
    }
    let soma2 = 0
    for (let cont2 = 0; cont2 < array2.length; cont2++) {
        soma2 = soma2 + array2[cont2]
    }

    if (soma1 > soma2) {
        return array1
    } else if (soma2 > soma1){
        return array2
    } else {
        return 'resultados iguais'
    }
}

console.log(elementos(array1, array2))
