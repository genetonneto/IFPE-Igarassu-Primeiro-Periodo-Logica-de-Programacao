//Implemente um programa capaz de dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3)

let n1 = 20;
let n2 = 2;
let contador = 0;

while (n1 >= n2) {
    n1 = n1 - n2;
    contador++
}
console.log(contador)
