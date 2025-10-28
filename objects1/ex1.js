var prompt = require('prompt-sync')();

const cachorro = {
    nome: "Chaos",
    idade: 9,
    adotado: true,
    validarIdoso: () => {
        if (this.idade >= 10) {
            return "Idoso!";
        } else {
            return "Jovem!";
        }
    },
    aumentarIdade: function () {
        return this.idade++;
    }
}

cachorro.aumentarIdade();
console.log(cachorro.idade);
console.log(cachorro.validarIdoso());


console.log(cachorro.nome);
