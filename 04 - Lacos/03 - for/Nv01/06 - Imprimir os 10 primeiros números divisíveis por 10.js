// Imprimir os 10 primeiros números divisíveis por 10;
console.log('Teste 01');
for (let i = 0; i <= 100; i+=10) {
    console.log(i);
}
console.log('.......................');
console.log('Teste 02');
for (let i = 0; i <= 100; i++) {
    if (i % 10 == 0) {
        console.log(i);
    }
}