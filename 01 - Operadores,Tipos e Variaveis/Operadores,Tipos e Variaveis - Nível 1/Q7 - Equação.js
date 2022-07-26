// Solucionar a equação: f(x) = x² + 2x – 3, para uma valor determinado de x;

let a = 1
let b = 2
let c = -3

let delta = (b ** 2) - (4 * a * c)
console.log('Valor de Delta:', delta)

let x1 = (-b + Math.sqrt(delta)) / (2 * a)
console.log('Valor da raiz de X1:', x1)

let x2 = (-b - Math.sqrt(delta)) / (2 * a)
console.log('Valor da raiz de X2:',x2)


