var prompt = require('prompt-sync')();

const telefone = {
    numero: 5399105531,
    credito: 5,
    mudarNumero: function(numero) {
        return this.numero = numero;
    },
    tocar: function() {
        return "Trim Trim!";
    },
    ligar: function(numero) {
        if (this.credito > 0) {
            this.credito--;
            return `Ligando para ${numero}... (${this.credito} créditos restantes)`;
        } else {
            return `Não foi possível realizar a ligação. (Saldo insuficiente)`;
        }
    }
}

telefone.mudarNumero(5391136666);

console.log(telefone.numero);

console.log(telefone.tocar());

console.log(telefone.ligar(53991055431));