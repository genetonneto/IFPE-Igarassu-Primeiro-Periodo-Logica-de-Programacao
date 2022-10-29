// Implemente um programa capaz testar se um número é primo

let numero = 47;
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