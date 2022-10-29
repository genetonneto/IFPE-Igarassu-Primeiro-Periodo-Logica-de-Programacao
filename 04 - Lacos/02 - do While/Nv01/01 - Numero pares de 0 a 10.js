//NUMEROS PARES DE 0 A 10;

let numero = 0;

do {
    numero += 2;
    
    if (numero % 2 == 0) {
        console.log(numero)
    }
} while (numero < 10);