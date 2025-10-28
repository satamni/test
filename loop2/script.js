var prompt = require('prompt-sync')();

const n1 = Number(prompt("Primeiro número: "));
const n2 = Number(prompt("Segundo número: "));
let op;

if (isNaN(n1) || isNaN(n2)) {
    console.log("Número inválido!");
} else {
    while (true) {
        op = prompt("Operador (+, -, *, /): ");
        if (op === "+") {
            console.log(`Soma: ${n1 + n2}`);
            prompt();
            console.clear();
            continue;
        }
        if (op === "-") {
            console.log(`Subtração: ${n1 - n2}`);
            prompt();
            console.clear();
            continue;
        }
        if (op === "*") {
            console.log(`Multiplicação: ${n1 * n2}`);
            prompt();
            console.clear();
            continue;
        }
        if (op === "/") {
            if (n2 === 0) {
                console.log("Erro: Tente um número diferente de 0 para o divisor");
                console.clear();
            } else {
                console.log(`Divisão: ${n1 / n2}`);
                prompt();
                console.clear();
            }
            continue;
        }
        console.log("Operador incorreto!");
        break;
    }
}