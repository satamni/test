var prompt = require('prompt-sync')();

/* 
let soma = 0;

for (let i = 10; i <= 100; i += 5) {
    soma += i;
    console.log(soma);
} 
*/

const n = +prompt("Digite um número: ");
let result = 0;

if (isNaN(n)) {
    console.log("Número Inválido.");
} else {
    for (let i = 1; i <= 10; i++) {
        result = i * n;
        console.log(`${i} x ${n} = ${result}`);
    }
}
