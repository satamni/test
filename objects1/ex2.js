var prompt = require('prompt-sync')();

const lampada = {
    ligar: function() {
        if (!this.estaLigada) {
            throw new Error()
        } else {
            return;
        }
    },
    desligar: function() {
        if (this.estaLigada) {
            return this.estaLigada = false;
        } else {
            return;
        }
    }
}

lampada.desligar();
console.log(lampada.estaLigada);
