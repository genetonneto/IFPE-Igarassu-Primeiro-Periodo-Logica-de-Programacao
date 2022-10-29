// Implemente um programa capaz de computar o fatorial de um número

let numero = 6;
let contador = 1;
let resultado = 1;

while (contador <= numero) {
    resultado *= contador;
    contador++;
}
console.log(resultado)