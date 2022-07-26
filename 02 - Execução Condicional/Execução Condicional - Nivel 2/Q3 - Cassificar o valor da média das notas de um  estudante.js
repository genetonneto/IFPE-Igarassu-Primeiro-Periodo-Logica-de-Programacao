/*
 Dados quatro notas, computar e classificar o valor da média das notas de um  estudante como 
aprovado (> 6), reprovado (< 4) e recuperação (caso contrário);
*/

let nota1 = 4.4
let nota2 = 1.6
let nota3 = 2.8
let nota4 = 3.7

let media = (nota1 + nota2 + nota3 + nota4)/4

if(media > 6){
	console.log(media, 'O estudante foi aprovado')
}else if(media <= 4){
	console.log(media, 'O estudante foi reprovado')
}else {
	console.log(media, 'O estudante foi para recuperação')
}