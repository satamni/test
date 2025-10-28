var prompt = require('prompt-sync')();

let ano = +prompt("Digite o ano que nasceu: ");
/* let idade = 2025 - ano;

for (let i = 0; i <= idade; i++) {
    console.log(`${ano}: ${i} anos`);
    ano++;
} */

for (let i = ano; i <= 2025; i++) {
    console.log(`Em ${i} sua idade é: ${i - ano}`);
}
