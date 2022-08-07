/* 
implemente um subprograma capaz de dado um array como parâmetro, imprime o primeiro (e só o primeiro)
elemento impar do array 

saida:                                                                                                                                 
5 é o primeiro elemento impar do array! 
*/ 

let array = [
    [8, 6, 10],
    [4, 2]
] 

function elemento(array){
    let boomlean = false 
    for(let linha = 0; linha < array.length && !boomlean; linha++){
        for(let coluna = 0; coluna < array[linha].length && !boomlean; coluna++){
            if(array[linha][coluna] % 2 == 1){
                console.log(`${array[linha][coluna]}`)
                boomlean = true
            }
        }
    }
    if(boomlean == false){
        console.log("não tem impar")
    }
}
