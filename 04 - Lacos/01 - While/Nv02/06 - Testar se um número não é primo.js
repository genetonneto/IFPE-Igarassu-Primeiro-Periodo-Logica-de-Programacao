// Implemente um programa capaz de testar se um número não é primo

let numero = 48;
let nDivisores = 0;
let contador = 0;

while (contador <= numero) {
    contador++;
    if (numero % contador == 0) {
        nDivisores++
    }
}
console.log(nDivisores)

if (nDivisores == 2) {
    console.log('primo');
} else {
    console.log('composto');
}